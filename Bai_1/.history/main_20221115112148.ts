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

function findEmployee() {
    console.log(`----------------Tìm kiếm cán bộ----------------`);
    let name = readlineSync.question('Nhập họ tên: ');
    console.log(employeeManager.findByName(name));
}

function main() {
    let menu = `------------------Chức năng------------------
    1. Thêm công nhân
    2. Thêm kỹ sư
    3. Thêm nhân viên
    4. Hiển thị cán bộ
    5. Tìm kiếm theo tên
    0. Thoát`
    let choice = -1;
    do {
        console.log(menu);
        choice = +readlineSync.question('Nhập lựa chọn: ');
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
            case 4:
                display();
                break;
            case 5:
                findEmployee();
                break;
    }
}