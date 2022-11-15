import {Employee} from './model/Employee'
import {Engineer} from './model/Engineer'
import {Worker} from './model/Worker'
import {Staff} from './model/Staff'
import {EmployeeManager} from './service/EmployeeManager'

let readlineSync = require('readline-sync');
let employeeManager = new EmployeeManager();

function add() {
    let menu = `-----------------Thêm cán bộ---------------
    1. Thêm công nhân
    2. Thêm kỹ sư
    3. Thêm nhân viên
    0. Menu chính`
    let choice = -1
    do {
        console.log(menu)
        choice = +readlineSync.question('Enter your choice: ');
        switch (choice) {
            case 1:
                addW();

    }
}

function addWorker() {
    console.log(`----------------Thêm mới----------------`);
    let name = readlineSync.question('Enter name: ');
    let age = +readlineSync.question('Enter age: ');
    let gender = readlineSync.question('Enter gender: ');
    let address = readlineSync.question('Enter address: ');
    let step = +readlineSync.question('Enter step: ');
    let worker = new Worker(name, age, gender, address, step);
    employeeManager.add(worker);
}

function addEngineer() {
    console.log(`----------------Thêm mới----------------`);
    let name = readlineSync.question('Enter name: ');
    let age = +readlineSync.question('Enter age: ');
    let gender = readlineSync.question('Enter gender: ');
    let address = readlineSync.question('Enter address: ');
    let trainingMajors = readlineSync.question('Enter training majors: ');
    let engineer = new Engineer(name, age, gender, address, trainingMajors);
    employeeManager.add(engineer);
}

function addStaff() {
    console.log(`----------------Thêm mới----------------`);
    let name = readlineSync.question('Enter name: ');
    let age = +readlineSync.question('Enter age: ');
    let gender = readlineSync.question('Enter gender: ');
    let address = readlineSync.question('Enter address: ');
    let work = readlineSync.question('Enter work: ');
    let staff = new Staff(name, age, gender, address, work);
    employeeManager.add(staff);
}

function display() {
    console.log('------------------Danh sách------------------')
    console.log(employeeManager.findAll());
}

function findEmployee() {
    console.log(`----------------Tìm kiếm cán bộ----------------`);
    let name = readlineSync.question('Enter name: ');
    employeeManager.findEmployee(name);
}

function main() {
    let menu = `------------------Chức năng------------------
    1. Thêm cán bộ
    2. Hiển thị cán bộ
    3. Tìm kiếm theo tên
    0. Thoát`
    let choice = -1;
    do {
        console.log(menu);
        choice = +readlineSync.question('Enter choice: ');
        switch (choice) {
            case 1:
                addWorker();
                break;
            case 2:
                addEngineer();
                break;
            case 3:
                addStaff();
                break;
            case 2:
                display();
                break;
            case 3:
                findEmployee();
                break;
    } 
    } while (choice !== 0)
}

main();

