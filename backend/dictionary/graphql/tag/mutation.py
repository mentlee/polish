import strawberry
from strawberry.types import Info
from dictionary.graphql.type import MutationStatus
from dictionary.services.tag import create_tag

from .type import Tag, TagInput, TagMutationReturn


@strawberry.type
class TagMutation:
    @strawberry.field
    def add(input: TagInput, info: Info) -> TagMutationReturn:
        session = info.context["db_session"]
        [tag, status] = create_tag(
            session,
            name=input.name,
            tag_type_names=input.types,
            description=input.description,
        )
        return TagMutationReturn(status=MutationStatus[status], tag=Tag.from_orm(tag))
