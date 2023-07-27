import { IAudioContext, IMediaStreamAudioDestinationNode, IMinimalAudioContext } from 'standardized-audio-context';
import { AudioNodeMock } from './audio-node-mock';
export declare class MediaStreamAudioDestinationNodeMock<T extends IAudioContext | IMinimalAudioContext> extends AudioNodeMock<T> implements IMediaStreamAudioDestinationNode<T> {
    stream: MediaStream;
    constructor(context: T);
}
