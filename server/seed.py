#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Teacher , Section, Student

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        Teacher.query.delete()
        Section.query.delete()
        Student.query.delete()
       
        teachers = []
        for n in range(5):
            teacher = Teacher(
                fname=fake.first_name(),
                lname=fake.last_name(),
                school=fake.company(),
                email=fake.email()
            )
            teachers.append(teacher)
            db.session.add(teacher)

        db.session.commit()
        
        sections =[]
        for n in range(10):
            section = Section(
                name=fake.word(),
                section_code=fake.word(),
                teacher_id=rc(teachers).id
            )
            sections.append(section)
            db.session.add(section)
        
        db.session.commit()

        students=[]
        for n in range(50): 
            student=Student(
            name = fake.first_name(),
            password = fake.word(),
            points = "0",
            section_id=rc(sections).id)
            students.append(student)
            db.session.add(student)
            db.session.commit()
        print("Seed completed successfully!")