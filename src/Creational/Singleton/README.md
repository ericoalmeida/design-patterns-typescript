# Singleton

## What is it for?

Singleton is used when it is necessary to ensure that only one instance of a class is created.

> We can use as an exemple, a class responsible for a connecting to a database, let's say that it is a requirement of the software to ensure that there is only one instance of connection to the database, impelmenting singleton pattern we can ensure that this requirement is met.

## How to implement?

### Class diagram

![Singleton](https://github.com/ericoalmeida/design-patterns-typescript/blob/master/src/Creational/Singleton/assets/Singleton.png?raw=true)
### Implementation

```typescript
export class Singleton {
  private static fInstance?: Singleton;

  private constructor() {}

  public static get instance(): Singleton {
    if (!this.fInstance) {
      this.fInstance = new Singleton();
    }

    return this.fInstance;
  }
}
```

  ### Tips:
   - Static methods and properties of a class can be accessed even if an instance **_has not yet been created_**.
   - Static properties of a class, will be **_common among all instances_**.
   - In javascript/typescript working as modules, they will **_be like singletons_**.
