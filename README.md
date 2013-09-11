# Tictail Heroku App
Example of a simple native Tictail app running on Flask and packaged to be runable on Heroku in less than a minute.

The code is based on the [Building Your First App](https://tictail.com/developers/getting-started/building-your-first-app/)
tutorial, just packaged neatly for Heroku.

## Create your Tictail App
If you haven't already you should head over to the [Tictail Developer portal](https://tictail.com/developers/) and create an account.
You should also make sure you have a created a Sandbox app to play around with, if not you should [create it](https://tictail.com/developers/admin/#/apps)

## Installation

### Getting started

Clone the repository:

    git clone git@github.com:siavashg/tictail-heroku-flask-app.git
    
Setup your virtual environment and install requirements:

    virtualenv venv --distribute
    source venv/bin/activate
    pip install -r requirements.txt

###Running the server:

    python runserver.py

or use foreman if that's your cup of tea:

    foreman start

### Pushing to Heroku

Make sure you have the [Heroku toolbelt](https://toolbelt.heroku.com/)

    heroku create
    heroku git:remote -a <Your Heroku app name>
    git push heroku master
    
*Don't forget to update your Tictail App's URI to the Heroku app one (with https!)*

## Yeay, your first Tictail app!

![Your awesome app](https://f.cloud.github.com/assets/321787/1126025/b07920a8-1b1c-11e3-8e52-69c9b30d8050.png)

