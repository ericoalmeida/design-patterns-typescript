import { IUserProtocol } from '../protocols/IUserProtocol';

export class Database {
  private static fInstance?: Database;
  private fUsers: IUserProtocol[] = [];

  private constructor() {
    //
  }

  public static get instance(): Database {
    if (!this.fInstance) {
      this.fInstance = new Database();
    }

    return this.fInstance;
  }

  public addUser(user: IUserProtocol): void {
    this.fUsers.push(user);
  }

  public removeUser(userIndex: number): void {
    this.fUsers.splice(userIndex, 1);
  }

  public showUsers(): IUserProtocol[] {
    return this.fUsers;
  }
}
