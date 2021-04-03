import faker from 'faker';

import { Seller } from './classes/Seller';
import { Waiter } from './classes/Waiter';
import { Database } from './db/Database';

console.log('>> Starting Singleton design pattern');

const seller = new Seller();
const waiter = new Waiter();

seller.addSeller({
  name: faker.name.firstName(),
  age: 29,
  occupation: 'Seller',
});

waiter.addWaiter({
  name: faker.name.firstName(),
  age: 31,
  occupation: 'Waiter',
});

console.log(Database.instance.showUsers());

// Mesmo com as classes Waiter e Seller "criando" internamente uma instancia de Database,
// o Singleton garante que sempre seja utilizado a mesma instancia da classe Database
// por isso será exibido ambos, tanto Sellers como Waiters

// Resultado do console.log() abaixo

// [ { name: 'Cassandre', age: 29, occupation: 'Seller' },
//   { name: 'Erich', age: 31, occupation: 'Waiter' } ]
