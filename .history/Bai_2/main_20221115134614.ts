import {Library} from './model/Library'
import {Book} from './model/Book'
import {Magazine} from './model/Magazine'
import {Newspaper} from './model/Newspaper'
import {LibraryManager} from './service/LibManager'
import { mainModule } from 'process'

let readlineSync = require('readline-sync');
let libraryManager = new LibraryManager;

function add() {

}

function main() {
    let menu = `-----------------Menu ----------------
    1.Thêm tài liệu
    2. Xóa tài liệu
    3. Hiển thị tài liệu
    `
}