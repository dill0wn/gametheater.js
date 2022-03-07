export class SimpleObject extends EventTarget {
    game;

    constructor() {
        super();
        this._bind();
    }

    _bind() { }

    async create<T>(t: new() => T, ...args) {
        const o = new t();
        
        if (o instanceof SimpleObject) {
            o.game = this.game;
            await o.onCreate(...args);
        }

        return o;
    }

    onCreate(...args) { }

    onDestroy() {
        this.tick = false;
    }

    get ticker() {
        return this.game.app.ticker;
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