# Login-Landing | Demo Angular Project

This project is a demonstration of an Angular application with routing. It showcases a simple project structure with three routes: `'' (empty)`, `/home`, and `/login`.

### Project Structure

The project follows a modular structure within the app module. It consists of the following modules:  

- **[Auth Module](./src/app/auth/auth.module.ts)**: This module serves as the core for mock-authentication mechanics. Also, it includes the [global-routes.ts](./src/app/auth/global-routes.ts) file, which defines an enum with global routes.

- **[Login Module](./src/app/login/login.module.ts)**: This module includes the login page accessible via the `/login` route and the landing page through the `'' (empty)` route.

- **[System Module](./src/app/system/system.module.ts)**: This module is designed for authorized users and features a dashboard page accessible via the `/home` route.

### Features

- **Routing**: The project demonstrates the usage of Angular routing to navigate between different pages based on the user's authentication status. Authorized users can only access the **[System Module](./src/app/system/system.module.ts)**, while non-authorized users can only access the **[Login Module](./src/app/login/login.module.ts)**.

- **Login Page**: The login page allows users to authenticate (in the demo, without providing their credentials).

- **Landing Page**: The landing page serves as the entry point for non-authorized users, providing them with an overview of the application's features.

- **Dashboard Page**: The dashboard page offers a personalized experience for authorized users, showcasing relevant data and functionalities. Additionally, this page serves as the entry point for authorized users.


###Usage

To run the project locally, follow these steps:
```
#Clone the repository:
git clone git@github.com:vaReliy/login-landing.git

#Install the dependencies:
npm install

#Start the development server:
npm start

#Open the application in your browser:
http://localhost:4200
```
