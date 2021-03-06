# Arch.md

Our team has decided to build 2 web apps and 1 web service for the project.

### 1. Why break the frontend into 2 parts?

We decided to break the frontend into 2 web apps, FormFiller and FormManager, in consideration of their separate responsibility & functionality and different user cases.

a. FormFiller

For P1, we assigned the following responsibility $ functionality to FormFiller:
		
i. Search for a new form

ii. Fill out a new form

iii. Save progress on a filled form

iv. Submit a filled form
		
Target users: clinicians who need to interact with form through a form filling UI

b. FormManager

For P1, we assigned the following responsibility $ functionality to FormManager:

i. Add a new form

ii. Update an existing form

iii. Delete an existing form

Target users: public health who need to administer forms through a dashboard UI


### 2. What stacks are used for frontend web apps?

We decided to use React for building both web apps FormFiller and FormManager.
The reasons are stated below:

* All team members who devote themselves to working on the frontend have decent experience with React in past courses (CSC301, CSC309, etc) or side projects
* For the purpose of learning Redux, a more advanced and systemized way of managing React states, which is also one of the ultimate learning goals of our team in the course
* React is a mature and stable technology for building web apps, which allows us to fastly build a prototype and also enriching the app with a sea of libraries
* To realize the web app UI design done on Figma, the developer of the two web apps had come to an agreement to use Bootstrap as the UI library, which is well supported by React
* React final form will be used for rendering the forms for the form filler. For the reason that it is simple to use and high performance which is important for webapps

### 3. What stacks are used for backend web service?

We decided to use Django for building the backend web service. We have chosen Django for our backend as it is a versatile framework that is both easy to learn and use, and fulfills all of our needs on the backend. Some major strengths of Django are:
* Database models: Django offers a powerful ORM API that helps manage databases complex SQL databases in a concise way, without requiring to write any SQL code. The framework allows us to design a relational database in a similar structure as python classes, which would then handle migrations and SQL server interactions automatically.
* REST framework: Django also offers a complementary framework that effectively handles REST API requests, automating a lot of work. This framework handles many aspects of the application such as authorization security, JSON generation/parsing, etc. This leaves us to simply work with data as python objects, only having to create simple routes and API-provided serializers for handling data transformation.

We have also decided to use an SQL-based database system for this project. During the development, we resort to using SQLite for simplicity, while we will likely migrate to PostgreSQL or MySQL for the production release. We chose an SQL-based database over a NoSQL system like MongoDB, because it provides us with a simpler way of organizing relational data, and is more efficient when large amounts of data are stored.
