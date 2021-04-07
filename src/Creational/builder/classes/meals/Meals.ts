// This is Structure needed to exemplify the builder design pattern.

export interface IMealCompositProtocol {
  getPrice(): number;
}

abstract class Meal implements IMealCompositProtocol {
  constructor(private name: string, private price: number) {
    //
  }

  getPrice(): number {
    return this.price;
  }
}

export class Rice extends Meal {
  //
}

export class Beans extends Meal {
  //
}

export class Meat extends Meal {
  //
}

export class Beverage extends Meal {
  //
}

export class Dessert extends Meal {
  //
}
