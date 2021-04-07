import { OrderDirector } from './classes/OrderDirector';

console.log('>> Starting Builder design pattern');

const mainOrder = OrderDirector.createInstance().mainOrder();
const vegetarianOrder = OrderDirector.createInstance().vegetarianOrder();

console.log(`Total order: ${mainOrder.getPrice()}`);
console.log(`Total vegetarian order: ${vegetarianOrder.getPrice()}`);
