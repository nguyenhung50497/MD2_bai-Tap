import {Library} from './model/Library'
import {Book} from './model/Book'
import {Magazine} from './model/Magazine'
import {Newspaper} from './model/Newspaper'
import {LibraryManager} from './service/LibManager'

let readlineSync = require('readline-sync');
let libraryManager = new LibraryManager;

function add() {
    let menu = `----------------Thêm tài liệu----------------
    1. Thêm sách
    2. Thêm tạp chí
    3. Thêm báo
    0. Menu chính`;
    let choice = -1;
    do {
        console.log(menu);
        choice = +readlineSync.question(`Enter your choice: `);
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
    } while (choice !== 0);
}

function addBook() {
    console.log(`--------------Thêm sách----------------`);   
    let id = +readlineSync.question(`Enter id: `);
    let publishingCompany = readlineSync.question(`Enter publishing company: `);
    let releaseNumber = +readlineSync.question(`Enter release number: `);
    let author = readlineSync.question(`Enter author: `);
    let pageNumber = +readlineSync.question(`Enter page number: `);
    let book = new Book(id, publishingCompany, releaseNumber, author, pageNumber);
    libraryManager.addBook(book);
}

function addMagazine() {
    console.log(`--------------Thêm tạp chí----------------`);   
    let id = +readlineSync.question(`Enter id: `);
    let publishingCompany = readlineSync.question(`Enter publishing company: `);
    let releaseNumber = +readlineSync.question(`Enter release number: `);
    let releaseAmount = readlineSync.question(`Enter release amount: `);
    let releaseMonth = +readlineSync.question(`Enter release month: `);
    let magazine = new Magazine(id, publishingCompany, releaseNumber, releaseAmount, releaseMonth);
    libraryManager.addMagazine(magazine);
}

function addNewspaper() {
    console.log(`--------------Thêm báo----------------`);   
    let id = +readlineSync.question(`Enter id: `);
    let publishingCompany = readlineSync.question(`Enter publishing company: `);
    let releaseNumber = +readlineSync.question(`Enter release number: `);
    let releaseDate = readlineSync.question(`Enter release date: `);
    let newspaper = new Newspaper(id, publishingCompany, releaseNumber, releaseDate, );
    libraryManager.addNewspaper(newspaper);
}

function deleteDocument() {
    console.log(`--------------Xóa tài liệu----------------`);
    
    let index = +readlineSync.question(`Enter id:`);
    libraryManager.remove(index);

}

function display() {
    console.log(`--------------Tài hiệu----------------`);
    console.log(libraryManager.findAll());
}

function displayBook() {
    console.log(`--------------Sách----------------`);
    
}

function search() {
    let menu = `----------------Tìm kiếm tài liệu----------------
    1. Tìm sách
    2. Tìm tạp chí
`
    let id = readlineSync.question('Enter name: ');
    libraryManager.findById(id);
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
                add();
                break;
            case 2:
                deleteDocument();
                break;
            case 3:
                display();
                break;
            case 4:
                displayBook();
                break;
            case 5:
                search();
                break;
        }
    } while (choice !== 0)
}

