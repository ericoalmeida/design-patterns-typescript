import { IOrderProtocol } from '../protocols/IOrderProtocol';

export class PharmacyOrder implements IOrderProtocol {
  buyItems(): void {
    console.log('Buyind medicine');
  }

  print(): void {
    console.log('Purchased medicine');
  }
}
