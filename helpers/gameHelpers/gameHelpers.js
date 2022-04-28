"use strict";
exports.__esModule = true;
exports.gameHelpers = void 0;
var prompt = require("prompt-sync")({ sigint: true });
var gameHelpers = /** @class */ (function () {
    function gameHelpers() {
    }
    gameHelpers.prototype.display_live_result = function () {
        var dash_board;
        dash_board = ["", "", "", "", "", "", "", "", ""];
        for (var i = 0; i < 9; i++) {
            // game_input()
            var select = prompt("Please Select a number in range ( 1, 9 )");
        }
        return "Dash Board !!!!!";
    };
    return gameHelpers;
}());
exports.gameHelpers = gameHelpers;
