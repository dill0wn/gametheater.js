import { gfObject } from "./object.js";

export class Delay extends gfObject {

    timeoutHandle;

    onCreate(callback, seconds) {
        super.onCreate();
        this.timeoutHandle = setTimeout(() => {
            callback()
        }, seconds * 1000);
    }

    onRelease() {
        clearTimeout(this.timeoutHandle);
    }
}