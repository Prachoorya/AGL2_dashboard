import {BehaviorSubject} from "rxjs";

const subscriber = new BehaviorSubject("");

const messageService = {
    send: function(msg) {
        subscriber.next(msg);
    }
};

export {
    messageService,
    subscriber
};