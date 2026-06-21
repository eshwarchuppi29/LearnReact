from fastapi import FastAPI
from app.routers.students import router as student_router

app=FastAPI()
app.include_router(student_router)

@app.get("/")
def home():
        return{"message":"Welocme to Student FastAPI"}