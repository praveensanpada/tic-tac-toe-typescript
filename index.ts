var http = require('http');

import { enumHelpers } from "./helpers/enumHelpers/enumHelpers"
import { mainGame } from "./helpers/mainGame";

let mainGameObj = new mainGame();

let myPort = process.argv[3]
const myArrayPort = myPort.split(":");

http.createServer(function () {

    console.log("----- Tic Tac Toe over Websocket -----")

}).on('error', function (err: any) {

    if (err.code === 'EADDRINUSE') {
        console.log(enumHelpers.PORT_ALREADY_IN_USE);
    }

}).listen(myArrayPort[1], () => {

    mainGameObj.main_game();

    console.log("\n\t\tThank You")
    console.log("\n\n\t\tApp is running On " + myArrayPort[1])
});