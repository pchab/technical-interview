import test from 'node:test';
import { strict as assert } from 'node:assert';
import { BowlingGame } from "./bowling.mjs";

test('Bowling Game getScore', async (t) => {
  await t.test('should return a score of 0 if no pins was hit', () => {
    const game = new BowlingGame([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    assert.strictEqual(game.getScore(), 0);
  });

  await t.test('should return a score of 1 if 1 pin was hit', () => {
    const game = new BowlingGame([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    assert.strictEqual(game.getScore(), 1);
  });
});