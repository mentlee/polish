from enum import Enum
import strawberry


@strawberry.enum
class MutationStatus(Enum):
    found = "found"
    not_found = "not_found"
    created = "created"
    removed = "removed"
    updated = "updated"
