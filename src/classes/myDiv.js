export class myDiv {
    constructor() {
        this.quot = 0;
        this.rest = 0;
    }

    div(x, y) {
        this.rest = x % y;
        this.quot = (x - this.rest) / y;
        return this;

    }
}