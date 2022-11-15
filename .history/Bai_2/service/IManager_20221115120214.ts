export interface IManage<T> {
    add(t: T): void;

    remove(code: number): void;

    find(code: number): void;

    findAll(): T[];
}