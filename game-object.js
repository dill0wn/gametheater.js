import { Delay } from "./delay.js";
import { Container } from "./node_modules/pixi.js/dist/browser/pixi.mjs";
import { gfObject } from "./object.js";

export class GameObject extends gfObject {
    /** @type { Container } */
    content;

    get position() {
        return this.content.position;
    }

    onCreate() {
        super.onCreate();
        this.content = new Container();
    }

    attach(child) {
        let cc = child;
        if(child.content instanceof Container) {
            cc = child.content;
        }
        this.content.addChild(cc);
    }
    
    detach(child) {
        let cc = child;
        if(child.content instanceof Container) {
            cc = child.content;
        }
        this.content.removeChild(cc);
    }

    delay(callback, seconds) {
        return this.create(Delay, callback, seconds);
    }
}