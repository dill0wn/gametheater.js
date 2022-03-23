import { Ticker } from "pixi.js";
import { BaseGame } from "./base-game";
import { EventDispatcher } from "./core/EventDispatcher";

export class SimpleObject extends EventDispatcher {

    game: BaseGame | null = null;

    constructor() {
        super();
        this._bind();
    }

    _bind() { }

    async create<T>(t: new () => T, ...args: any[]) {
        const o = new t();

        if (o instanceof SimpleObject) {
            o.game = this.game;
            await o.onCreate(...args);
        }

        return o;
    }

    onCreate(...args: any[]) { }

    onDestroy() {
        this.tick = false;
    }

    get ticker(): Ticker {
        return (this.game as BaseGame).app.ticker;
    }

    #tick_enabled = false;
    set tick(val) {
        if (this.#tick_enabled != val) {
            if (val) {
                this.ticker.add(this.onTick);
            } else {
                this.ticker.remove(this.onTick);
            }
        }
        this.#tick_enabled = val;
    }

    get tick() {
        return this.#tick_enabled;
    }

    onTick(delta: number) { }
}