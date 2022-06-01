import { Application } from "pixi.js";
import { SimpleObject } from "./simple-object";

export class BaseGame extends SimpleObject {
    app: Application;

    constructor() {
        super();

        this.game = this;

        var game = document.querySelector('#game');

        this.app = new Application({
            width: window.innerWidth,
            height: window.innerHeight,
            antialias: false,
            autoDensity: true,
            // view: game,
        });

        var root = document.querySelector('#root');
        if(root){
            root.appendChild(this.app.view);
        }

        // this.app.renderer.view.style.width = "100%";
        // this.app.renderer.view.style.height = "100%";
        // this.app.renderer.view.style.position = 'absolute';
        this.app.ticker.add(this.onTick);

        this.attach();
    }

    async onCreate() {
        await super.onCreate();
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
        window.addEventListener('resize', this.onResize);
        this.onResize();
    }

    detach() {
        window.removeEventListener('resize', this.onResize)
    }

    onTick(delta: number) {

    }

    onResize() {
        // this.app.renderer.view.style.width = "100%";
        // this.app.renderer.view.style.height = "100%";
        // this.app.renderer.resize(
        //     this.app.renderer.view.parentNode.clientWidth,
        //     this.app.renderer.view.parentNode.clientHeight
        // );
        // this.app.stage.scale.set(window.devicePixelRatio, window.devicePixelRatio);
        
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

        this.dispatchEvent(new Event('resize'));
    }
}
