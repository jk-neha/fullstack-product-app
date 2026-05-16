from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
# db_url="postgresql://postgres:LIAKAAHE@localhost:5432/neha"
DATABASE_URL = "postgresql://neondb_owner:npg_cL4DSP0OMZzg@ep-rough-glade-ao914z9c.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"

engine=create_engine(DATABASE_URL)
SessionLocal=sessionmaker(autocommit=False,
                          autoflush=False,
                          bind=engine)