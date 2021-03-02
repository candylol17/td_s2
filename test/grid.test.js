const Grid = require('../src/grid');
const {expect} = require('./test-helper');


describe('grid', () => {

    describe('square', () => {
        context('beginning of the game', () => {
            it('should be equal to " " when the grid is initialized', () => {

            })
        })
        context('end of the game', () => {
            it('should ')
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
            it('should return error after adding a token on top of another', () => {

            })

        })

        context('outside the grid', () => {
            it('should return error after adding a token outside the grid row size', () => {

            })
            it('should return error after adding a token outside the grid column size', () => {

            })
            it('should return error after adding a token outside the grid row + column size', () => {

            })
        })
    })
})