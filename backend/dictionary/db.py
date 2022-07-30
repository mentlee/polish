from sqlalchemy.engine import create_engine
from sqlalchemy.orm import sessionmaker
from env import DATABASE_URL

engine = create_engine(DATABASE_URL)
get_session = sessionmaker(bind=engine)
