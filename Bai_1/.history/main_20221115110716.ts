import {Employee} from './model/Employee'
import {Engineer} from './model/Engineer'
import {Worker} from './model/Worker'
import {Staff} from './model/Staff'
import {EmployeeManager} from './service/EmployeeManager'

let readlineSync = require('readline-sync');
let employeeManager = new EmployeeManager();

function addWorker() {
    console.log(`----------------Thêm mới----------------`);
    let name = readlineSync.question('Nhập họ tên: ');
    let age = +readlineSync.question('Nhập tuổi: ');
    let gender = readlineSync.question('Nhập giới tính: ');
    let address = readlineSync.question('Nhập địa chỉ: ');
    let 
    employeeManager.add()
}
