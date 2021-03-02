const Grid = require('../src/grid');
const {expect} = require('./test-helper');


describe('Grid', () => {
    describe('Token', () => {
        it('Add a token inside the grid', () => {
            // ARRANGE
            let grid = new Grid();
            const tokenA = "R";
            //ACT
            grid.addToken(1, 2, tokenA);
            gameGrid = grid.getGrid();
            //ASSERT
            expect(gameGrid[1][2]).to.be.equal(tokenA);
        })
    })
})