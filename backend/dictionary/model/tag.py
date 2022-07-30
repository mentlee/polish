from pydoc import classname
from typing import List
from sqlalchemy import BigInteger, Column, ForeignKey, String, Table
from sqlalchemy.orm import relationship
from .base import Base

class TagToTagTypeModel(Base):
  __tablename__ = "tag_to_tag_type"

  id = Column(BigInteger, primary_key=True, autoincrement=True)
  tag_id = Column(BigInteger, ForeignKey("tag.id"), primary_key=True)
  tag_type_id = Column(BigInteger, ForeignKey("tag_type.id"), primary_key=True)

class TagModel(Base):
  __tablename__ = "tag"

  id = Column(BigInteger, primary_key=True, autoincrement=True)
  name = Column(String, unique=True)
  description = Column(String, nullable=True)
  tag_types = relationship("TagTypeModel", secondary="tag_to_tag_type")
