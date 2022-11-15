import { Employee } from './Employee';
import { Gender } from './Employee';

export class Staff extends Employee {
    private _work: string;

    constructor(name: string, age: number, gender: Gender, address: string, work: string) {
        super(name, age, gender, address);
        this._work = work;
    }

    public getWork(): string {
        return this._work;
    }
    public setWork(work: string) {
        this._work = work;
    }
}