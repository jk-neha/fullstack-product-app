# # from sqlalchemy.orm import sessionmaker
# # from sqlalchemy import create_engine
# # # db_url="postgresql://postgres:LIAKAAHE@localhost:5432/neha"
# # DATABASE_URL = "postgresql://neondb_owner:npg_xxxxx@ep-rough-glade-ao914z9c-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

# import os
# from dotenv import load_dotenv
# from sqlalchemy.orm import sessionmaker
# from sqlalchemy import create_engine
# load_dotenv()

# DATABASE_URL = os.getenv("DATABASE_URL")


# engine=create_engine(DATABASE_URL)
# SessionLocal=sessionmaker(autocommit=False,
#                           autoflush=False,
#                           bind=engine)

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://neondb_owner:npg_C1oTczKb6XfO@ep-rough-glade-ao914z9c-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

engine = create_engine(DATABASE_URL, echo=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)