import { Employee } from './Employee';
export class Worker extends Employee {
    private _step: number;

    constructor(name: string, age: number, gender: Gender, address: string, step: number) {
            super(name, age, gender, address);
            this._step = step;
    }
}