import {Library} from './model/Library'
import {Book} from './model/Book'
import {Magazine} from './model/Magazine'
import {Newspaper} from './model/Newspaper'
import {LibraryManager} from './service/LibManager'

let readlineSync = require('readline-sync');
let libraryManager = new LibraryManager;

function add() {

}

function deleteDocument() {
    let index = +readlineSync.question(`Enter id:`)
}

function search() {


function main() {
    let menu = `-----------------Menu ----------------
    1.Thêm tài liệu
    2. Xóa tài liệu
    3. Hiển thị tài liệu
    4. Tìm tài liệu
    0. Thoát`;
    let choice = -1;
    do {
        console.log(menu);
        choice = +readlineSync.question(`Enter your choice: `)
        switch (choice) {
            case 1:
                add();
                break;
            case 2:
                deleteDocument();
                break;

        }
    } while (choice !== 0)

