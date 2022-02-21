import { Delay } from "./delay";
import { Container } from "pixi.js";
import { gfObject } from "./object";

export class GameObject extends gfObject {
    content: Container;

    get position() {
        return this.content.position;
    }

    onCreate(...args) {
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