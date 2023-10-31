export class Publisher {
  constructor() {}
  publishMessage(myEventEmitter) {
    myEventEmitter.emit("greeting", "Hello!");
  }
}
