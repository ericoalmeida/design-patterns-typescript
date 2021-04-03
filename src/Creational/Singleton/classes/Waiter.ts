import { Database } from '../db/Database';
import { IUserProtocol } from '../protocols/IUserProtocol';

export class Waiter {
  private readonly database: Database;

  constructor() {
    this.database = Database.instance;
  }

  public addWaiter(waiter: IUserProtocol): void {
    this.database.addUser(waiter);
  }
}
