# Form to fill in personalia, created in Kotlin with Spring Boot and React

#### This project is mainly focused on the backend part of the case. 

This includes a boilerplate React-app to visualize how the backend works. React-project is located in the app-folder.
You need to have npm installed to run this. To install, visit: https://www.npmjs.com/get-npm.

You will also need to have Maven and Java 11 installed. 

Begin by installing dependencies by running `cd app && npm install`.

To run locally: 
- Run Application.kt by running `mvn spring-boot:run` in the root-folder. This creates a local version of the database and backend with 2 dummy values at port 5000.
- Start the React-application by running `cd app && npm run`. This will start the frontend application at port 3000.

These ports are set up to communicate, such that the frontend can access the API at port 5000.

For email-service I have registered for Sendgrid. To be able to send your own emails with this application, you will need to list a Sendgrid API key in a .env-file in the root folder. 
Email for receiving new answers are also defined in .env, and needs to be updated for local use.

.env fil will then have this structure:

`SENDGRID_API_KEY="SG.*APIKEY*"`

`RECEIVER_EMAIL=*Your email here*"`

### About the project
The backend is built as a REST-API, with 3 endpoints, 2 for GET-requests and 1 for POST-requests. 
These endpoints are located at `/api/forms/{id}` where id is used when getting a specific form-answer.
When posting a form or getting all answers, one should only use `/api/forms`.

The validation done in the backend only returns HTTP-response to the frontend,such that the error messages
displayed in the frontend is very unspecific. Validation on input-fields in frontend is expected, but I didn't have enough time to implement this.

This project is inspired by "Kotlin og Spring boot med Netcompany", a course by Netcompany for Abakus-students. Repository can be found at https://github.com/netcompanyno/kotlin-kurs.


### Roadmap
Future releases should further develop the frontend. Besides this, it is thought that implementing
API keys for access of data and cookies to prevent spamming answers of the form is an important extension of the backend.
Next step would also include implementing unit tests of the backend, as this is something I have not had the time to do.

For the REST API it would be an idea to implement saving forms to profiles to review and change later with PUT-requests and DELETE-requests.
This means that it should be possible to connect forms to a user that can resume an unfulfilled form or change one that has been completed earlier. 