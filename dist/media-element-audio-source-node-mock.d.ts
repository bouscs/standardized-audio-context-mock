import { IAudioContext, IMediaElementAudioSourceNode, IMediaElementAudioSourceOptions, IMinimalAudioContext } from 'standardized-audio-context';
import { AudioNodeMock } from './audio-node-mock';
export declare class MediaElementAudioSourceNodeMock<T extends IAudioContext | IMinimalAudioContext> extends AudioNodeMock<T> implements IMediaElementAudioSourceNode<T> {
    mediaElement: HTMLMediaElement;
    constructor(context: T, { mediaElement }: IMediaElementAudioSourceOptions);
}
