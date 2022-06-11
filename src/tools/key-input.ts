import { SimpleObject } from "../simple-object";


export class KeyDownHandler extends SimpleObject {
    showAnswer: boolean = false;
    private _event?: string;

    onCreate(event: string = 'keydown') {
        super.onCreate();
        this._event = event;
        document.addEventListener(
            this._event,
            this,
        );
    }

    _bind() {this.handleEvent = this.handleEvent.bind(this);}

    onDestroy() {
        super.onDestroy();
        if(this._event) {
            document.removeEventListener(this._event, this);
        }
    }

    handleEvent(ev: KeyboardEvent) {
        console.log("THIS IS A TEST", {ev});
        this.dispatchEvent(new KeyboardEvent(ev.type, ev));
    }
}

