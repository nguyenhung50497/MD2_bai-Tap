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
        this._gender = gender;
        this._address = address;
    }

    public getName(): string {
        return this._name;
    }
    public getAge(): number {
        return this._age;
    }
    public getGender(): Gender {
        return this._gender;
    }
    public getAddress(): string {
        return this._address;
    }
    public setName(name: string): void {
        this._name = name;
    }
    public setAge(age: number): void {
        this._age = age;
    }
    public setGender(gender: Gender): void {

}