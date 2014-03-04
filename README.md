# Tour de Finance

The Tour de Finance (TDF) is a research-oriented paper trading platform
designed to facilitate trading competitions on the stock market.

## Installation from Source: Ubuntu

### Step 1: Install Node.js

Follow the instructions [here](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager).
In short:

    sudo apt-get update
    sudo apt-get install python-software-properties python g++ make
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

### Step 2: Install Grunt and Bower

Install grunt, the grunt client, and bower globally by:

    sudo npm install -g grunt grunt-cli bower

### Step 3: Install Project Dependencies

Enter the tdf directory and install the project dependencies with

    npm install

Note: you should never have to use `sudo npm install` to install the
dependencies.

## Testing TDF

You can run the unit tests for TDF with

    grunt test

## Credits

Built on the [MEAN stack](http://www.mean.io)
