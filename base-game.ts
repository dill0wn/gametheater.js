import { Application } from "pixi.js";
import { gfObject } from "./object";

export class BaseGame extends gfObject {
    app: Application;

    constructor() {
        super();

        this.game = this;

        this.app = new Application({
            width: window.innerWidth,
            height: window.innerHeight,
            antialias: false,
        });

        this.app.renderer.view.style.position = 'absolute';
        this.app.ticker.add(this.onTick);

        this.attach();
    }

    _bind() {
        super._bind();
        this.onResize = this.onResize.bind(this);
        this.onTick = this.onTick.bind(this);
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

    onTick(delta) {

    }

    onResize() {
        this.app.renderer.view.style.width = "100%";
        this.app.renderer.view.style.height = "100%";
        this.app.renderer.resize(
            this.app.renderer.view.clientWidth * window.devicePixelRatio,
            this.app.renderer.view.clientHeight * window.devicePixelRatio
        );
        this.app.stage.scale.set(window.devicePixelRatio, window.devicePixelRatio);
        
        console.log("game.onResize", {
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            stagewidth: this.app.stage.width,
            stageheight: this.app.stage.height,
            rendererWidth: this.app.renderer.width,
            rendererHeight: this.app.renderer.height,
            clientWidth: this.app.renderer.view.clientWidth,
            clientHeight: this.app.renderer.view.clientHeight,
            offsetWidth: this.app.renderer.view.offsetWidth,
            offsetHeight: this.app.renderer.view.offsetHeight,
            devicePixelRatio: window.devicePixelRatio,
        });
    }
}
