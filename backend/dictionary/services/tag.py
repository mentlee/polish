from typing import List, Optional, Tuple
from sqlalchemy.orm import Session

from ..model import TagModel, TagTypeModel


def get_tag_by_name(session: Session, name: str):
    return session.query(TagModel).filter_by(name=name).first()


def create_tag(
    session: Session,
    name: str,
    tag_type_names: List[str],
    description: Optional[str] = None,
) -> Tuple[Optional[TagModel], str]:
    existing = get_tag_by_name(session, name)
    if existing:
        return [existing, "found"]

    tag_types = (
        session.query(TagTypeModel).filter(TagTypeModel.name.in_(tag_type_names)).all()
    )
    tag = TagModel(name=name, description=description, tag_types=tag_types)
    session.add(tag)
    session.commit()
    return [tag, "created"]


def remove_tag(session: Session, name: str):
    tag = session.query(TagModel).filter(TagModel.name == name).first()
    session.delete(tag)
    session.commit()
    return tag
