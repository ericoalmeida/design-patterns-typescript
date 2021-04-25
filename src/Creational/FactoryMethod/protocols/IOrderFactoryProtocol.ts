import { OrderTypes } from '../constants';
import { IOrderProtocol } from './IOrderProtocol';

export interface IOrderFactory {
  createOrder(orderType: OrderTypes): IOrderProtocol;
}
