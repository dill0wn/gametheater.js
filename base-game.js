import { Application } from "./node_modules/pixi.js/dist/browser/pixi.mjs";
import { gfObject } from "./object.js";

export class BaseGame extends gfObject {
    /** @type { Application } */
    app;

    constructor() {
        super();

        this.game = this;
        
        this.app = new Application({
            width: 1000,
            height: 1000,
            antialias: true,
        });

        this.app.renderer.view.style.position = 'absolute';

        this.attach();
    }

    _bind() {
        this.onResize = this.onResize.bind(this);
    }

    get stage() {
        return this.app.stage;
    }

    get width() {
        return this.app.renderer.width;
    }

    get height() {
        return this.app.renderer.height;
    }

    attach() {
        document.body.appendChild(this.app.view);
        window.addEventListener('resize', this.onResize);
        this.onResize();
    }

    detach() {
        window.removeEventListener('resize', this.onResize)
    }
    
    onResize() {
        this.app.renderer.resize(window.innerWidth, window.innerHeight);
    }1
}

