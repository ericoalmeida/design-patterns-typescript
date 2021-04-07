import { IMealOrderBuilderProtocol } from '../protocols/IMealOrderBuilderProtocol';
import { MealOrder } from './meals/MealOrder';
import { Beans, Beverage, Dessert, Rice } from './meals/Meals';

export class VegetarianOrderBuilder implements IMealOrderBuilderProtocol {
  private mealOrder: MealOrder;

  private constructor() {
    this.mealOrder = new MealOrder();
  }

  public static createInstance(): VegetarianOrderBuilder {
    return new VegetarianOrderBuilder();
  }

  makeDefaultMeal(): this {
    const rice = new Rice('Arroz', 4.99);
    const beans = new Beans('Feijão', 3.19);

    this.mealOrder.add(rice, beans);

    return this;
  }

  addBeverage(): this {
    const beverage = new Beverage('Bebida', 12.59);

    this.mealOrder.add(beverage);

    return this;
  }

  addDessert(): this {
    const dessert = new Dessert('Bebida', 1.59);

    this.mealOrder.add(dessert);

    return this;
  }

  result(): MealOrder {
    return this.mealOrder;
  }
}
