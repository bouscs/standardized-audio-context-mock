import { AutomationEventList } from 'automation-events';
import { IAudioParam } from 'standardized-audio-context';
import { DeLorean } from 'vehicles';
export declare class AudioParamMock implements IAudioParam {
    private _automationEventList;
    private _defaultValue;
    private _deLorean;
    private _maxValue;
    private _minValue;
    constructor(options: {
        automationEventList: AutomationEventList;
        deLorean?: DeLorean;
        maxValue: number;
        minValue: number;
    });
    get defaultValue(): number;
    set defaultValue(value: number);
    get maxValue(): number;
    set maxValue(value: number);
    get minValue(): number;
    set minValue(value: number);
    get value(): number;
    set value(value: number);
    cancelAndHoldAtTime(cancelTime: number): IAudioParam;
    cancelScheduledValues(cancelTime: number): IAudioParam;
    exponentialRampToValueAtTime(value: number, endTime: number): IAudioParam;
    linearRampToValueAtTime(value: number, endTime: number): IAudioParam;
    setTargetAtTime(target: number, startTime: number, timeConstant: number): IAudioParam;
    setValueAtTime(value: number, startTime: number): IAudioParam;
    setValueCurveAtTime(values: Iterable<number>, startTime: number, duration: number): IAudioParam;
}
