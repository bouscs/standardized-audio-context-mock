import { IBiquadFilterNode, TBiquadFilterType, TContext } from 'standardized-audio-context';
import { AudioNodeMock } from './audio-node-mock';
import { AudioParamMock } from './audio-param-mock';
export declare class BiquadFilterNodeMock<T extends TContext> extends AudioNodeMock<T> implements IBiquadFilterNode<T> {
    private _detune;
    private _frequency;
    private _gain;
    private _Q;
    private _type;
    constructor(context: T);
    get detune(): AudioParamMock;
    set detune(value: AudioParamMock);
    get frequency(): AudioParamMock;
    set frequency(value: AudioParamMock);
    get gain(): AudioParamMock;
    set gain(value: AudioParamMock);
    get Q(): AudioParamMock;
    set Q(value: AudioParamMock);
    get type(): TBiquadFilterType;
    set type(value: TBiquadFilterType);
    getFrequencyResponse(): void;
}
