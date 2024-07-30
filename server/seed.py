#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Teacher 

fake =Faker()
with app.app_context():
    
  Teacher.query.delete()

  teachers=[]
  for n in range (5):
     teacher = Teacher(
        fname=fake.firts_name(), 
        lname=fake.last_name(), 
        school=fake.company(), 
        emal=fake.email())
     teachers.append(teacher)
  db.session.add(teachers)

  if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!
