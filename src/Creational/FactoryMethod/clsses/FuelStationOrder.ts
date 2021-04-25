import { IOrderProtocol } from '../protocols/IOrderProtocol';

export class FuelStationOrder implements IOrderProtocol {
  buyItems(): void {
    console.log('Buying fuel');
  }

  print(): void {
    console.log('Purchased fuel');
  }
}
