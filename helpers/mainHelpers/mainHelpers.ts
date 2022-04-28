import { gameHelpers } from "../gameHelpers/gameHelpers";

let gameHelpersObj = new gameHelpers();

export class mainHelpers{

    create_a_new_game() : string{
        console.log("\n\t\t"+process.argv[5]+" Welcome To The New Game as Player 1")
        console.log("\n\t\tWelcome John To The New Game as Player 2\n\n")
        gameHelpersObj.display_live_result();
        return "Thank You For Playing Tic Tac Toe Game";
    }

    join_as_player_2() : string{
        return "join_as_player_2 Logic Call";
    }

    be_a_spectator() : string{
        return "be_a_spectator Login Call";
    }

    invalid_choice() : string{
        return "Invalid Choice Please try Agian !!!!!!!!!!!!!";
    }

}