#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask,request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Teacher


# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

class Teachers(Resource):

    def get(self):

        response_dict_list = [n.to_dict() for n in Teacher.query.all()]

        response = make_response(
            response_dict_list,
            200,
        )

        return response
    
    def post(self):
        new_teacher = Teacher(
            fname=request.form['fname'],
            lname=request.form['lname'],
            email=request.form['email'],
            school=request.form['school'],
        )

        db.session.add(new_teacher)
        db.session.commit()

        response_dict = new_teacher.to_dict()

        response = make_response(
            response_dict,
            201,
        )

        return response
    
class TeacherByID(Resource):

    def get(self, id):

        response_dict = Teacher.query.filter_by(id=id).first().to_dict()

        response = make_response(
            response_dict,
            200,
        )

        return response

api.add_resource(TeacherByID, '/teachers/<int:id>')
api.add_resource(Teachers, '/teachers')



if __name__ == '__main__':
    app.run(port=5555, debug=True)

