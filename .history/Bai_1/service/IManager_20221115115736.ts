export interface IManage<T> {
    add(t: T): void;

    findAll(): T[];
}