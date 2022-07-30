from enum import Enum
from typing import Optional
import strawberry
from dictionary.graphql.type import MutationStatus
from dictionary.model import TagTypeModel

@strawberry.type
class TagType:
  id: int
  name: str
  description: Optional[str]

  @classmethod
  def from_orm(cls, tag_type: Optional[TagTypeModel]):
    if not tag_type:
      return None

    return TagType(
      id=tag_type.id,
      name=tag_type.name,
      description=tag_type.description,
    )

@strawberry.type
class TagTypeMutationReturn:
  status: MutationStatus
  tag_type: Optional[TagType] = None

@strawberry.input
class TagTypeInput:
  name: str
  description: Optional[str] = None