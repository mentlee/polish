import strawberry
from typing import List
from strawberry.types import Info
from dictionary.services.tag_type import get_all_tag_types
from .type import TagType


@strawberry.type
class TagTypeQuery:
    @strawberry.field
    def all(root, info: Info) -> List[TagType]:
        session = info.context["db_session"]
        tag_types = get_all_tag_types(session)
        return [TagType.from_orm(tag_type) for tag_type in tag_types]
