# from sqlalchemy.orm import sessionmaker
# from sqlalchemy import create_engine
# db_url="postgresql://postgres:LIAKAAHE@localhost/neha"
# engine=create_engine(db_url)
# SessionLocal=sessionmaker(autocommit=False,
#                           autoflush=False,
#                           bind=engine)
# #
import os
from dotenv import load_dotenv
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL, echo=True)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)