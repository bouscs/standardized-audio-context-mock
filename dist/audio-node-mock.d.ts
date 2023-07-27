import { SinonSpy } from 'sinon';
import { IAudioNode, TChannelCountMode, TChannelInterpretation, TContext } from 'standardized-audio-context';
import { EventTarget } from './event-target';
export declare class AudioNodeMock<T extends TContext> extends EventTarget implements IAudioNode<T> {
    channelCount: number;
    channelCountMode: TChannelCountMode;
    channelInterpretation: TChannelInterpretation;
    connect: SinonSpy;
    disconnect: SinonSpy;
    numberOfInputs: number;
    numberOfOutputs: number;
    private _context;
    constructor(options: {
        channelCount: number;
        channelCountMode: TChannelCountMode;
        channelInterpretation: TChannelInterpretation;
        connect?: SinonSpy;
        context: T;
        disconnect?: SinonSpy;
        numberOfInputs: number;
        numberOfOutputs: number;
    });
    get context(): T;
}
