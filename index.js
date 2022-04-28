"use strict";
exports.__esModule = true;
var http = require('http');
var enumHelpers_1 = require("./helpers/enumHelpers/enumHelpers");
var mainGame_1 = require("./helpers/mainGame");
var mainGameObj = new mainGame_1.mainGame();
var myPort = process.argv[3];
var myArrayPort = myPort.split(":");
http.createServer(function () {
    console.log("----- Tic Tac Toe over Websocket -----");
}).on('error', function (err) {
    if (err.code === 'EADDRINUSE') {
        console.log(enumHelpers_1.enumHelpers.PORT_ALREADY_IN_USE);
    }
}).listen(myArrayPort[1], function () {
    mainGameObj.main_game();
    console.log("\n\t\tThank You");
    console.log("\n\n\t\tApp is running On " + myArrayPort[1]);
});
