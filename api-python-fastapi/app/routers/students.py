from fastapi import APIRouter,HTTPException
from app.models.student import Student

router=APIRouter(
    prefix="/students"
)

students = [
    Student(id=1, name="Dinakar", age=20, email="dinakar@gmail.com"),
    Student(id=2, name="Ramesh", age=21, email="ramesh@gmail.com"),
    Student(id=3, name="Suresh", age=22, email="suresh@gmail.com")
]

@router.get("")
def get_students():
    return students

@router.get("/{id}")
def get_students(id:int):
    for std in students:
        if std.id==id:
            return std
        
    raise HTTPException(
        status_code=404,
        detail="Student not found"
    )

@router.post("")
def post_students(std:Student):
    students.append(std)
    return {"POST":"Am a post method","student": std}

@router.put("/{id}")
def put_student(id:int,std:Student):
   for index, student in enumerate(students):
        if student.id == id:
            students[index] = std
            return {
                "message": "Student Updated",
                "student": std
            }

@router.delete("/{id}")
def delete_student(id:int):
     for student in students:
        if student.id == id:
            students.remove(student)
            return {
                "message": "Student Deleted Successfully"
            }