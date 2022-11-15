export interface IManagement<T> {
    add(t: T): void;

    remove(code: number): void;

    find(code: number, t: T): void;

    findAll(): T[];
}