# Mini Virkr

A miniature version of Virkr (www.virkr.dk) build for demonstration purposes

## Highlights
* React
* State management with Redux
* Twitter Bootstrap (Bootswatch _Superhero_ theme)
* Webpack 4
* Babel
* Yarn
* ES2017 _async/await_
* Deploy to nginx using Docker and multistage build

## Prerequisites
In order to be able to build and run Mini Virkr, you will need to have Node.js and NPM/Yarn installed.

### Install npm
You get npm when you install _Node_. Instructions for installing Node can be found online:

* Mac

    Easiest way is to use _HomeBrew_ (https://brew.sh/). Follow [these instructions](http://blog.teamtreehouse.com/install-node-js-npm-mac). If you already have HomeBrew installed, simply run `brew install node`

* Windows

    Instructions are [here](http://blog.teamtreehouse.com/install-node-js-npm-windows)

* Linux

    Instructions for Debian/Ubuntu/Mint etc. are [here](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

After installation you should be able to run `npm -v` successfully.

### Yarn
_Yarn_ is a package manager like npm, but faster and with more features. Ironically, you can use npm to install yarn.

After you have verified that npm is correctly installed, run this:

    npm install --global yarn

Or, if you re mac'ed, do it with HomeBrew:

    brew install yarn


## Other tools
Here are some other tools you may find useful.

### create-react-app
If you want to create your own React application, we recommend [create-react-app](https://github.com/facebook/create-react-app):

    yarn global add create-react-app

### A good editor
[Sublime Text](https://www.sublimetext.com/3), [Atom](https://atom.io/) and [Visual Studio Code](https://code.visualstudio.com/) are all great editors for developing Javascript applications. So is Intellij IDEA - Use what you prefer.

### Chrome
The developer tools in the Chrome editor are superb. You can enhance it by adding [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi).


## How to run
Here are instructions for running Mini Virkr locally. All commands are executed from the command line in the folder where you cloned or downloaded the source code.

### Install all project dependencies
    yarn

This will fetch all project dependencies and install them in the project `node_modules` folder

### Starting local server using _webpack_dev_server_
    yarn start

This starts a small webserver on http://localhost:9000. It automatically refreshes the browser when you make changes in the source code.

### Development build
    yarn run devbuild

This will build a development version and place the result in the `dist` folder.

### Production build
    yarn build

This will build a production version and place the result in the `dist` folder. The production version is smaller that the development version, because the code has been compressed and _uglified_.

The contents of the `dist` folder are meant to be served by a webserver, such as *nginx* or *apache*. You can quickly spin up a Docker container with nginx and the application, as explained in the next section.
    
### Run using Docker
Select an image name you fancy (`nine/minivirkr` is used in this example)

#### Building Docker image
    docker build . -t nine/minivirkr

#### Running Docker image
    docker run -p80:80 nine/minivirkr

Then go to http://localhost
