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
 - add prizes they are offering students 
 - see which students have orders which prizes 
 - addd,delete, updtadate, and create przes, students and orders 
 - keep track of thier prizes through and inventory display 
 - Track which student have recieved thier prizes 

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
- A Prize can have many Student through Order
- A  Student can have many Prizes  through Order 


Getting started : 

Client: run npm install and npm start as usual 
Server: run pipenv install as usual 
     This project has a proxy server set up on port 5555.  Export port to 5555 ( export FLASK_RUN_PORT=5555)



