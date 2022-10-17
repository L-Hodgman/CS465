# CS465
SNHU CS-465: Full Stack Development I

**Architecture: **

  There were two sides of this project, a simple web application for the customers to view, and a SPA for the admins to manipulate the trip database. For the customer side simple web application, we utilized Express HTML. Using Express, we created different website pages using HTML. When a user clicks on a different page, Express loads in the HTML file for it. Then, JavaScript was used for the API server controllers. These controllers render the information for the simple web application. So, if the travel list became updated, the customers could see it on their end. Next, using Angular, I developed a single-page application for the admins. On this page, I developed CRUD functions so that the admins can add, edit, and delete trips from the trip database. Also, the SPA implemented authentication security by utilizing a login feature. So, only registered users could manipulate the trips. Otherwise, if the user did not have a bearer token, they couldn't access these functions at all. Lastly, for ease of use and scalability, NoSQL MongoDB was used for the databases to store the trips and the registered users.

**Functionality: **

  In this project, JSON was used to hold the data for the simple web application. Then, to render the data to be viewable through the server, Javascript was used. Also, JavaScript was used to develop the API funtionality. At first, we were only using the json data files to use within the public web application. Then, we moved them so that the API could access it easier. Furthermore, Json aids in organizing the data for the application and making it so the data is not hard coded into the html files. When coding, it was the same process for each page on the web application. Since these pages were easy to replicate, it would be simple if the website had to be changed.

Testing
Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.



Reflection
How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
