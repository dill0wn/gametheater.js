// var assert = require('assert');
import * as  assert from "assert";
import { Rectangle } from "pixi.js";
import { Collisions } from "../collisions.js";

describe('Collisions', function () {
  describe('#hitTest_RectangleRectangle()', function () {
    it('should not detect rectangles to the right', function () {
      let overlap = Collisions.hitTest_RectangleRectangle(
        new Rectangle(0, 0, 1, 1),
        new Rectangle(2, 0, 1, 1),
      );
      assert.equal(overlap, null);
      overlap = Collisions.hitTest_RectangleRectangle(
        new Rectangle(2, 0, 1, 1),
        new Rectangle(0, 0, 1, 1),
      );
      assert.equal(overlap, null);
    });

    it('should not detect rectangles to the left', function () {
      let overlap = Collisions.hitTest_RectangleRectangle(
        new Rectangle(0, 0, 1, 1),
        new Rectangle(-2, 0, 1, 1),
      );
      assert.equal(overlap, null);
      overlap = Collisions.hitTest_RectangleRectangle(
        new Rectangle(-2, 0, 1, 1),
        new Rectangle(0, 0, 1, 1),
      );
      assert.equal(overlap, null);
    });

    it('should not detect rectangles to the top', function () {
      let overlap = Collisions.hitTest_RectangleRectangle(
        new Rectangle(0, 0, 1, 1),
        new Rectangle(0, -2, 1, 1),
      );
      assert.equal(overlap, null);
      overlap = Collisions.hitTest_RectangleRectangle(
        new Rectangle(0, -2, 1, 1),
        new Rectangle(0, 0, 1, 1),
      );
      assert.equal(overlap, null);
    });

    it('should not detect rectangles to the bottom', function () {
      let overlap = Collisions.hitTest_RectangleRectangle(
        new Rectangle(0, 0, 1, 1),
        new Rectangle(0, 2, 1, 1),
      );
      assert.equal(overlap, null);
      overlap = Collisions.hitTest_RectangleRectangle(
        new Rectangle(0, 2, 1, 1),
        new Rectangle(0, 0, 1, 1),
      );
      assert.equal(overlap, null);
    });





    it('should detect overlapping rectangles to the right', function () {
      const overlap = Collisions.hitTest_RectangleRectangle(
        new Rectangle(0, 0, 2, 1),
        new Rectangle(1, 0, 1, 1),
      );
      assert.notEqual(overlap, null);
    });

    it('should detect overlapping rectangles to the left', function () {
      const overlap = Collisions.hitTest_RectangleRectangle(
        new Rectangle(1, 0, 1, 1),
        new Rectangle(0, 0, 2, 1),
      );
      assert.notEqual(overlap, null);
    });

    it('should detect overlapping rectangles to the bottom right', function () {
      let overlap = Collisions.hitTest_RectangleRectangle(
        new Rectangle(0, 0, 2, 2),
        new Rectangle(1, 1, 0.5, 0.5),
      );
      assert.notEqual(overlap, null);
      overlap = Collisions.hitTest_RectangleRectangle(
        new Rectangle(1, 1, 0.5, 0.5),
        new Rectangle(0, 0, 2, 2),
      );
      assert.notEqual(overlap, null);
      overlap = Collisions.hitTest_RectangleRectangle(
        new Rectangle(0, 0, 2, 2),
        new Rectangle(1, 1, 2, 2),
      );
      assert.notEqual(overlap, null);
      overlap = Collisions.hitTest_RectangleRectangle(
        new Rectangle(1, 1, 2, 2),
        new Rectangle(0, 0, 2, 2),
      );
      assert.notEqual(overlap, null);
    });

    it('should detect overlapping rectangles to the bottom', function () {
      const overlap = Collisions.hitTest_RectangleRectangle(
        new Rectangle(0, 0, 4, 2),
        new Rectangle(1, 1, 1, 2),
      );
      assert.notEqual(overlap, null);
    });
  });
});