import { makeAutoObservable } from "mobx";

class Request {

    data = []

    constructor () {
        makeAutoObservable(this);
    }

    fetchRequest (url) {
        fetch(url)
        .then(r => r.ok ? r.json() : 'error')
        .then(d => this.data = d)
        .catch(e => console.log(e))
    }
}

export default new Request();