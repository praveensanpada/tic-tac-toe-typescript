import { mainHelpers } from "./mainHelpers/mainHelpers";

const prompt = require("prompt-sync")({ sigint: true });

let mainHelpersObj = new mainHelpers();


export class mainGame{

    main_game(): void{

        const select = prompt("\t\tChoose The Number.....\n\t\t1) Create a new game\n\t\t2) Join as player 2 in an existing game\n\t\t3) Be a spectator\n\t\t")

        switch(select) { 
            case 1: { 
                mainHelpersObj.create_a_new_game();
               break; 
            } 
            case 2: { 
                mainHelpersObj.join_as_player_2();
               break; 
            } 
            case 3: {
                mainHelpersObj.be_a_spectator(); 
               break;    
            } 
            default: { 
                mainHelpersObj.invalid_choice();
               break;              
            } 
         }
    }
    
}