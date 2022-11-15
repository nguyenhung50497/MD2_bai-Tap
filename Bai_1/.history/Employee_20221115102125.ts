export enum Gender {
    Male = 1,
    Female = 2,
    Other = 3
}
export class Employee {
    private _name: string;
    private _age: number;
    private _gender: Gender;
    private _address: string;

    constructor(name: string, age: number, gender: Gender, address: string) {
        this._name = name;
        this._age = age;
        
    }
}