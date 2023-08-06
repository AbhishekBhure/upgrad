const emp = {
  id: 1,
  name: "John",
  role: "ReactJs Dev",
  intro: function () {
    console.log(`${this.name} is a ${this.role}`);
  },
};

emp.intro();
