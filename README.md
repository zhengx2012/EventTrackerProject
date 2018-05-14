# Trip Planner

## Skill Distillery Week 11 Event Planner Project

### Description

Trip Planner helps you log all your upcoming trips. It will take all your trip information from the city to the cost.

### How it works

This application uses RESTful API Services to route to the database. The database is created using MySQL Workbench and consists of an auto incremented ID, city, state, country, date, flight time, flight number, flight company, and trip expenses. Users will be able to input all the data regarding their trip plans. City, state, country, date, and trip expenses are not null values and will have to be inputted by the user.

TripPlannerJPA holds the Planner entity and the Spring Starter Project, TripPlannerREST holds the PlannerRepository Interface which gets data from the database. The PlannerServiceImpl class has methods that call the PlannerRepository to get the data from the database. It acts as middleware to keep users from accessing the data directly. The PlannerController contains all the routes.

Inside the PlannerController, there are paths for CRUD operations. The URI, planner with a GET method, retrieves all of the plans in the database, planner/{id} with the @PathVariable id finds a plan by id, and also uses a GET method.

### Lessons Learned

* Make sure all .gradle and .propertie files are properly filled out.
*

### Technologies Used

* Spring Tool Suite
* RESTful Services
* Git
* Atom
* SD Instructors

### Extra's if there was more time

* Create a separate table for restaurants, must see spots, and hotel details.
