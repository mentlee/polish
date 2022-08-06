from fastapi import APIRouter, Request
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from authlib.integrations.starlette_client import OAuth
from dictionary.services.user import create_user, get_user_by_provider_id

from env import GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
from .db import get_session

credentials = {
    "client_id": GOOGLE_CLIENT_ID,
    "client_secret": GOOGLE_CLIENT_SECRET,
}

router = APIRouter()
oauth = OAuth()
oauth.register(
    "google",
    client_id=GOOGLE_CLIENT_ID,
    client_secret=GOOGLE_CLIENT_SECRET,
    server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
    client_kwargs={"scope": "openid email profile"},
)

google = oauth.create_client("google")


@router.get("/login")
async def login_via_google(request: Request):
    redirect_url = request.url_for("auth_via_google")
    return await google.authorize_redirect(request, redirect_url)


@router.get("/auth")
async def auth_via_google(request: Request):
    token = await google.authorize_access_token(request)

    if token:
        session = get_session()
        user = token["userinfo"]
        provider_id = user["sub"]
        found_user = get_user_by_provider_id(session, provider_id)

        if found_user:
            content = jsonable_encoder({
                "status": "found",
                "email": found_user.email
            })

            return JSONResponse(content=content)

        email = user["email"]
        created_user = create_user(session, provider_id, email)
        content = jsonable_encoder({
            "status": "created",
            "email": created_user.email
        })

        return JSONResponse(content=content)
