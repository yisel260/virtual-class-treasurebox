#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Teacher , Section, Student, Prize

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        Teacher.query.delete()
        Section.query.delete()
        Student.query.delete()
        Prize.query.delete()
       
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
            points = "50",
            section_id=rc(sections).id)
            students.append(student)
            db.session.add(student)
            db.session.commit()

        prizes=[]

        eraser = Prize( 
            foto = "https://i.ebayimg.com/images/g/zeAAAOSwbithGVSJ/s-l1600.jpg",
            description="Random small eraser",
            point_value="5",
            inventory="100",
            number_requested="0",
            teacher_id=rc(teachers).id)
        
        prizes.append(eraser)
        
        car = Prize( 
            foto = "https://m.media-amazon.com/images/I/71vw5SedMqL._AC_UF894,1000_QL80_.jpg",
            description="Random color small plastic car",
            point_value="15",
            inventory="20",
            number_requested="0",
            teacher_id=rc(teachers).id)
        prizes.append(car)

       
        smallBubbleWand = Prize( 
            foto = "https://m.media-amazon.com/images/I/610tla8tqPL.jpg",
            description="Small bubble wand",
            point_value="20",
            inventory="20",
            number_requested="0",
            teacher_id=rc(teachers).id)
        prizes.append(smallBubbleWand)
 
        smallBall = Prize( 
            foto = "https://s7.orientaltrading.com/is/image/OrientalTrading/FXBanner_808/1-1-2-bulk-50-pc--mini-multicolor-rubber-bouncy-ball-assortment~5_857.jpg",
            description="Small bubble wand",
            point_value="20",
            inventory="10",
            number_requested="0",
            teacher_id=rc(teachers).id)
        prizes.append(smallBall)
     
        beachBall = Prize( 
            foto = "https://m.media-amazon.com/images/I/51YUGRwZUCL.jpg",
            description="Large Beach Ball",
            point_value="100",
            inventory="5",
            number_requested="0",
            teacher_id=rc(teachers).id)
        
        prizes.append(beachBall)

        db.session.add_all(prizes)
        db.session.commit()


        print("Seed completed successfully!")