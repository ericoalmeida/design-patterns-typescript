import { IMealOrderBuilderProtocol } from '../protocols/IMealOrderBuilderProtocol';
import { MealOrder } from './meals/MealOrder';
import { Beans, Beverage, Dessert, Meat, Rice } from './meals/Meals';

export class MainOrderBuilder implements IMealOrderBuilderProtocol {
  private mealOrder: MealOrder;

  private constructor() {
    this.mealOrder = new MealOrder();
  }

  public static createInstance(): MainOrderBuilder {
    return new MainOrderBuilder();
  }

  makeDefaultMeal(): this {
    const rice = new Rice('Arroz', 2.99);
    const beans = new Beans('Feijão', 3.49);
    const meat = new Meat('Carne', 9.59);

    this.mealOrder.add(rice, beans, meat);

    return this;
  }

  addBeverage(): this {
    const beverage = new Beverage('Bebida', 9.59);

    this.mealOrder.add(beverage);

    return this;
  }

  addDessert(): this {
    const dessert = new Dessert('Bebida', 9.59);

    this.mealOrder.add(dessert);

    return this;
  }

  result(): MealOrder {
    return this.mealOrder;
  }
}
