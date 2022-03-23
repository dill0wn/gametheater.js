import { Delay } from "./delay";
import { Container } from "pixi.js";
import { SimpleObject } from "./simple-object";

export class GameObject extends SimpleObject {
    content: Container = new Container();

    get position() {
        return this.content.position;
    }

    async onCreate(...args: any[]) {
        await super.onCreate();
    }

    attach(child: GameObject | Container) {
        let cc: Container;
        if(child instanceof GameObject) {
            cc = child.content;
        } else {
            cc = child;
        }
        this.content.addChild(cc);
    }
    
    detach(child: GameObject | Container) {
        let cc: Container;
        if(child instanceof GameObject) {
            cc = child.content;
        } else {
            cc = child;
        }
        this.content.removeChild(cc);
    }

    delay(callback: (...args:any[] ) => any, seconds: number) {
        return this.create(Delay, callback, seconds);
    }
}