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
    let step = +readlineSync.question('Nhập bậc: ');
    let worker = new Worker(name, age, gender, address, step);
    employeeManager.add(worker);
}

function addEngineer() {
    console.log(`----------------Thêm mới----------------`);
    let name = readlineSync.question('Nhập họ tên: ');
    let age = +readlineSync.question('Nhập tuổi: ');
    let gender = readlineSync.question('Nhập giới tính: ');
    let address = readlineSync.question('Nhập địa chỉ: ');
    let trainingIndustry = readlineSync.question('Nhập ngành đào tạo: ');
    let engineer = new Engineer(name, age, gender, address, trainingIndustry);
    employeeManager.add(engineer);
}

function addStaff() {
    console.log(`----------------Thêm mới----------------`);
    let name = readlineSync.question('Nhập họ tên: ');
    let age = +readlineSync.question('Nhập tuổi: ');
    let gender = readlineSync.question('Nhập giới tính: ');
    let address = readlineSync.question('Nhập địa chỉ: ');
    let work = readlineSync.question('Nhập công việc: ');
    let staff = new Staff(name, age, gender, address, work);
    employeeManager.add(staff);
}

function display() {
    console.log('------------------Danh sách------------------')
    console.log(employeeManager.findAll());
}

