from sqlalchemy.orm import Session
from ..model.user import Role, User


def get_user_role_by_name(session: Session, name: str) -> Role:
    role = session.query(Role).filter_by(name=name).first()
    return role


def create_user_role(session: Session, name: str) -> Role:
    role = Role(name=name)
    session.add(role)
    session.commit()
    return role


def get_user_by_provider_id(session: Session, provider_id: str) -> User:
    user = session.query(User).filter_by(provider_id=provider_id).first()
    return user


def create_user(session: Session, provider_id: str, email: str) -> User:
    role = get_user_role_by_name(session, name="regular")
    user = User(provider_id=provider_id, email=email, role=role)
    session.add(user)
    session.commit()
    return user
