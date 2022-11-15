import { Employee } from './Employee';
import { Gender } from './Employee';

export class Staff extends Employee {
    private _work: string;

    constructor(name: string, age: number, gender: Gender, address: string, work: string) {
    }
}