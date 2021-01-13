class Airport {

  MAX_CAPACITY = 1;

  constructor() {
    this.hangar = [];
  };

  landPlane(plane) {
    if (this.hangar.length == this.MAX_CAPACITY) {
      let capacityError = 'The airport is full. Go away!';
      throw new TypeError(capacityError);
    } else {
      return this.hangar.push(plane)
    };
  };

  takeOffPlane(plane) {
    let planeIndex = this.hangar.indexOf(plane)
    this.hangar.splice(plane, 1)
    plane.takeoff()
    return plane
  };

  isInHangar(plane) {
    return this.hangar.includes(plane)
  };

}
