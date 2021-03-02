class Grid {

    constructor() {
        this.rows = 6;
        this.columns = 7;

        this.grid = new Array(this.rows);
        for (let i = 0; i < this.rows; i++) {
            this.grid[i] = new Array(this.columns);
            for(let j = 0; j < this.columns; j++){
                this.grid[i][j] = " ";
            }
        }

        /*this.tokenA = undefined;
        this.tokenB = undefined;*/
    }

    /* Getters & Setters */

    getGrid() {
        return this.grid;
    };

    /* Class Methods */

    addToken(row, column, token) {
        // Check if move is inside the grid perimeter
        if( 0< row && row < this.rows && 0<column && column < this.columns){
            // Write the token inside the grid
            this.grid[row][column] = token;
        }

    }




}
module.exports = Grid;