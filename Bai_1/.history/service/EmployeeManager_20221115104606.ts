import { Employee } from '../model/Employee';
import { Gender } from '../model/Employee';
import { Worker } from '../model/Worker';
import { Engineer } from '../model/Engineer';
import { Staff } from '../model/Staff';

export class EmployeeManager {
    private listEmployees: Employee[] = [];
    constructor() {
    }

    add(t: Employee): void {
        this.listEmployees.push(t)
    }

    remove(t: Employee): void {

    }
    
    findById(name: string): number {
        for (let i = 0; i < this.listEmployees.length; i++) {
            if (this.listEmployees[i].name === id) {
                return i;
            }
        }
        return -1;
    }
}