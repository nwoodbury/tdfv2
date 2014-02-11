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

### Step 3: Install and Start RethinkDB

Follow the instructions [here](http://www.rethinkdb.com/docs/install/ubuntu/)
to install RethinkDB.
In short:

    sudo add-apt-repository ppa:rethinkdb/ppa   && \
    sudo apt-get update                         && \
    sudo apt-get install rethinkdb

Then start the database with

    rethinkdb

You can now point your browser to [localhost:8080](http://localhost:8080)
to see the RethinkDB administrative UI.
