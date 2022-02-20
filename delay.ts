import { gfObject } from "./object";

export class Delay extends gfObject {

    timeoutHandle: number = -1;

    onCreate(callback: Function, seconds: number) {
        super.onCreate();
        this.timeoutHandle = setTimeout(() => {
            callback()
        }, seconds * 1000);
    }

    onRelease() {
        clearTimeout(this.timeoutHandle);
    }
}