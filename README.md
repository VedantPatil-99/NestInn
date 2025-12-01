# NestInn

**NestInn** is a specialized web platform designed to connect college students with suitable hostel accommodations. Unlike generic travel booking sites, NestInn focuses on the specific needs of students, offering features like college-proximity search, long-term stay pricing, and roommate-friendly booking options.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)
- [Contact](#contact)

## Description

Finding a safe and convenient place to stay during college can be challenging. NestInn simplifies this process by providing a transparent, feature-rich marketplace for hostels. Students can filter accommodations based on their specific college, gender requirements, and budget. The platform fosters trust through verified listings, detailed reviews with sentiment analysis, and a seamless reservation system that handles dynamic pricing for student groups.

## Features

* **User Authentication & Security:**
    * Secure Sign Up and Login using Passport.js (Local & Google OAuth).
    * OTP-based Password Reset functionality using Nodemailer.
* **Hostel Management (CRUD):**
    * Hostel owners can create, edit, and delete listings with detailed descriptions and amenities.
    * Image uploads managed via Cloudinary.
* **Advanced Search & Filtering:**
    * Filter hostels by City, State, and Price Range.
    * **"Nearby Colleges"** filter to find homes close to your campus.
    * **"For Whom"** filter (Boys, Girls, Co-ed, Parents).
* **Interactive Maps:**
    * Integrated Mapbox to display hostel locations visually.
* **Reviews & Sentiment Analysis:**
    * Users can rate and review hostels.
    * Integrated **Sentiment Analysis** automatically categorizes reviews as Positive, Negative, or Neutral.
* **Smart Reservations:**
    * Book stays for 6, 9, or 12 months.
    * Dynamic pricing calculation based on the number of students booking together.
* **Dashboards:**
    * "My Hosted Hostels" for owners to manage properties.
    * "My Reservations" for students to track bookings.

## Technologies Used

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Atlas), Mongoose ODM
* **Frontend:** EJS (Embedded JavaScript), Bootstrap 5, HTML5, CSS3
* **Authentication:** Passport.js (Local & Google Strategies)
* **Cloud Storage:** Cloudinary (for image hosting)
* **Maps:** Mapbox SDK
* **Utilities:**
    * `joi` (Schema validation)
    * `nodemailer` (Email services)
    * `sentiment` (Review analysis)
    * `dayjs` (Date manipulation)
    * `@sentry/node` (Error monitoring)

## Installation

Follow these steps to set up the project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/NestInn.git](https://github.com/your-username/NestInn.git)
    cd NestInn
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root directory and add the following credentials (replace with your own values):

    ```env
    # Cloudinary (for image uploads)
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret

    # Mapbox (for maps)
    MAP_TOKEN=your_mapbox_token

    # Database
    ATLAS_DB_URL=your_mongodb_connection_string

    # Session Secret
    SECRET=your_session_secret

    # Google OAuth (for login)
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret

    # Gmail (for OTP emails)
    GMAIL_USER=your_email@gmail.com
    GMAIL_PASS=your_app_password
    ```

4.  **Run Database Seeds (Optional):**
    To populate the database with sample data:
    ```bash
    node init/seedData.js
    ```

## Usage

1.  **Start the application:**
    ```bash
    node app.js
    # OR if you have nodemon installed
    nodemon app.js
    ```

2.  **Access the app:**
    Open your browser and navigate to `http://localhost:3000`.

3.  **Explore:**
    * Sign up or Log in to access full features.
    * Browse hostels, use filters to find specific accommodations.
    * Click "Add Your Hostel" to list a property.
    * Make a reservation or leave a review on existing listings.

## Project Structure

NestInn/
├── controllers/      # Logic for routes (hostels, users, reviews, etc.)
├── init/             # Database seeding scripts
├── models/           # Mongoose schemas (Hostel, User, Review, Reservation)
├── public/           # Static assets (CSS, JS, Images, Icons)
├── routes/           # Express routes
├── utils/            # Helper functions (middleware, wrappers, mailer)
├── views/            # EJS templates
│   ├── hostels/      # Hostel CRUD pages
│   ├── includes/     # Partials (navbar, footer, modals)
│   ├── layouts/      # Base layout (boilerplate)
│   ├── reviews/      # Review components
│   └── users/        # Auth pages (login, signup)
├── app.js            # Application entry point
└── package.json      # Project dependencies

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch: `git checkout -b feature-name`.
3.  Make your changes and commit them: `git commit -m 'Add some feature'`.
4.  Push to the branch: `git push origin feature-name`.
5.  Submit a pull request.

## License

This project is licensed under the **ISC License**. See the [package.json](package.json) file for details.

## Credits

* **Vedant Patil** - *Lead Developer* - [GitHub Profile](https://github.com/vedantpatil-99)

## Contact

If you have any questions or suggestions, feel free to reach out:

* **Email:** vedantpatil.99@gmail.com (Assuming based on username, please update if different)
* **GitHub:** [vedantpatil-99](https://github.com/vedantpatil-99)