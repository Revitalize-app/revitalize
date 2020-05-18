# Revitalize 🌍

Revitalize is a social platform where you can help to clean and improve our planet.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

* You need to have npm installed & two terminals running at the same time.
* Clone this repo.

## Installing

```sh
$ git clone "this repo URL"
```

Create an .env file in each folder and add your ports (you can use 3000 and 5000), database-name and domain.

```sh
$ npm i inside each folder (server and client)
```

You hava to run each command on different terminal
```sh
$ npm run dev (inside server)
$ npm start (inside client)
```





## Endpoints WIP

| Id | Method | Path | Description |
| ---| -------| -----| ------------|
| 1. | get    | /    | Show home page |
| 2. | get    | /discover?[filter]*    | Go to discover page, you can filter your songs and artists by genre or popularity | 
| 3. | get    | /search    | Search (by artist, song name) | 
| 4. | post   | /search?[queries]   | Add queries to filter your search | 
| 5. | get    | /ranking/songs    | Show the ranking of the most played or most liked songs| 
| 6. | get    | /ranking/artists    | Show the ranking of the most played or most liked artists| 
| 7. | get    | /ranking/albums| Show the ranking of the most played or most liked albums| 
| 8. | get    | /profile | Show your profile page | 
| 9. | post    | /profile/edit    | Edit your personal profile | 
| 10. | post    | /profile/new-song    | Upload a new song | 
| 11. | get    | /user/:id    | Show details about that user | 
| 12. | get    | /song/:id    | Show details and comments of that song | 
| 13. | post    | /song/:id/comment    | Add a new comment | 
| 14. | get    | /collab/:id    | Show the form to ask for colaboration | 
| 15. | post    | /collab/:id    | Send an email to colaborate | 
| 16. | get    | /about-us/    | General information about this platform | 



## Built With


* [Javascript ECMA6 ](https://www.ecma-international.org/) - A lightweight, interpreted, or just-in-time compiled programming language
* [ReactJs](https://en.reactjs.org/) - A JavaScript library for building user interfaces
* [NodeJs](https://nodejs.org/en/) - A JavaScript runtime builder
* [Express](https://expressjs.com/es/) - The web framework used
* [Sass](https://sass-lang.com/) - CSS style extension
* [Passport](http://www.passportjs.org/) - Authentication middleware for NodeJs
* [Multer](https://github.com/expressjs/multer) - Node.js middleware used for upload files
* [MongoDB](https://www.mongodb.com/es) - Data Bases Management
* [Cloudinary](https://cloudinary.com/documentation) - Used to store files
* [Google Geolocation Api ](https://cloud.google.com/maps-platform) - Api used for geolocation users
* [FakerJs](https://github.com/marak/Faker.js/) - Dependency to make massive amount of fake data
* [Nodemailer](https://nodemailer.com/about/) - NodeJs module for email sending




## Author


* https://github.com/orgs/Damage-Sound/people/MadalinGeorge < Madalin George
