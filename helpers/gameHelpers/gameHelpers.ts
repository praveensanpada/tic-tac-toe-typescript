const prompt = require("prompt-sync")({ sigint: true });


export class gameHelpers{


    
    display_live_result() : string{
        var dash_board:string[];
        dash_board = ["","","","","","","","",""];

        for(var i = 0; i < 9; i++){
            // game_input()
            const select = prompt("Please Select a number in range ( 1, 9 )");
        }

        return "Dash Board !!!!!"
    }

    // game_input() : number{

    //     const prompt = require("prompt-sync")({ sigint: true });
    //     return prompt;
    // }

    // final_result() : string{
    //     return "be_a_spectator Login Call";
    // }
}