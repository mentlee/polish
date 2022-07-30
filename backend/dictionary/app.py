from fastapi import FastAPI
from strawberry.fastapi import GraphQLRouter
import strawberry

from dictionary.graphql.api import Query, Mutation
from .graphql.extensions import SessionExtension

app = FastAPI()

schema = strawberry.Schema(query=Query, mutation=Mutation, extensions=[SessionExtension])
graphql_router = GraphQLRouter(schema)

app.include_router(graphql_router, prefix="/graphql")