import { IAudioBuffer, IAudioBufferOptions } from 'standardized-audio-context';
export declare class AudioBufferMock implements IAudioBuffer {
    length: number;
    numberOfChannels: number;
    sampleRate: number;
    private channelData;
    constructor({ length, numberOfChannels, sampleRate }: IAudioBufferOptions);
    get duration(): number;
    copyFromChannel(): void;
    copyToChannel(): void;
    getChannelData(channel: number): Float32Array;
}
