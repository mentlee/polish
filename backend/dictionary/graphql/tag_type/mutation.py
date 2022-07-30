import strawberry
from strawberry.types import Info

from dictionary.services.tag_type import (
    create_tag_type,
    remove_tag_type,
    update_tag_type,
)
from .type import MutationStatus, TagType, TagTypeInput, TagTypeMutationReturn


@strawberry.type
class TagTypeMutation:
    @strawberry.field
    def add(input: TagTypeInput, info: Info) -> TagTypeMutationReturn:
        session = info.context["db_session"]
        [tag_type, status] = create_tag_type(
            session, name=input.name, description=input.description
        )
        return TagTypeMutationReturn(
            tag_type=TagType.from_orm(tag_type), status=MutationStatus[status]
        )

    @strawberry.field
    def remove(name: str, info: Info) -> TagTypeMutationReturn:
        session = info.context["db_session"]
        [tag_type, status] = remove_tag_type(session, name)
        return TagTypeMutationReturn(
            tag_type=TagType.from_orm(tag_type), status=MutationStatus[status]
        )

    @strawberry.field
    def update(name: str, description: str, info: Info) -> TagTypeMutationReturn:
        session = info.context["db_session"]
        [tag_type, status] = update_tag_type(session, name, description)
        return TagTypeMutationReturn(
            tag_type=TagType.from_orm(tag_type), status=MutationStatus[status]
        )
