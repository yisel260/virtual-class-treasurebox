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




#Reference Code for CRUD actions:

# class Plants(Resource):

#     def get(self):
#         plants = [plant.to_dict() for plant in Plant.query.all()]
#         return make_response(jsonify(plants), 200)

#     def post(self):
#         data = request.get_json()

#         new_plant = Plant(
#             name=data['name'],
#             image=data['image'],
#             price=data['price'],
#         )

#         db.session.add(new_plant)
#         db.session.commit()

#         return make_response(new_plant.to_dict(), 201)


# api.add_resource(Plants, '/plants')


# class PlantByID(Resource):

#     def get(self,id):
#         plant = Plant.query.filter_by(id=id).first().to_dict()
#         return make_response(jsonify(plant), 200)
    
#     def patch(self, id):

#         plant = Plant.query.filter_by(id = id).first()
        
#         plant.is_in_stock = request.get_json().get('is_in_stock')

#         db.session.add(plant)
#         db.session.commit()

#         plant_dict = plant.to_dict()

#         response = make_response(
#             plant_dict,
#             200
#         )
#         return  response
    
#     def delete(self, id):
#         plant = Plant.query.filter_by(id=id).first()
#         db.session.delete(plant)
#         db.session.commit()

#         response_body = {}

#         response = make_response(
#             response_body,
#             204
#         )

#         return response

# api.add_resource(PlantByID, '/plants/<int:id>')
