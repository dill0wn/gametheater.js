export class gfObject extends EventTarget {
    game;

    constructor() {
        super();
        this._bind();
    }

    _bind() { }

    create(t, ...args) {
        const o = new t();
        o.game = this.game;

        o.onCreate(...args);

        return o;
    }

    onCreate() { }

    onDestroy() {
        this.tick = false;
    }

    get ticker() {
        return this.game.app.ticker;
    }

    #tick_enabled = false;
    set tick(val) {
        if (this.#tick_enabled != val) {
            if(val) {
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

    onTick(delta) { }
}