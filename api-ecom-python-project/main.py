from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "Hello Sakha, FastAPI is working!"
    }

@app.get("/students")
def get_students():
    return [
        {"id": 1, "name": "Ganesha"},
        {"id": 2, "name": "Subbu"}
    ]