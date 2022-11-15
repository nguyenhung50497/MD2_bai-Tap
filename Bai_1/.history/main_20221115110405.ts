import {Employee} from './model/Employee'
import {Engineer} from './model/Engineer'
import {Worker} from './model/Worker'
import {Staff} from './model/Staff'
import {EmployeeManager} from './service/EmployeeManager'

let readlineSync = require('readline-sync');
let employeeManager = new EmployeeManager();

function add() {
    console.log(`----------------Thêm mới----------------`);
    let name = +readlineSync.question('Nhập họ tên: ');
    let age = +readlineSync.question('Nhập tuổi: 
    
}
