import { Employee } from './Employee';
import { Gender } from './Employee';

export class Engineer extends Employee {
    private _trainingIndustry: string;

    constructor(name: string, age: number, gender: Gender, address: string, trainingIndustry: string) {
        super(name, age, gender, address);
        this._trainingIndustry = trainingIndustry;
    }

    public getTrainingIndustry(): string {
        return this._trainingIndustry;
    }
    
}