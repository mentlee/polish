import strawberry

from .tag import TagMutation
from .tag_type import TagTypeQuery, TagTypeMutation

@strawberry.type
class Query:
  @strawberry.field
  def tag_type() -> TagTypeQuery:
    return TagTypeQuery

@strawberry.type
class Mutation:
  @strawberry.field
  def tag_type() -> TagTypeMutation:
    return TagTypeMutation
  
  @strawberry.field
  def tag() -> TagMutation:
    return TagMutation