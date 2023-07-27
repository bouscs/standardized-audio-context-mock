import { IGainNode, TContext } from 'standardized-audio-context';
import { AudioNodeMock } from './audio-node-mock';
import { AudioParamMock } from './audio-param-mock';
export declare class GainNodeMock<T extends TContext> extends AudioNodeMock<T> implements IGainNode<T> {
    private _gain;
    constructor(context: T);
    get gain(): AudioParamMock;
    set gain(value: AudioParamMock);
}
