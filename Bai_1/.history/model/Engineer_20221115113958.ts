import { Employee } from './Employee';
import { Gender } from './Employee';

export class Engineer extends Employee {
    private _trainingMajors: string;

    constructor(name: string, age: number, gender: Gender, address: string, trainingIndustry: string) {
        super(name, age, gender, address);
        this._trainingMajors = trainingIndustry;
    }

    public getTrainingIndustry(): string {
        return this._trainingMajors;
    }
    public setTrainingIndustry(trainingIndustry: string) {
        this._trainingIndustry = trainingIndustry;
    }
}