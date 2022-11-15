import {Library} from './model/Library'
import {Book} from './model/Book'
import {Magazine} from './model/Magazine'
import {Newspaper} from './model/Newspaper'
import {LibraryManager} from './service/LibManager'

let readlineSync = require('readline-sync');
let libraryManager = new LibraryManager;

function addBook() {
    console.log(`--------------Thêm sách----------------`);   
    let id = +readlineSync.question(`Enter id: `);
    let publishingCompany = readlineSync.question(`Enter publishing company: `);
    let releaseNumber = +readlineSync.question(`Enter release number: `);
    let author = readlineSync.question(`Enter author: `);
    let pageNumber = +readlineSync.question(`Enter page number: `);
    let book = new Books(id, publishingCompany, releaseNumber, author, pageNumber);
    libraryManager.addBook(book);
}

function addMagazine() {
    console.log(`--------------Thêm tài liệu----------------`);   
    let id = +readlineSync.question(`Enter id: `);
    let publishingCompany = readlineSync.question(`Enter publishing company: `);
    let releaseNumber = +readlineSync.question(`Enter release number: `);
    let author = readlineSync.question(`Enter author: `);
    let pageNumber = +readlineSync.question(`Enter page number: `);
    let book = new Books(id, publishingCompany, releaseNumber, author, pageNumber);
    libraryManager.addBook(book);
}

function addNewspaper() {
}

function deleteDocument() {
    console.log(`--------------Xóa tài liệu----------------`);
    
    let index = +readlineSync.question(`Enter id:`);
    libraryManager.remove(index);

}

function search() {

}

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
                addBook();
                break;
            case 2:
                addMagazine();
                break;
            case 3:
                addNewspaper();
                break;

        }
    } while (choice !== 0)
}

