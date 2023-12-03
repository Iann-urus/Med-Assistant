// 👇️ named export
export class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  increaseyear() {
    this.year += 11;
  }
}
