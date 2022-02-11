import { Circle, Point, Rectangle } from "./node_modules/pixi.js/dist/browser/pixi.mjs";

export class Collisions {
    /**
     * 
     * @param { Rectangle } rectA 
     * @param { Rectangle } rectB 
     * @returns { CollisionOverlap | null | boolean }
     */
    static hitTest_RectangleRectangle(rectA, rectB, outOverlap) {

        if (rectA.left == rectA.right || rectA.top == rectA.bottom ||
            rectB.left == rectB.right || rectB.top == rectB.bottom) {
            return null;
        }

        if (rectA.left >= rectB.right || rectB.left >= rectA.right) {
            return null;
        }

        if (rectA.top >= rectB.bottom || rectB.top >= rectA.bottom) {
            return null;
        }

        // if (!outOverlap) {
        //     outOverlap = new CollisionOverlap();
        // }

        // outOverlap.set()
        // return outOverlap;

        return true;
    }

    /**
     * 
     * @param { Rectangle } rect 
     * @param { Circle } circle 
     * @returns { CollisionOverlap | null }
     */
    static hitTest_RectangleCircle(rect, circle) {
        return null;
    }
}

export class CollisionOverlap extends Point {

}