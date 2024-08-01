from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
from config import db

class Teacher(db.Model, SerializerMixin): 
    __tablename__ = "teachers"

    id =db.Column(db.Integer, primary_key=True)
    fname=db.Column(db.String)
    lname=db.Column(db.String)
    email=db.Column(db.String)
    school=db.Column(db.String)
    sections=db.relationship('Section', back_populates="teacher", cascade='all, delete-orphan')
    prizes=db.relationship('Prize', back_populates="teacher", cascade='all, delete-orphan')
    serialize_rules = ('-prizes.teacher','-sections.teacher',)

    def __repr__(self):
        return f"{self.fname}{self.lname} from {self.school}"
    
    @validates('fname')
    def validate_fnamel(self, key, fname):
        if fname:
            return fname
        else: 
            raise ValueError("name must be a nonempty string")
    
    @validates('lname')
    def validate_lname(self, key, lname):
        if lname:
            return lname
        else: 
            raise ValueError("last name must be a nonempty string")    
        
    @validates('email')
    def validate_email(self, key, email):
        if email:
            matched_email = Teacher.query.filter(Teacher.email== email).first()
            if matched_email:
                raise ValueError("Email is already in use") 
            elif'@' not in email:
                raise ValueError("Failed simple email validation")
        return email
    

class Section(db.Model, SerializerMixin):
    __tablename__ ="sections"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    section_code = db.Column(db.String, nullable=False, unique=True)
    teacher_id= db.Column(db.Integer, db.ForeignKey("teachers.id"))
    teacher = db.relationship("Teacher",back_populates ="sections")
    students = db.relationship('Student', back_populates="section", cascade='all, delete-orphan')
    def __repr__(self):
        return f"{self.name} class code: {self.section_code}"


class Student(db.Model, SerializerMixin):
    __tablename__ ="students"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable=False)
    points = db.Column(db.Integer)
    section_id= db.Column(db.Integer, db.ForeignKey("sections.id"))
    section = db.relationship("Section",back_populates ="students")
    serialize_rules = ('-prizes.student','-section.student','-teacher.student')


    def __repr__(self):
        return f"student:{self.name} password:{self.points} "

class Prize(db.Model):
    __tablename__ ="prizes"

    id = db.Column(db.Integer, primary_key=True)
    foto = db.Column(db.String)
    description=db.Column(db.String)
    point_value=db.Column(db.Integer)
    inventory=db.Column(db.Integer)
    number_requested=db.Column(db.Integer, nullable=True)
    teacher_id=db.Column(db.Integer, db.ForeignKey("teachers.id"))
    teacher=db.relationship("Teacher", back_populates="prizes")
    serialize_rules = ('-prizes.teacher')


# student_prizes = db.Table(
#     'students_prizes',
#     metadata,
#     db.Column('employee_id', db.Integer, db.ForeignKey(
#         'employees.id'), primary_key=True),
#     db.Column('meeting_id', db.Integer, db.ForeignKey(
#         'meetings.id'), primary_key=True)
# )


 