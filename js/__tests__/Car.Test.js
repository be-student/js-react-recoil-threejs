const Car = require("../src/domain/Car");

describe("Car", () => {
  let car;
  beforeEach(() => {
    car = new Car("Maserati");
  });

  test("move", () => {
    car.move(5);
    expect(car.getPosition()).toBe(1);
  });

  test("getName", () => {
    expect(car.getName()).toBe("Maserati");
  });
});
