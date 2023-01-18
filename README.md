# CS465
SNHU CS-465: Full Stack Development I

Final Application - Branch: module7

Architecture:

There were two sides of this project, a simple web application for the customers to view, and a SPA for the admins to manipulate the trip database. For the customer side simple web application, we utilized Express HTML. Using Express, we created different website pages using HTML. When a user clicks on a different page, Express loads in the HTML file for it. Then, JavaScript was used for the API server controllers. These controllers render the information for the simple web application. So, if the travel list became updated, the customers could see it on their end. Next, using Angular, I developed a single-page application for the admins. On this page, I developed CRUD functions so that the admins can add, edit, and delete trips from the trip database. Also, the SPA implemented authentication security by utilizing a login feature. So, only registered users could manipulate the trips. Otherwise, if the user did not have a bearer token, they couldn't access these functions at all. Lastly, for ease of use and scalability, NoSQL MongoDB was used for the databases to store the trips and the registered users.

Functionality:

In this project, JSON was used to hold the data for the simple web application. Then, to render the data to be viewable through the server, Javascript was used. Also, JavaScript was used to develop the API funtionality. At first, we were only using the json data files to use within the public web application. Then, we moved them so that the API could access it easier. Furthermore, Json aids in organizing the data for the application and making it so the data is not hard coded into the html files. When coding, it was the same process for each page on the web application. Since these pages were easy to replicate, it would be simple if the website had to be changed.

Testing:

When testing this web application, we used Postman. Postman allows us to use the url with the corresponding endpoints to test each method. Using Postman is important because even though the front-end security works by not showing buttons to users that are not logged in, we also want to make sure the functions are properly secured on the back-end. In a full stack application, each method has a corrisponding url route and endpoint, for example to delete a trip, the route is '/trips/:tripCode' and the endpoint is DELETE. Then, each endpoint can implement and require authentication in order to use them. Otherwise, without securing the endpoints, anyone would be able to access those functions through the back-end.

Reflection:

I learned a lot in this course, and can't wait to learn more in CS-470. Web applications are one of the most common application types out there. So, I know, as a developer, there will be plenty of web application projects I will be a part of. Before this class, I had no experience with full stack development, including using Express HTML, Angular, and Node.js. Also, I was able to gain more practice using HTML. Again, all of this new knowledge is very benefitial, especially for companies that are looking for employees with some web development experience.
