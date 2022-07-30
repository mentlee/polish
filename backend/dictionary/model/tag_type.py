from sqlalchemy import BigInteger, Column, String
from .base import Base


class TagTypeModel(Base):
    __tablename__ = "tag_type"

    id = Column(BigInteger, primary_key=True, autoincrement=True)
    name = Column(String, unique=True)
    description = Column(String, nullable=True)
