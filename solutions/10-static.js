export default class Time {
  // BEGIN
  static fromString(string) {
    const [hours, minutes] = string.split(':').map(Number);
    return new Time(hours, minutes);
  }
  // END

  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}
