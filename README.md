# 🎬 Movie Collection System

A robust, full-stack web application designed to manage, track, and search a personal cinema library. Built following the **Model-View-Controller (MVC)** architectural pattern using Node.js, Express, EJS templates, and MongoDB.

---

## 🚀 Features

* **View All Movies:** An interactive dashboard that fetches and displays the entire movie list in a clean table format.
* **Add New Movie:** A dynamic input form to seamlessly register new films with detailed parameters.
* **Edit Movie Details:** Pre-populated forms allowing real-time edits to existing database records.
* **Delete Movie:** Instant removal tool featuring a browser confirmation pop-up to protect against accidental deletions.
* **Search Engine:** Built-in case-insensitive filtering system to query movies quickly by name.
* **Custom Logging Middleware:** Automatic system logger tracking execution timestamps, methods, requested URLs, and visitor IPs directly into a file.

---

## 🛠️ System Architecture & Fields

The application is structured strictly under the standard backend MVC workflow taught in class:

* **Movie Name** (String)
* **Director** (String)
* **Genre** (String)
* **Release Year** (Number)
* **Rating** (Number out of 10)

---

## 📁 Directory Structure

```text
student_admin_project/
├── config/
│   └── db.js                # MongoDB Mongoose connection configurations
├── controllers/
│   └── movieController.js   # Application logic & CRUD controllers
├── logs/
│   └── data.txt             # Auto-generated system logger outputs
├── middleware/
│   ├── authHandler.js       # Global authentication handler simulation
│   ├── errorHandler.js      # Central exception catch-all handler
│   └── logger.js            # Custom structural visitor logging mechanism
├── models/
│   └── movie.js             # Mongoose Schema mapping database structures
├── public/
│   └── css/
│       └── style.css        # Clean custom responsive layout stylesheet
├── routes/
│   └── movieRoutes.js       # Explicit endpoint mapping and router links
├── views/                   # Compiled EJS rendering templates
│   ├── edit.ejs             
│   ├── form.ejs             
│   ├── home.ejs             
│   └── movies.ejs           
├── .gitignore               # Deployment safe-lists exclusions
├── app.js                   # Application main execution root file
└── package.json             # Core dependency manifest definitions
