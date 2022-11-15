export interface IManagement<T> {
    add(t: T): void;


    findAll(): T[];
}