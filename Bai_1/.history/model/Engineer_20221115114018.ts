import { Employee } from './Employee';
import { Gender } from './Employee';

export class Engineer extends Employee {
    private _trainingMajors: string;

    constructor(name: string, age: number, gender: Gender, address: string, trainingMajors: string) {
        super(name, age, gender, address);
        this._trainingMajors = _trainingMajors;
    }

    public getTrainingIndustry(): string {
        return this._trainingMajors;
    }
    public setTrainingIndustry(trainingMajors: string) {
        this._trainingMajors = trainingMajors;
    }
}