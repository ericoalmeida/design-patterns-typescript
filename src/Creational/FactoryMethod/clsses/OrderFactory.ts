import { OrderTypes } from '../constants';
import { IOrderFactory } from '../protocols/IOrderFactoryProtocol';
import { IOrderProtocol } from '../protocols/IOrderProtocol';
import { FuelStationOrder } from './FuelStationOrder';
import { PharmacyOrder } from './PharmacyOrder';

export class OrderFactory implements IOrderFactory {
  createOrder(orderType: OrderTypes): IOrderProtocol {
    const order = {
      FUEL_STATION: new FuelStationOrder(),
      PHARMACY: new PharmacyOrder(),
    };

    return order[orderType];
  }
}
