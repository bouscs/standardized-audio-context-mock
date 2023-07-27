import { SinonSpy } from 'sinon';
import { IOscillatorNode, TContext, TEventHandler, TOscillatorType } from 'standardized-audio-context';
import { AudioNodeMock } from './audio-node-mock';
import { AudioParamMock } from './audio-param-mock';
export declare class OscillatorNodeMock<T extends TContext> extends AudioNodeMock<T> implements IOscillatorNode<T> {
    setPeriodicWave: SinonSpy;
    start: SinonSpy;
    stop: SinonSpy;
    type: TOscillatorType;
    private _detune;
    private _frequency;
    private _onended;
    constructor(context: T);
    get detune(): AudioParamMock;
    set detune(value: AudioParamMock);
    get frequency(): AudioParamMock;
    set frequency(value: AudioParamMock);
    get onended(): null | TEventHandler<this>;
    set onended(value: null | TEventHandler<this>);
}
