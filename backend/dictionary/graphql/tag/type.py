from typing import List, Optional
import strawberry
from dictionary.graphql.type import MutationStatus

from dictionary.model.tag import TagModel

from ..tag_type import TagType


@strawberry.type
class Tag:
    id: int
    name: str
    types: List[TagType]
    description: Optional[str] = None

    @classmethod
    def from_orm(cls, tag: TagModel):
        if not tag:
            return None

        return Tag(
            id=tag.id,
            name=tag.name,
            description=tag.description,
            types=[TagType.from_orm(tag_type) for tag_type in tag.tag_types],
        )


@strawberry.type
class TagMutationReturn:
    status: MutationStatus
    tag: Tag


@strawberry.input
class TagInput:
    name: str
    types: List[str]
    description: Optional[str] = None
