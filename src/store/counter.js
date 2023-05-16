import {makeObservable, makeAutoObservable} from 'mobx';

class Counter {


    count = 10;

    timer = 60;

    constructor () {
        makeAutoObservable(this);
    }

    increment () {
        this.count = this.count + 10;
    }

    decrement () {
        this.count = this.count - 10;
    }

    get total () {
        return `Total: ${this.count + this.timer}`
    }
}

export default new Counter();