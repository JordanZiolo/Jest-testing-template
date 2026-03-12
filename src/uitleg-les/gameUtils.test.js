import {getRank, addScores, hasWon, getHighScores} from './gameUtils' ;

test('geef Noob terug met scores 0', () => {
    const result = getRank(0);
    expect(result).toBe('Noob')
})



test('geef Pro terug met scores 50', () => {
    const result = getRank(55);
    expect(result).toBe('Pro')
})


test("tel twee scores bij elkaar op", () => {
const result = addScores(20, 30);
expect (result).toBe(50);
})