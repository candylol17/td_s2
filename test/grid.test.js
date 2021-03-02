const Grid = require('../src/grid');
const {expect} = require('./test-helper');


describe('Grid', () => {
    describe('Token', () => {
        it('Add a token inside the grid', () => {
            // ARRANGE
            let gameGrid = new Grid();
            const tokenA = "R";
            //ACT
            gameGrid.addToken(1, 2, tokenA);
            //ASSERT
            expect(gameGrid[1][2]).to.be.equal(tokenA);
        })
    })
})