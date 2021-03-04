const Grid = require('../src/grid');
const {expect} = require('./test-helper');


describe('grid', () => {

    describe('square', () => {
        context('beginning of a game', () => {
            it('should be equal to " " when the grid is initialized', () => {

            })
        })
        context('beginning of a new game //// extern', () => {
            it('should be equal to an empty array when the grid is reinitialized', () => {

            })
        })
    })

    describe('token', () => {
        context('inside the grid', () => {
            it('should return token letter after adding a token inside the grid and check if the position is correct', () => {
                // ARRANGE
                let grid = new Grid();
                //ACT
                grid.addToken(1, 2, "Player1");
                let gameGrid = grid.getGrid();
                //ASSERT
                expect(gameGrid[1][2]).to.be.equal("R");
            })
            it('should throw an error after adding a token on top of another', () => {

                let grid = new Grid();

                grid.addToken(1,2,"Player1");
                assert.throw( () => { grid.addToken(1, 2, "Player2") }, /Other player token is already here!/);

            })
        })

        context('outside the grid', () => {
            it('should throw an error after adding a token outside the grid row size', () => {

                let grid = new Grid();

                assert.throw( () => { grid.addToken(10, 2, "Player1") }, /Your token must be inside the board!/);

            })
            it('should return error after adding a token outside the grid column size', () => {

                let grid = new Grid();

                assert.throw( () => { grid.addToken(2, 10, "Player1") }, /Your token must be inside the board!/);
            })
            it('should return error after adding a token outside the grid row + column size', () => {
                let grid = new Grid();

                assert.throw( () => { grid.addToken(11, 12, "Player1")}, /Your token must be inside the board!/);
            })
        })
    })
})