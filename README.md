# RETAILER LOYALTY ANDROID MOBILE APPLICATION UI PROTOTYPE CHALLENGE
# Android app made by Cristian Franco - cristianmusic7@gmail.com

## Prerequisites

The components delivered by this framework require following external assets to function properly. For how to setup the expected environment see Installation/Usage.

*   [jQuery](http://jquery.com/)
*   [jQuery UI](http://jquery.com/) 
*   [jqTransform](https://github.com/jcamenisch/jqTransform)
*   [Node.js/NPM](https://nodejs.org/en/) (only for development)

## Installation/Usage

This is the required prototype for the top coder's retailer loyalty mobile application, in thefollowing instructions you'll de saod how to use it.

Jquery is used instead of angular based on the projects requiriments.

You can see al the html files in the app folder.

Libraries used:
Jquery as base,
Jquery UI for sortable elements
touch-punch for jquery UI tocuh compability.
Chart.js for point charts.


## Developer Notes
All one need to do to compile the components is:
```
$ npm i
$ gulp
```
The styles are handles with sass preprocessor  (SCSS files) in `./scss` folder. Gulp as build tool. In order to compile styles you can use

`$ gulp` - will compile the styles for prod, assets, everything to output folder.

`$ sass:watch` - can be used for development purpose because it will re-compile all on scss file change and generates the styles with and without dev utilities.

In order to work in the styles you can run:

`$ gulp watch` - will listen andcompile the changes on sass files.

#### Hosting the documentation
In project root folder use:

`$ npm run apps` - to serve the via http server documentation. Then you can open localhost:8080 to see the running project or open the project in a mobile device that has local connection with your computer.


This app as in intended to work modularly with components that can be used throughout all the page.
This are the most important ones:
body
  .main-container
    .section
    .section-view
      .section-header
      .section-content
    .nav-buttons
      .btn
      .btn-large
    form

You can see furter explanations at the html files.


To enter as retailer please enter on the username field the world retailer case insensitive.
To enter as agent please enter on the username field the world retailer case insensitive.




You can see a video explanation at .


