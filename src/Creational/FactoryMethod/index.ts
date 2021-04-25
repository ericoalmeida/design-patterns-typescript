import { OrderFactory } from './clsses/OrderFactory';
import { OrderTypes } from './constants';

console.log('>> Starting Factory Method design pattern');

const orderFactory = new OrderFactory();

const fuelStationOrder = orderFactory.createOrder(OrderTypes.FUEL_STATION);

fuelStationOrder.buyItems();
fuelStationOrder.print();

const pharmacyOrder = orderFactory.createOrder(OrderTypes.PHARMACY);

pharmacyOrder.buyItems();
pharmacyOrder.print();
