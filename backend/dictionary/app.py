from fastapi import FastAPI
from starlette.middleware.sessions import SessionMiddleware
from strawberry.fastapi import GraphQLRouter
import strawberry

from dictionary.graphql.api import Query, Mutation
from env import SESSION_SECRET
from .graphql.extensions import SessionExtension
from .google import router

app = FastAPI()

app.add_middleware(SessionMiddleware, secret_key=SESSION_SECRET)
app.include_router(router)

schema = strawberry.Schema(
    query=Query, mutation=Mutation, extensions=[SessionExtension]
)
graphql_router = GraphQLRouter(schema)

app.include_router(graphql_router, prefix="/graphql")
