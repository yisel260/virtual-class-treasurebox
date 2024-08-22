# Treasure Box 

Treasure box is application meant to be used in classroom or similar settings.

There are two types of users: teachers and students. 

Teachers often use reward systems where students earn prizes by doing well in class. This involves creating some sor of  physical currency the students can use to purchase physical rewards in a box or display. Creating, organizing and sometimes even copying and cuting out the currency takes valuable time most teachers do not have, not to mention storing, keeping track of the currrency and helping students look for, and resolve disputes when the currency  is lost or taken.  Students' shopping for prizes takes valuable up  class time as each is called and allowed to browse the prizes. 

With this application teachers do not have to worry about keeping track of a physical currecy, neither do the students. Points are awarded electrocnically and kept track of in a database. No classtime need to be set up to allow students to shop for prizes because they can see the prizes available anytime as long as they have acces to a device. 

Teachers can save money by only purchaing the exact amount of prizes requested and not wasting money on unpopular prizes. They can also save space in their classsroom as they don't have to store the physical items for long periods fo time. Teachers have control over what prizes to offer, how many of each prize they are willing to offer, and how many points will purchase that prize. 

Teachers can : 
 
 - create a new account
 - add classes (sections) 
 - add students to each class 
 - add prizes
 - see which students have ordered which prizes 
 - addd,delete, updtadate, and create prizes
 - keep track of thier prizes' inventory and request 
 - Track which students have recieved thier prizes 

 Students can : 

 - login in to thier own account using a teacher provided class code and thier own password
 - shop for prizes thier teacher is offering using thier teacher awarded points 


Treasure box has 5 models, Teacher, Section, Student, Prize and Orders. 

- A Teacher has many sections 
- A Teacher has many students through Sections
- A Sections belongs to  one teacher 
- Section has many students 
- Each Student belongs to  a single section
- A Teacher has many Prizes 
- A Prize can have many Students through Order
- A  Student can have many Prizes  through Order 


Getting started : 

Client: run npm install and npm start as usual 
Server: run pipenv install as usual 
     This project has a proxy server set up on port 5555.  Export port to 5555 ( export FLASK_RUN_PORT=5555)



The application loads a *root* component first that checks if there is a  user already logged in. If there is then TeacherHome page will be rendered, diplaying the students in the any sections and students the teacher has previously created, as well as the Navigation Bar which allows teacher to access different routes. This Root elemet is also where most of my states live as they need be accessible though the application once a user has logged in. 

If the application does not find a user  it will redirect to a login page.  

### Student Features 

The student side of the application does not have its own routing set up as they are directed to each page thorugh entering the correct password  or code. 

From Login page students can enter thier class code (provided by thier teacher). If the class code matches a class listed the students names are displayed to they can then login in to their personal account. 

#### Student Shopping page 
 
Students here can see all the prizes added by thier teacher.  Cliking them will add them to their cart. Once students click "get prizes"  and order is created for each prize assigning the students those prizes. Then are then added to thier purchased prizes.  


### Teacher Features 

The teacher side has various routes set up. 

#### Teacher Home 

Once logged in a teachers home page will display the students from thier first listed class. Teachers can select a different class in the dropdown menu. 
This page displays the students in cards and allows the teaher to award points to each student at the touch of a button. 

####  Classes 

On this page teachers see thier student roster, add a class , and add or delete students.  Various components are at play here as differnt types of data is displayed. There are also button that toggle on or off , to help organize what information is displayed. 

#### Prizes 

This page allows the teacher to see her prizes listed. He or she can then add , update or delete prizes as needed. Under "show student orders", the teacher can see what orders need to be fulfilled and keep track of them as she or he does that.  



## File descriptions: 

### Client side 

App.js
Index.js 
Router.js 

#### Pages Folder 

#### Components Folder 

AddPriceForm.js

AddSectionFrom.js

AddStudentForm.js

component.css

EditPrizeForm.js 

Header.js 

Login.js 

LoginStudentCard.js 

NavBar.js

PrizeCard.js

PrizesDataTable.js

StudentOrder.js

#### Pages Folder 

Classes.js
ErrorPage.js
Home.js 
LoginPage.js 
pages.css 
Prizes.js 
Root.js 
StudentShopping.js 
StudentViewClass.js 
TeacherHome.js 



### Server 

app.py 

models.py 

seed.py 






