from sqlalchemy import BigInteger, Column, ForeignKey, String
from sqlalchemy.orm import relationship
from .base import Base


class Role(Base):
    __tablename__ = "user_role"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    name = Column(String, unique=True)


class User(Base):
    __tablename__ = "user"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    provider_id = Column(String, unique=True)
    email = Column(String, unique=True)
    role_id = Column(BigInteger, ForeignKey("user_role.id"), nullable=False)
    role = relationship("Role")
