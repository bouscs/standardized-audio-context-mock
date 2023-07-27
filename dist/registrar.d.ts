import { TContext } from 'standardized-audio-context';
import { DeLorean, IVehicle } from 'vehicles';
import { IAudioNodeMap } from './interfaces';
export declare class Registrar {
    private _audioNodes;
    private _deLoreans;
    constructor();
    addAudioNode<T extends TContext, U extends keyof IAudioNodeMap<T>>(context: T, type: U, node: IAudioNodeMap<T>[U]): void;
    getAudioNodes<T extends TContext, U extends keyof IAudioNodeMap<T>>(context: T, type: U): IAudioNodeMap<T>[U][];
    getDeLorean<T extends TContext>(context: T): undefined | DeLorean;
    getVehicle<T extends TContext>(context: T): undefined | IVehicle;
    reset<T extends TContext>(context: T): void;
    setDeLorean<T extends TContext>(context: T, deLorean: DeLorean): void;
}
export declare const registrar: Registrar;
