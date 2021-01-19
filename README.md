# Simple Pokedex - By Rodrigo Villalobos

This project is s simple pokedex app to showcase some Angular concepts in action like Observables and Subscriptions, Routing, Navigation, HTTP Requests, data management and more.
In order to make this project a little different from other projects I added CI/CD to the deployment pipeline an I decided to publish the app on the internet to showcase this concept.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


You can take a look at the DEMO on this url -> [Pokedex Showcase](https://rlst-pokedex.herokuapp.com/)

To begin tou will see a page like this ![Pokedex_main working](/images/empty_app.PNG)

Click on the search button to toggle the search box and type the name of any pokemon you like, if you don't know what I'm talking about I recommend you type one of these recommendations:
-Mudkip
-Zapdos
-Torchic

you should see something like this: ![Pokedex_main](/images/main_app_working.PNG)

Click on nay move the pokemon has on his list of moves, pplaced on the left of the page and you will get redirected to this page:
![Pokedex_move info](/images/move_info_page.PNG)


### Prerequisites
Basic understanding of CSS and HTML, and good Javascript skills are a plus but not a must.

```
For example:
Unserstanding async operations will help the understanding of data flow.
```

### Installing

You will need the latest version of [Angular CLI](https://cli.angular.io/) and the newest version of [npm](https://nodejs.org/en/)
once you have both installed on your computer clone the project running this command on your terminal

```
- git clone {{URL_PROJECT}}
```

Then run 
```
 npm install
```

navigate to the root folder of the project and run
```
ng serve
```

## Running the tests
Run this on the root folder of the project

```
ng test
```

## Deployment

It requires a push to the "main" branch where the CI/CD takes place, it will run tests on the server after building the app. Then, the deployment will be done automatically from my Heroku Server.
You can take a look at the owrking project already deployed on heroku here -> [Pokedex](https://rlst-pokedex.herokuapp.com/)

Auto detect push to "master" branch
![Auto Detect push](/images/auto-deployment.PNG)

Automated Testing
![Automated testing before deployment](/images/auto-deployment-2.png)

Automated Build and deply
![Pokedex_move info](/images/auto-deployment-3.png)

## Built With

* [Angular](https://angular.io/) - The web framework used
* [Heroku](heroku.com) - Deployment and CI/CD

* [GitHub](github.com) - Source Control


## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Rodrigo Villalobos** - *All work*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to people on stackoverflow for helping me to solve a problem with my deployment testing.
