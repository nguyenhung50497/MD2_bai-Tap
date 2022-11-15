import { Employee } from '../model/Employee';
import { Gender } from '../model/Employee';
import { Worker } from '../model/Worker';
import { Engineer } from '../model/Engineer';
import { Staff } from '../model/Staff';

export class EmployeeManager {
    private listEmployees: Employee[] = [];
    constructor() {
    }

    findAll(): Employee[] {
        return this.listEmployees;
    }

    add(t: Employee): void {
        this.listEmployees.push(t)
    }

    // remove(name: string): void {
    //     let index = this.findByName(name);
    //     if (index === -1) {
    //         console.log('Không tìm thấy sản phẩm này!')
    //     } else {
    //         this.listEmployees.splice(index, 1);
    //         console.log('Xóa thành công!')
    //     }
    // }
    
    findByName(name: string): Employee[] {
        for (let i = 0; i < this.listEmployees.length; i++) {
            if (this.listEmployees[i].getName() === name) {
                return i;
            }
        }
        
        reu
        
    }

}