import { IDynamicsCompressorNode, TContext } from 'standardized-audio-context';
import { AudioNodeMock } from './audio-node-mock';
import { AudioParamMock } from './audio-param-mock';
export declare class DynamicsCompressorNodeMock<T extends TContext> extends AudioNodeMock<T> implements IDynamicsCompressorNode<T> {
    private _attack;
    private _knee;
    private _ratio;
    private _reduction;
    private _release;
    private _threshold;
    constructor(context: T);
    get attack(): AudioParamMock;
    set attack(value: AudioParamMock);
    get knee(): AudioParamMock;
    set knee(value: AudioParamMock);
    get ratio(): AudioParamMock;
    set ratio(value: AudioParamMock);
    get reduction(): number;
    set reduction(value: number);
    get release(): AudioParamMock;
    set release(value: AudioParamMock);
    get threshold(): AudioParamMock;
    set threshold(value: AudioParamMock);
}
