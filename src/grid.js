class Grid {

    constructor() {
        this.rows = 6;
        this.columns = 7;

        this.grid = new Array(this.rows);
        for (let i = 0; i < this.rows; i++) {
            this.grid[i] = new Array(this.columns);
            for (let j = 0; j < this.columns; j++) {
                this.grid[i][j] = " ";
            }
        }
    }

    /* Getters & Setters */

    getGrid() {
        return this.grid;
    };

    /* Class Methods */

    /**
     * Add current player token inside the grid.
     * @param row on which the player is playing
     * @param column on which the player is playing
     * @param player Current player
     */
    addToken(row, column, player) {
        // Check if move is inside the grid perimeter
        if (0 < row && row < this.rows && 0 < column && column < this.columns) {
            if (this.grid[row][column] === "R" || this.grid[row][column] === "J") {
                if (player === "Player1") {
                    this.grid[row][column] = "R";
                } else {
                    this.grid[row][column] = "J";
                }
            } else {
                throw 'Other player token is already here!';
            }
        } else {
            throw 'Your token must be inside the board!';
        }

    }

}

module.exports = Grid;