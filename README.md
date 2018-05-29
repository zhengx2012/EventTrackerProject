# Trip Planner

## Skill Distillery Week 11 Event Planner Project

### Description

Trip Planner helps you log all your upcoming trips. It will take all your trip information from the city to the cost.This is my first SPA done with Javascript on the front-end.

### How it works

This application uses RESTful API Services to route to the database. The database is created using MySQL Workbench and consists of an auto incremented ID, city, state, country, date, flight time, flight number, flight company, and trip expenses. Users will be able to input all the data regarding their trip plans. City, state, country, date, and trip expenses are not null values and will have to be inputted by the user.

TripPlannerJPA holds the Planner entity and the Spring Starter Project, TripPlannerREST holds the PlannerRepository Interface which gets data from the database. The PlannerServiceImpl class has methods that call the PlannerRepository to get the data from the database. It acts as middleware to keep users from accessing the data directly. The PlannerController contains all the routes.

Inside the PlannerController, there are paths for CRUD operations. The URI, planner, with a GET method, retrieves all of the plans in the database, planner/{id} with the @PathVariable id finds a plan by id, and also uses a GET method. The planner route with the POST method will create new plans. There are two versions of updating, a replace all based on the planner/{id} with a PUT method, and a replace for certain portions of the plan by using a PATCH method. Lastly, the DELETE method for planner/{id}, will delete any plans the user has.

The front-end of this application uses Javascript with AJAX to send data to the back-end routes. The table that displays the upcoming trip's cities was done dynamically on the JS side, along with the buttons to update and delete a trip, and the update trip form. The add trip form is done on the html side, and the data is sent through AJAX upon click of the submit button.

The front-end of this application has been refractored to use Angular 5. I used RxJs to do the routing and used a date pipe to nicely display the dates. I added a class called Trip to hold the object, and a service class to handle all of the routing with HttpClient. On the HTML side, I used ngModel to pass the data back and forth with two way (banana in a box) binding. There is only one page for the front-end, and uses ngIf to change out the display based on what is clicked. Then bootstrap to just make the page a bit more user friendly.

### Lessons Learned

* Make sure all .gradle and .properties files are properly filled out.
* Name all packages correctly.
* Check dependencies to make sure they are up to date.
* Use console and network in chrome developer tools to see what data is going through to debug.
* When using type "time" in the form on the front-end side, append and extra ':00' to it to create the sql type Time.
* When copying and pasting, make sure to use the correct routes.
* Open the Java Spring project and make sure its running on port 8080 when checking to see if information is coming back from the database.

### Technologies Used

* Spring Tool Suite
* RESTful Services
* Git
* Atom
* SD Instructors
* The internet
* Angular

### Extra's if there was more time

* Create a separate table for restaurants, must see spots, and hotel details.
* Create users table so that easy person will have their own set of trips.
* Make the update form more friendly using bootstrap.
* Finish the pipe for incomplete dates.
