import { MainOrderBuilder } from './MainOrderBuilder';
import { MealOrder } from './meals/MealOrder';
import { VegetarianOrderBuilder } from './VegetarianOrderBuilder';

export class OrderDirector {
  private constructor() {
    //
  }

  public static createInstance(): OrderDirector {
    return new OrderDirector();
  }

  mainOrder(): MealOrder {
    return MainOrderBuilder.createInstance()
      .makeDefaultMeal()
      .addBeverage()
      .addDessert()
      .result();
  }

  vegetarianOrder(): MealOrder {
    return VegetarianOrderBuilder.createInstance()
      .makeDefaultMeal()
      .addBeverage()
      .addDessert()
      .result();
  }
}
