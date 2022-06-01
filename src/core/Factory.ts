import { SimpleObject } from "../simple-object";

export class Factory {

    public static async create<T>(t: new () => T, ...args: any[]) {
        const o = new t();

        if (o instanceof SimpleObject) {
            await o.onCreate(...args);
        }

        return o;
    }
}