# Overview

The goal of this development test is to show us that you have a grasp of how to use React, Typescript, node, express and npm (or that you're capable of figuring it out if you don't already know all of these technologies). Please build a React interface that interacts with an API built in express. You'll find the mock user data in `api/src/data/user_database.csv`

# Getting Started

The code files are provided without any of the dependencies installed, so you will need to run npm install in both the `api` folder and the `front-end` folder.

# Requirements

Build an interface in react that has the following screens:

- user list page with all users with the ability to filter the list by typing in a name
- individual pages for each user with their first name, last name, email and age
- a dashboard with some aggregate information
  - number of users
  - average user age
  - median user age
  - top 5 most common first names
