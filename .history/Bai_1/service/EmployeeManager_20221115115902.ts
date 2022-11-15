import { Employee } from '../model/Employee';
import { Gender } from '../model/Employee';
import { Worker } from '../model/Worker';
import { Engineer } from '../model/Engineer';
import { Staff } from '../model/Staff';
import { IManager } from './IManager';
export class EmployeeManager implements IManager<> {
    private listEmployees: Employee[] = [];
    constructor() {
    }

    add(t: Employee): void {
        this.listEmployees.push(t)
    }

    findAll(): Employee[] {
        return this.listEmployees;
    }
    
    findByName(name: string): number {
        for (let i = 0; i < this.listEmployees.length; i++) {
            if (this.listEmployees[i].getName() === name) {
                return i;
            }
        }
        return -1;        
    }
    findEmployee(name: string): void {
        let index = this.findByName(name)
        if (index === -1) {
            console.log('Không tìm thấy');
        }
        else {
            console.log('Đã tìm thấy!')
            console.log(this.listEmployees[index]);
        }
        
    }
}