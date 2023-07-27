import { IAudioContext, IMediaStreamAudioSourceNode, IMediaStreamAudioSourceOptions, IMinimalAudioContext } from 'standardized-audio-context';
import { AudioNodeMock } from './audio-node-mock';
export declare class MediaStreamAudioSourceNodeMock<T extends IAudioContext | IMinimalAudioContext> extends AudioNodeMock<T> implements IMediaStreamAudioSourceNode<T> {
    mediaStream: MediaStream;
    constructor(context: T, { mediaStream }: IMediaStreamAudioSourceOptions);
}
