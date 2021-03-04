const readline = require("readline");

class Game {

    constructor() {
        this.errorMove = false;
        this.gameState = undefined;
        this.grid = new Grid();
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    playGame(){
        rl.write('Player1 turn.');
        rl.write("Where do you want to place your token?");
        rl.question("Row:", (row) => {
            rl.question("Column:", (column) => {
                try {
                    grid.addToken(row, column, "Player1");
                } catch (errorMsg) {
                    rl.write(errorMsg);
                }
            })
        })
    }

}