export default class SensorRecord {
    constructor(time, hr) {
        this._time = time;
        this._hr = hr;
    }
    get time() {
        return this._time;
    }
    get hr() {
        return this._hr;
    }
    set time(t) {
        this._time = h;
    }
    set hr(h) {
        this._hr = h;
    }
}