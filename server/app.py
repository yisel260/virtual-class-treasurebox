#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import Flask,request, make_response, session
from flask_restful import Resource
from flask import jsonify

# Local imports
from config import app, db, api
# Add your model imports
from models import Teacher, Section, Student, Prize

import json

# Views go here!
class Teachers(Resource):

    def get(self):
        response_dict_list = [n.to_dict() for n in Teacher.query.all()]
        response = make_response(
            response_dict_list,
            200, )
        return response
    
    def post(self):
        data = request.get_json()
        new_teacher = Teacher(
            fname=data.get('fname'),
            lname=data.get('lname'),
            email=data.get('email'),
            school=data.get('school'),
        )
        db.session.add(new_teacher)
        db.session.commit()
        response_dict = jsonify(new_teacher.to_dict())
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


class Login(Resource):

    def post(self):
        user = Teacher.query.filter(Teacher.email == request.get_json("username")).first()
        print(user.id)
        session['user_id'] = user.id
        return user.to_dict()
    
class Logout(Resource):
    def delete(self): # just add this line!
        session['user_id'] = None
        return {'message': '204: No Content'}, 204
    
class CheckSession(Resource):
    def get(self):
        user = Teacher.query.filter(Teacher.id == session.get('user_id')).first()
        if user:
            return user.to_dict()
        else:
            return {}, 401


class Sections(Resource):
    def get(self):
        response_dict_list = [n.to_dict() for n in Section.query.all()]
        response = make_response(
            response_dict_list,
            200, )
        return response
    
    def post(self):
        data = request.get_json()
        new_section = Section(
            name=data.get('name'),
            section_code=data.get('section_code'),
            teacher_id=data.get('teacher_id'),
        )
        db.session.add(new_section)
        db.session.commit()
        response_dict = jsonify(new_section.to_dict())
        response = make_response(
             response_dict,
            201,
        )
        return response
    
class SectionBySectionCode(Resource):
    def get(self, section_code):
        response_dict = Section.query.filter_by(section_code=section_code).first().to_dict()
        response = make_response(
            response_dict,
            200,
        )
        return response
    
class SectionById(Resource):
    def get(self, section_id):
        response_dict = Section.query.filter_by(id=section_id).first().to_dict()
        response = make_response(
            response_dict,
            200,
        )
        return response
    
class SectionsByTeacher(Resource):
    def get(self, teacher_id):
        
        sections = Section.query.filter_by(teacher_id=teacher_id).all()

        response_dict = [n.to_dict() for n in sections ]

        response = make_response(
            response_dict,
            200,
        )
        return response
    
    
    
class Students(Resource):
    def get(self):
        response_dict_list = [n.to_dict() for n in Student.query.all()]
        response = make_response(
            response_dict_list,
            200, )
        return response
    
    def post(self):
        data = request.get_json()
        new_section = Student(
            name=data.get('name'),
            password=data.get('password'),
            points=data.get('points'),
            section_id=data.get('section_id'),
        )
        db.session.add(new_section)
        db.session.commit()
        response_dict = jsonify(new_section.to_dict())
        response = make_response(
             response_dict,
            201,
        )
        return response
    
class StudentsById(Resource):

    def get(self,student_id):
        response_dict = Student.query.filter_by(id=student_id).first().to_dict()
        response = make_response(
            response_dict,
            200,
        )
        return response
    
    def patch(self, student_id):

        student = Student.query.filter_by(id = student_id).first()
        
        student.points = request.get_json().get('points')

        db.session.add(student)
        db.session.commit()

        student_dict = student.to_dict()

        response = make_response(
            student_dict,
            200
        )
        return  response


    def delete(self, student_id):
        student = Student.query.filter_by(id=student_id).first()
        response_body = student.to_dict()

        db.session.delete(student)
        db.session.commit()
        response = make_response(
            response_body,
            204
        )

        return response

    
class StudentsBySection(Resource):
    def get(self, section_id):
        studentsInSection = Student.query.filter(Student.section_id == section_id).all()
        response_dict = [n.to_dict() for n in studentsInSection]
        response = make_response(
            response_dict,
            200,
        )
        return response
    
class StudentLogIn(Resource):

    def post(self):
        student = request.get_json()
        studentUserName = student.get('studentUserName')
        print(type(studentUserName))

        studentUser = Student.query.filter(Student.name == studentUserName).first()

        password = student.get('password')
        if password == studentUser.password:
            #  session['user_id'] = studentUser.id
            response = make_response(studentUser.to_dict(), 200)
            return response 
    
# class Logout(Resource):
#     def delete(self): # just add this line!
#         session['user_id'] = None
#         return {'message': '204: No Content'}, 204

class Prizes(Resource):

    def get(self):
        response_dict_list = [n.to_dict() for n in Prize.query.all()]
        response = make_response(
            response_dict_list,
            200, )
        return response
    

class PrizesByTeacher(Resource):

    def get(self, teacher_id):
        prizes = Prize.query.filter_by(teacher_id=teacher_id).all()
        print(prizes)
        response_dict_list = [n.to_dict() for n in prizes]
        response = make_response(
            response_dict_list,
            200, )
        return response
    
    
# class PrizesByTeacher(Resource):

#     def get(self):
#         response_dict_list = [n.to_dict() for n in Prize.query.all()]
#         response = make_response(
#             response_dict_list,
#             200, )
#         return response
    

    # def post(self):
    #     data = request.get_json()
    #     new_teacher = Prize(
    #         fname=data.get('fname'),
    #         lname=data.get('lname'),
    #         email=data.get('email'),
    #         school=data.get('school'),
    #     )
    #     db.session.add(new_teacher)
    #     db.session.commit()
    #     response_dict = jsonify(new_teacher.to_dict())
    #     response = make_response(
    #          response_dict,
    #         201,
    #     )
        return response
    
    
api.add_resource(TeacherByID, '/teachers/<int:id>')
api.add_resource(Teachers, '/teachers')
api.add_resource(Login,'/login')
api.add_resource(Logout,'/logout')
api.add_resource(CheckSession, '/check_session')
api.add_resource(Sections,'/sections')
api.add_resource(SectionBySectionCode, '/sections/<string:section_code>')
api.add_resource(SectionById, '/sections/<int:section_id>')
api.add_resource(Students, '/students')
api.add_resource(StudentsById, '/studentsById/<int:student_id>')
api.add_resource(StudentsBySection,"/studentsbysection/<int:section_id>")
api.add_resource(StudentLogIn, '/studentlogin')
api.add_resource(Prizes, '/prizes')
api.add_resource(PrizesByTeacher, '/prizesbyteacher/<int:teacher_id>')
api.add_resource(SectionsByTeacher,"/sectionsbyteacher/<int:teacher_id>")

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
