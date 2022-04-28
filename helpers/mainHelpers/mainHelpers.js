"use strict";
exports.__esModule = true;
exports.mainHelpers = void 0;
var gameHelpers_1 = require("../gameHelpers/gameHelpers");
var gameHelpersObj = new gameHelpers_1.gameHelpers();
var mainHelpers = /** @class */ (function () {
    function mainHelpers() {
    }
    mainHelpers.prototype.create_a_new_game = function () {
        console.log("\n\t\t" + process.argv[5] + " Welcome To The New Game as Player 1");
        console.log("\n\t\tWelcome John To The New Game as Player 2\n\n");
        gameHelpersObj.display_live_result();
        return "Thank You For Playing Tic Tac Toe Game";
    };
    mainHelpers.prototype.join_as_player_2 = function () {
        return "join_as_player_2 Logic Call";
    };
    mainHelpers.prototype.be_a_spectator = function () {
        return "be_a_spectator Login Call";
    };
    mainHelpers.prototype.invalid_choice = function () {
        return "Invalid Choice Please try Agian !!!!!!!!!!!!!";
    };
    return mainHelpers;
}());
exports.mainHelpers = mainHelpers;
