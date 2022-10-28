import { BowlingGame } from "./bowling.mjs";

describe('Bowling Game', () => {
  it('should return a score of 1 if 1 pin was hit', () => {
    const game = new BowlingGame([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    expect(game.getScore()).toStrictEqual(1);
  });
});