# ClockWiseWeb - Time Management Application

ClockWise is a modern web application designed to simplify time management for individuals and teams. It offers features like effortless time tracking, detailed reports, customizable project management, and a user-friendly interface. Built with Vue 3, this application provides a seamless and efficient experience for tracking and analyzing time.
The Backend is supported by a morden C# .NET 8 RESTful API.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Effortless Time Tracking:** Easily log your work hours and activities.
- **Detailed Reports and Analytics:** Gain insights into your time usage with comprehensive reports.
- **Customizable Project Management:** Organize your work with customizable projects and tasks.
- **User-Friendly Interface:** Enjoy a clean and intuitive interface for a smooth user experience.
- **Authentication:** Secure login and logout functionality using `sessionStorage`.
- **Responsive Design:** Ensures the application works well on various screen sizes.
- **Conditional Content:** Display different content based on whether the user is logged in.
- **Navigation:** Efficient navigation between pages using `vue-router`.

## Technologies Used

- **Vue 3:** A progressive JavaScript framework for building user interfaces.
- **Vue Router:** The official router for Vue.js.
- **HTML5, CSS3, JavaScript:** Core web technologies for structure, styling, and interactivity.
- **`sessionStorage`:** Used for basic session management and authentication.
- **Webpack (via Vue CLI):** Module bundler.

## Project Structure
- **`public/index.html`:** The main HTML file where the Vue app is mounted.
- **`src/assets/`:** Contains static assets like images.
- **`src/components/`:** Holds all Vue components.
    - **`static/`:** Contains static components like `PageHeader` and `PageFooter`.
    - Other components like `HomePage` and `LoginPage` are also located here.
- **`src/router/index.js`:** Configures the Vue Router.
- **`src/App.vue`:** The root component of the Vue app.
- **`src/main.js`:** The entry point of the Vue app.
- **`package.json` and `package-lock.json`:** Node.js project configuration files.

## Setup

1.  **Clone the repository:**

    ```bash
    git clone [repository-url]
    cd clock-wise
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run serve
    ```

    The application will be available at `http://localhost:8080/`.

4.  **Build for production:**

    ```bash
    npm run build
    ```

    The production build will be in the `dist/` directory.

## Usage

1.  **Open the application:** Access the application in your web browser.
2.  **Login/Signup:** If you don't have an account, sign up. If you do, log in.
3.  **Navigate:** Use the header navigation to move between pages.
4.  **Use Features:** Utilize the time tracking, reporting, and project management features.
5.  **Logout:** When finished, log out to secure your session.

## Contributing

Contributions are welcome! To contribute:

1.  **Fork the repository.**
2.  **Create a new branch:** `git checkout -b feature/your-feature-name`.
3.  **Make your changes.**
4.  **Commit your changes:** `git commit -m 'Add some feature'`.
5.  **Push to the branch:** `git push origin feature/your-feature-name`.
6.  **Create a pull request.**

## License

This project is licensed under the [MIT License](LICENSE).