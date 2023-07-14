const tsla = {
  stdIdx: 201829,
  stName: "TSLA",
  price: 700,
  stDetails: {
    name: "Tesla, Inc",
    ceo: "Elon Mask",
  },
};

// using Object.defineProperty
Object.defineProperty(tsla, "stExc", {
  value: "NASDAQ",
  writable: true,
  enumerable: false,
  configurable: false,
});

let {
  stName: stock,
  price: value,
  stExc: exchange,
  stDetails: { name: company, ceo },
  ...rest
} = tsla;

// console.log(
//   `The stock ${stock} it's price is $${value} and it's company name is ${company} and it's ceo is ${ceo} and it's Echanges ${exchange}`
// );

// using Object.defineProperties
const User = function () {
  let name = "",
    age,
    changes = [];
  Object.defineProperties(this, {
    id: {
      enumerable: true,
      value: `UID-${parseInt(Math.random() * 30000)}-XYZ`,
    },
    name: {
      enumerable: true,
      get() {
        return name;
      },
      set(val) {
        changes.push(`name is set to ${val}`);
        name = val;
      },
    },
    age: {
      enumerable: true,
      get() {
        return age;
      },
      set(val) {
        changes.push(`age is set to ${val}`);
        age = val;
      },
    },
    changes: {
      enumerable: true,
      get() {
        return changes;
      },
    },
  });
};

let joe = new User();
joe.name = "Joe";
joe.name = "Joe M";
joe.age = 23;
joe.age = 20;
// console.log(joe.id, joe.name, joe.age);
// console.log(joe.changes);

const Car = function () {
  let brand = "";
  let model = "";
  let transmission = "";
  let color = "";
  let changeLog = [];

  Object.defineProperties(this, {
    id: {
      enumerable: true,
      value: `CAR-012X-DB1`,
    },
    brand: {
      enumerable: true,
      set(val) {
        changeLog.push(`Brand changed to ${val}`);
        brand = val;
      },
      get() {
        return brand;
      },
    },
    model: {
      enumerable: true,
      set(val) {
        changeLog.push(`Model changed to ${val}`);
        model = val;
      },
      get() {
        return model;
      },
    },
    transmission: {
      enumerable: true,
      set(val) {
        changeLog.push(`Transmission changed to ${val}`);
        transmission = val;
      },
      get() {
        return transmission;
      },
    },
    color: {
      enumerable: true,
      set(val) {
        changeLog.push(`Color changed to ${val}`);
        color = val;
      },
      get() {
        return color;
      },
    },
    changeLog: {
      get() {
        return changeLog;
      },
    },
  });
};

const Civic = new Car();

Civic.brand = "Honda";
Civic.model = "Civic";
Civic.transmission = "AT";
Civic.color = "Galaxy Grey";

Civic.model = "Civic 1.8S";
Civic.color = "Pearl White";

for (let prop in Civic) {
  console.log(`${prop}: ${Civic[prop]}`);
}

console.log(Civic.changeLog);
