export class Subscriber {
  constructor(myEventEmitter) {
    myEventEmitter.on("greeting", (greeting) => {
      console.log(greeting);
    });
  }
}
