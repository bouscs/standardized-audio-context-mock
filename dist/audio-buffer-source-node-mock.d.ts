import { IAudioBufferSourceNode, TContext, TEventHandler } from 'standardized-audio-context';
import { AudioBufferMock } from './audio-buffer-mock';
import { AudioNodeMock } from './audio-node-mock';
import { AudioParamMock } from './audio-param-mock';
export declare class AudioBufferSourceNodeMock<T extends TContext> extends AudioNodeMock<T> implements IAudioBufferSourceNode<T> {
    loop: boolean;
    loopEnd: number;
    loopStart: number;
    private _buffer;
    private _deLorean;
    private _detune;
    private _onended;
    private _onendedTicket;
    private _playbackRate;
    private _playbackRateAutomationEventList;
    private _started;
    private _stopped;
    constructor(context: T, { buffer }?: {
        buffer?: any;
    });
    get buffer(): null | AudioBufferMock;
    set buffer(value: null | AudioBufferMock);
    get detune(): AudioParamMock;
    set detune(value: AudioParamMock);
    get onended(): null | TEventHandler<this>;
    set onended(value: null | TEventHandler<this>);
    get playbackRate(): AudioParamMock;
    set playbackRate(value: AudioParamMock);
    start(when?: number, offset?: number, duration?: number): void;
    stop(when?: number): void;
    private _callOnendedHandler;
    private _scheduleOnendedHandler;
    private static _accumulateDurationAndEffectiveDuration;
}
