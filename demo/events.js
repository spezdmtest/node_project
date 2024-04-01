const EventsEmitter = require("events");

// const emitter = new EventsEmitter();
// emitter.on("anything", data => {
//     console.log("On: anything", data);
// })
//
// emitter.emit("anything", {a: 1})
// emitter.emit("anything", {b: 2})
//
// setTimeout(() => {
//     emitter.emit("anything", {c: 3})
// }, 1500);

class Dispatcher extends EventsEmitter {
    subscribe(eventName, cb) {
        console.log("[Subscribe...]");
        this.on(eventName, cb);
    }

    dispatcher(eventName, data) {
        console.log("[Dispatching...]");
        this.emit(eventName, data);
    }
}

const dis = new Dispatcher();
dis.subscribe("aa", data => {
    console.log("On: aa", data);
})

dis.dispatcher("aa", {aa: 22});