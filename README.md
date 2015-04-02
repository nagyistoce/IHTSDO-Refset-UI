UI Component for IHTSDO Refset Service
======================================

This service can be built using Nodejs ~0.10, Bower 1.4.1 and Grunt .

If you do not have Nodejs then you can install using one of the installer mentioned on this nodejs download page - [NodeJs][1] 

[1]: https://nodejs.org/download/ "Nodejs"

Once you have Nodejs running, you can install grunt and bower using command

`npm install -g bower grunt`



## Build & development
If you are building first time then you must fetch node modules and bower components using below commands from your project root where package.json and bower.json files are available.

`npm install` // should fetch all modules listed in package.json
`bower install` ///should fetch you required angular js components listed in bower.json

above should create two directories namely `bower_components` and `node_modules` in your project root   

Run `grunt build` for building and `grunt serve` for preview development on `http://localhost:9000`.

## Testing

Running `grunt test` will run the unit tests with karma.
