export interface IMealOrderBuilderProtocol {
  makeDefaultMeal(): this;
  addBeverage(): this;
  addDessert(): this;
}
