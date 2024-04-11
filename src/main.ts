// noinspection JSUnusedGlobalSymbols

import Bus, {Handler, WildcardHandler} from "mitt";

export class MittEventBus<T extends Record<string | symbol, unknown>> {
    constructor() {
        const bus = Bus()
        // Object.assign(this, bus)
        this.emit = (type: any, event?: any) => {
            bus.emit(type, event)
            return this
        }
        this.off = (type: any, event?: any) => {
            bus.off(type, event)
            return this
        }
        this.on = (type: any, event?: any) => {
            bus.on(type, event)
            return this
        }
    }

    public emit<Key extends keyof T>(type: Key, event: T[Key]): this;
    public emit<Key extends keyof T>(type: undefined extends T[Key] ? Key : never): this;
    public emit(_: any, __?: any): this {
        return this
    }

    public off<Key extends keyof T>(type: Key, handler?: Handler<T[Key]>): this;
    public off(type: "*", handler: WildcardHandler<T>): this;
    public off(_: any, __?: any): this {
        return this
    }

    public on<Key extends keyof T>(type: Key, handler: Handler<T[Key]>): this;
    public on(type: "*", handler: WildcardHandler<T>): this;
    public on(_: any, __: any): this {
        return this
    }
}
