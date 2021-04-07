import { IMealCompositProtocol } from './Meals';

export class MealOrder implements IMealCompositProtocol {
  private readonly meals: IMealCompositProtocol[] = [];

  getPrice(): number {
    return this.meals.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  add(...meal: IMealCompositProtocol[]): void {
    meal.forEach((item) => this.meals.push(item));
  }
}
