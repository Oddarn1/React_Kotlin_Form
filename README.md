# Form to fill in personalia, created in Kotlin with Spring Boot and React

#### This project is mainly focused on the backend part of the case. 

This includes a boilerplate React-app to visualize how the backend works. 
You need to have npm installed to run this. To install, visit: https://www.npmjs.com/get-npm.

You will also need to have Maven and Java 11 installed. 

Begin by installing dependencies by running `cd app && npm install`.

To run locally: 
- Run Application.kt located in `src/main/kotlin/forms` for a local version of the database with 2 dummy values.
- Start the React-application by running `cd app && npm run`. This will start the frontend application.

This project is inspired by "Kotlin og Spring boot med Netcompany", a course by Netcompany for Abakus-students. Repository can be found at https://github.com/netcompanyno/kotlin-kurs.

For email-service I have registered for Sendgrid. To be able to send your own emails with this application, you will need to list a Sendgrid API key in a .env-file in the root folder. 
Email for receiving new answers are also defined in .env, and needs to be updated for local use.

.env fil will then have this structure:

`SENDGRID_API_KEY="SG.*APIKEY*"`

`RECEIVER_EMAIL=*Your email here*"`

### Roadmap
Future releases will further develop the frontend. Besides this, it is thought that implementing
API keys for access of data and cookies to prevent spamming answers of the form is an important extension of the backend.
Next step would also include implementing unit tests of the backend, as this is something I have not had the time to do.