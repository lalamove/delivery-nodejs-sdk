export default class Holder<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    typeof(): string {
        return typeof this.value;
    }
}
