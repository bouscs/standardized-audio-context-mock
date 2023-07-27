export declare class EventTarget {
    private _eventListeners;
    constructor();
    addEventListener(type: string, listener: any, // @todo EventListenerOrEventListenerObject | null = null,
    options?: boolean | AddEventListenerOptions): void;
    dispatchEvent(evt: Event): boolean;
    removeEventListener(type: string, listener: any, // @todo EventListenerOrEventListenerObject | null = null,
    options?: EventListenerOptions | boolean): void;
}
