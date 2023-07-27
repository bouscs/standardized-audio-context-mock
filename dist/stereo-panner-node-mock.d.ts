import { IStereoPannerNode, TContext } from 'standardized-audio-context';
import { AudioNodeMock } from './audio-node-mock';
import { AudioParamMock } from './audio-param-mock';
export declare class StereoPannerNodeMock<T extends TContext> extends AudioNodeMock<T> implements IStereoPannerNode<T> {
    private _pan;
    constructor(context: T);
    get pan(): AudioParamMock;
    set pan(value: AudioParamMock);
}
