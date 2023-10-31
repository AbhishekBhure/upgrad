import { EventEmitter } from "events";
import { Publisher } from "./Publisher.js";
import { Subscriber } from "./Subscriber.js";
const myEventEmitter = new EventEmitter();

const publisher = new Publisher();
const subscriber = new Subscriber(myEventEmitter);

publisher.publishMessage(myEventEmitter);
