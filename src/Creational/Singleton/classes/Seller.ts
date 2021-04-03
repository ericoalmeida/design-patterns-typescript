import { Database } from '../db/Database';
import { IUserProtocol } from '../protocols/IUserProtocol';

export class Seller {
  private readonly database: Database;

  constructor() {
    this.database = Database.instance;
  }

  public addSeller(seller: IUserProtocol): void {
    this.database.addUser(seller);
  }
}
