import { Ticker } from "pixi.js";
import { EventDispatcher } from "./core/EventDispatcher";
import { BaseGame } from "./base-game";

export class SimpleObject extends EventDispatcher {

    constructor() {
        super();
        this._bind();
    }

    _bind() { }

    public static async create<T>(t: new () => T, ...args: any[]) {
        const o = new t();

        if (o instanceof SimpleObject) {
            await o.onCreate(...args);
        }

        return o;
    }

    async create<T>(t: new () => T, ...args: any[]) {
        const o = await SimpleObject.create(t, ...args);
        return o;
    }

    onCreate(...args: any[]) { }

    onDestroy() {
        this.tick = false;
    }

    get ticker(): Ticker {
        return Ticker.shared;
    }

    _tick_enabled = false;
    set tick(val) {
        if (this._tick_enabled != val) {
            if (val) {
                this.ticker.add(this.onTick);
            } else {
                this.ticker.remove(this.onTick);
            }
        }
        this._tick_enabled = val;
    }

    get tick() {
        return this._tick_enabled;
    }

    onTick(delta: number) { }
}