from typing import Optional, List, Tuple
from sqlalchemy.orm import Session
from ..model import TagTypeModel


def get_tag_type_by_name(session: Session, name: str) -> Optional[TagTypeModel]:
    return session.query(TagTypeModel).filter_by(name=name).first()


def get_all_tag_types(session: Session) -> List[TagTypeModel]:
    return session.query(TagTypeModel).all()


def create_tag_type(
    session: Session, name: str, description: Optional[str] = None
) -> Tuple[TagTypeModel, str]:
    existing = get_tag_type_by_name(session, name)
    if existing:
        return [existing, "found"]
    session.add(TagTypeModel(name=name, description=description))
    session.commit()
    return [get_tag_type_by_name(session, name), "created"]


def remove_tag_type(session: Session, name: str) -> Tuple[Optional[TagTypeModel], str]:
    existing = get_tag_type_by_name(session, name)
    if not existing:
        return [None, "not_found"]
    session.delete(existing)
    session.commit()
    return [existing, "removed"]


def update_tag_type(
    session: Session, name: str, description: str
) -> Tuple[Optional[TagTypeModel], str]:
    existing = get_tag_type_by_name(session, name)
    if not existing:
        return [None, "not_found"]
    existing.description = description
    session.commit()
    return [existing, "updated"]
