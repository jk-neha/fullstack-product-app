from fastapi import Depends,FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import Product
from database import SessionLocal
import database_models
from database import engine
from sqlalchemy.orm import Session
app=FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:5173",
        "https://fullstack-product-dkwkrt7az-nehas-projects-frontend.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

database_models.Base.metadata.create_all(bind=engine)
products = [
    Product (id=1, name="laptop",description="Asus Lap",price=55500.00,quantity=1),
    Product (id=2, name="phone",description="Nothing 3a",price=25000.00,quantity=1),
    Product (id=3, name="smart watch",description="gadpro",price=1900.00,quantity=1),
    Product (id=4, name="notbook",description="classmate",price=65.00,quantity=2)
]


# def init_db():
#     db=SessionLocal()
#     count=db.query(database_models.Product).count()
#     if count==0:
#         for product in products:
#             db.add(database_models.Product(**product.model_dump()))
#     db.commit()
# init_db()
def init_db():
    db = SessionLocal()
    try:
        count = db.query(database_models.Product).count()

        if count == 0:
            for product in products:
                db.add(database_models.Product(**product.model_dump()))
            db.commit()
    finally:
        db.close()

@app.on_event("startup")
def startup():
    init_db()

##to use it in all methids: dpenedency injection
def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/products")
def getall(db:Session=Depends(get_db)):
    db_products=db.query(database_models.Product).all()
    return db_products

@app.get("/products/{id}")
def egtby_id(id:int,db:Session=Depends(get_db)):
    db_product=db.query(database_models.Product).filter(database_models.Product.id==id).first()
    if db_product:
        return db_product
    return "id not found"

@app.post("/products")
def insert_products(product:Product,db:Session=Depends(get_db)):
    db.add(database_models.Product(**product.model_dump()))
    db.commit()
    return product


@app.put("/products/{id}")
def update_products(id:int, product: Product,db:Session=Depends(get_db)):

    #check the porduct:
    db_product=db.query(database_models.Product).filter(database_models.Product.id==id).first()
    if db_product:
        db_product.name=product.name
        db_product.description=product.description
        db_product.price=product.price
        db.commit()
        return "Porducts updated"
    else:
        return "cannot update"
        
@app.delete("/products/{id}")
def remove_products(id:int,db:Session=Depends(get_db)):
   db_product=db.query(database_models.Product).filter(database_models.Product.id==id).first()
   if db_product:
        db.delete(db_product)
       
        db.commit()
        return "deleted successfully"
   else:
    return "cannot delete"

