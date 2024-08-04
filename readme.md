# Company Management System

## Overview

The Company Management System is a web application for managing employee records, jobs, and departments. It allows to add, edit, delete, and search for employee entries, manage job titles and departments, and export data to an Excel file. The application uses ASP.NET Web API for the backend, Angular for the frontend, Entity Framework Core for ORM, SQL Server for the database, and JWT Tokens for authentication.

## Technologies Used

- **Backend**: ASP.NET Web API
- **Frontend**: Angular
- **Database**: SQL Server
- **ORM**: Entity Framework Core
- **Authentication**: JWT (JSON Web Tokens)

## Features

- **Add New Entry**:
  - Full Name
  - Job Title (Dropdown list)
  - Department (Dropdown list)
  - Mobile Number
  - Date of Birth (Date picker widget)
  - Address
  - Email
  - Photo
  - Age

- **Edit Entry**:
  - Useing a popup dialog to update entry details.
- **Delete Entry**:

- **Search Functionality**:
  - Search by all fields.
  - Filter by range of birth dates.

- **Export**:
  - Export address book list to an Excel file.

- **Manage Jobs and Departments**:
  - Add, Edit, and Delete jobs and departments.

- **Authentication**:
  - Service login for user authentication using JWT.

