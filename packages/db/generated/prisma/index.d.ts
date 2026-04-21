
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model Trades
 * 
 */
export type Trades = $Result.DefaultSelection<Prisma.$TradesPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Balances
 * 
 */
export type Balances = $Result.DefaultSelection<Prisma.$BalancesPayload>
/**
 * Model Ledger
 * 
 */
export type Ledger = $Result.DefaultSelection<Prisma.$LedgerPayload>
/**
 * Model Tickers
 * 
 */
export type Tickers = $Result.DefaultSelection<Prisma.$TickersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SIDE: {
  BUY: 'BUY',
  SELL: 'SELL'
};

export type SIDE = (typeof SIDE)[keyof typeof SIDE]


export const TYPE: {
  LIMIT: 'LIMIT',
  MARKET: 'MARKET'
};

export type TYPE = (typeof TYPE)[keyof typeof TYPE]


export const STATUS: {
  PENDING: 'PENDING',
  FULL_FILLED: 'FULL_FILLED',
  PARTIALLY_FILLED: 'PARTIALLY_FILLED',
  CANCELLED: 'CANCELLED'
};

export type STATUS = (typeof STATUS)[keyof typeof STATUS]


export const LedgerType: {
  CREDIT: 'CREDIT',
  DEBIT: 'DEBIT'
};

export type LedgerType = (typeof LedgerType)[keyof typeof LedgerType]


export const LedgerReason: {
  TRADE_PROFIT: 'TRADE_PROFIT',
  TRADE_COST: 'TRADE_COST',
  ASSET_CREDIT: 'ASSET_CREDIT',
  ASSET_DEBIT: 'ASSET_DEBIT',
  FEE: 'FEE',
  DEPOSIT: 'DEPOSIT',
  WITHDRAWAL: 'WITHDRAWAL'
};

export type LedgerReason = (typeof LedgerReason)[keyof typeof LedgerReason]

}

export type SIDE = $Enums.SIDE

export const SIDE: typeof $Enums.SIDE

export type TYPE = $Enums.TYPE

export const TYPE: typeof $Enums.TYPE

export type STATUS = $Enums.STATUS

export const STATUS: typeof $Enums.STATUS

export type LedgerType = $Enums.LedgerType

export const LedgerType: typeof $Enums.LedgerType

export type LedgerReason = $Enums.LedgerReason

export const LedgerReason: typeof $Enums.LedgerReason

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Orders
 * const orders = await prisma.orders.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Orders
   * const orders = await prisma.orders.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trades`: Exposes CRUD operations for the **Trades** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trades
    * const trades = await prisma.trades.findMany()
    * ```
    */
  get trades(): Prisma.TradesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.balances`: Exposes CRUD operations for the **Balances** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Balances
    * const balances = await prisma.balances.findMany()
    * ```
    */
  get balances(): Prisma.BalancesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ledger`: Exposes CRUD operations for the **Ledger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ledgers
    * const ledgers = await prisma.ledger.findMany()
    * ```
    */
  get ledger(): Prisma.LedgerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tickers`: Exposes CRUD operations for the **Tickers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickers
    * const tickers = await prisma.tickers.findMany()
    * ```
    */
  get tickers(): Prisma.TickersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Orders: 'Orders',
    Trades: 'Trades',
    User: 'User',
    Balances: 'Balances',
    Ledger: 'Ledger',
    Tickers: 'Tickers'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "orders" | "trades" | "user" | "balances" | "ledger" | "tickers"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      Trades: {
        payload: Prisma.$TradesPayload<ExtArgs>
        fields: Prisma.TradesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TradesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TradesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradesPayload>
          }
          findFirst: {
            args: Prisma.TradesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TradesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradesPayload>
          }
          findMany: {
            args: Prisma.TradesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradesPayload>[]
          }
          create: {
            args: Prisma.TradesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradesPayload>
          }
          createMany: {
            args: Prisma.TradesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TradesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradesPayload>[]
          }
          delete: {
            args: Prisma.TradesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradesPayload>
          }
          update: {
            args: Prisma.TradesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradesPayload>
          }
          deleteMany: {
            args: Prisma.TradesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TradesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TradesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradesPayload>[]
          }
          upsert: {
            args: Prisma.TradesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradesPayload>
          }
          aggregate: {
            args: Prisma.TradesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrades>
          }
          groupBy: {
            args: Prisma.TradesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradesGroupByOutputType>[]
          }
          count: {
            args: Prisma.TradesCountArgs<ExtArgs>
            result: $Utils.Optional<TradesCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Balances: {
        payload: Prisma.$BalancesPayload<ExtArgs>
        fields: Prisma.BalancesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BalancesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BalancesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancesPayload>
          }
          findFirst: {
            args: Prisma.BalancesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BalancesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancesPayload>
          }
          findMany: {
            args: Prisma.BalancesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancesPayload>[]
          }
          create: {
            args: Prisma.BalancesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancesPayload>
          }
          createMany: {
            args: Prisma.BalancesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BalancesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancesPayload>[]
          }
          delete: {
            args: Prisma.BalancesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancesPayload>
          }
          update: {
            args: Prisma.BalancesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancesPayload>
          }
          deleteMany: {
            args: Prisma.BalancesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BalancesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BalancesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancesPayload>[]
          }
          upsert: {
            args: Prisma.BalancesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancesPayload>
          }
          aggregate: {
            args: Prisma.BalancesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBalances>
          }
          groupBy: {
            args: Prisma.BalancesGroupByArgs<ExtArgs>
            result: $Utils.Optional<BalancesGroupByOutputType>[]
          }
          count: {
            args: Prisma.BalancesCountArgs<ExtArgs>
            result: $Utils.Optional<BalancesCountAggregateOutputType> | number
          }
        }
      }
      Ledger: {
        payload: Prisma.$LedgerPayload<ExtArgs>
        fields: Prisma.LedgerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LedgerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LedgerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>
          }
          findFirst: {
            args: Prisma.LedgerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LedgerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>
          }
          findMany: {
            args: Prisma.LedgerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>[]
          }
          create: {
            args: Prisma.LedgerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>
          }
          createMany: {
            args: Prisma.LedgerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LedgerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>[]
          }
          delete: {
            args: Prisma.LedgerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>
          }
          update: {
            args: Prisma.LedgerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>
          }
          deleteMany: {
            args: Prisma.LedgerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LedgerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LedgerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>[]
          }
          upsert: {
            args: Prisma.LedgerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerPayload>
          }
          aggregate: {
            args: Prisma.LedgerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLedger>
          }
          groupBy: {
            args: Prisma.LedgerGroupByArgs<ExtArgs>
            result: $Utils.Optional<LedgerGroupByOutputType>[]
          }
          count: {
            args: Prisma.LedgerCountArgs<ExtArgs>
            result: $Utils.Optional<LedgerCountAggregateOutputType> | number
          }
        }
      }
      Tickers: {
        payload: Prisma.$TickersPayload<ExtArgs>
        fields: Prisma.TickersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TickersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TickersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickersPayload>
          }
          findFirst: {
            args: Prisma.TickersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TickersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickersPayload>
          }
          findMany: {
            args: Prisma.TickersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickersPayload>[]
          }
          create: {
            args: Prisma.TickersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickersPayload>
          }
          createMany: {
            args: Prisma.TickersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TickersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickersPayload>[]
          }
          delete: {
            args: Prisma.TickersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickersPayload>
          }
          update: {
            args: Prisma.TickersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickersPayload>
          }
          deleteMany: {
            args: Prisma.TickersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TickersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TickersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickersPayload>[]
          }
          upsert: {
            args: Prisma.TickersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TickersPayload>
          }
          aggregate: {
            args: Prisma.TickersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTickers>
          }
          groupBy: {
            args: Prisma.TickersGroupByArgs<ExtArgs>
            result: $Utils.Optional<TickersGroupByOutputType>[]
          }
          count: {
            args: Prisma.TickersCountArgs<ExtArgs>
            result: $Utils.Optional<TickersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    orders?: OrdersOmit
    trades?: TradesOmit
    user?: UserOmit
    balances?: BalancesOmit
    ledger?: LedgerOmit
    tickers?: TickersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    balance: number
    transactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    balance?: boolean | UserCountOutputTypeCountBalanceArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BalancesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerWhereInput
  }


  /**
   * Count Type BalancesCountOutputType
   */

  export type BalancesCountOutputType = {
    ledgers: number
  }

  export type BalancesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ledgers?: boolean | BalancesCountOutputTypeCountLedgersArgs
  }

  // Custom InputTypes
  /**
   * BalancesCountOutputType without action
   */
  export type BalancesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalancesCountOutputType
     */
    select?: BalancesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BalancesCountOutputType without action
   */
  export type BalancesCountOutputTypeCountLedgersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    quote_price: number | null
    quote_quantity: number | null
    filled_quantity: number | null
    filled_price: number | null
  }

  export type OrdersSumAggregateOutputType = {
    quote_price: number | null
    quote_quantity: number | null
    filled_quantity: number | null
    filled_price: number | null
  }

  export type OrdersMinAggregateOutputType = {
    orderId: string | null
    symbol: string | null
    userId: string | null
    side: $Enums.SIDE | null
    type: $Enums.TYPE | null
    quote_price: number | null
    quote_quantity: number | null
    filled_quantity: number | null
    filled_price: number | null
    timestamp: Date | null
    updatedAt: Date | null
    status: $Enums.STATUS | null
  }

  export type OrdersMaxAggregateOutputType = {
    orderId: string | null
    symbol: string | null
    userId: string | null
    side: $Enums.SIDE | null
    type: $Enums.TYPE | null
    quote_price: number | null
    quote_quantity: number | null
    filled_quantity: number | null
    filled_price: number | null
    timestamp: Date | null
    updatedAt: Date | null
    status: $Enums.STATUS | null
  }

  export type OrdersCountAggregateOutputType = {
    orderId: number
    symbol: number
    userId: number
    side: number
    type: number
    quote_price: number
    quote_quantity: number
    filled_quantity: number
    filled_price: number
    timestamp: number
    updatedAt: number
    status: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    quote_price?: true
    quote_quantity?: true
    filled_quantity?: true
    filled_price?: true
  }

  export type OrdersSumAggregateInputType = {
    quote_price?: true
    quote_quantity?: true
    filled_quantity?: true
    filled_price?: true
  }

  export type OrdersMinAggregateInputType = {
    orderId?: true
    symbol?: true
    userId?: true
    side?: true
    type?: true
    quote_price?: true
    quote_quantity?: true
    filled_quantity?: true
    filled_price?: true
    timestamp?: true
    updatedAt?: true
    status?: true
  }

  export type OrdersMaxAggregateInputType = {
    orderId?: true
    symbol?: true
    userId?: true
    side?: true
    type?: true
    quote_price?: true
    quote_quantity?: true
    filled_quantity?: true
    filled_price?: true
    timestamp?: true
    updatedAt?: true
    status?: true
  }

  export type OrdersCountAggregateInputType = {
    orderId?: true
    symbol?: true
    userId?: true
    side?: true
    type?: true
    quote_price?: true
    quote_quantity?: true
    filled_quantity?: true
    filled_price?: true
    timestamp?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    orderId: string
    symbol: string
    userId: string
    side: $Enums.SIDE
    type: $Enums.TYPE
    quote_price: number
    quote_quantity: number
    filled_quantity: number
    filled_price: number
    timestamp: Date
    updatedAt: Date
    status: $Enums.STATUS
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    symbol?: boolean
    userId?: boolean
    side?: boolean
    type?: boolean
    quote_price?: boolean
    quote_quantity?: boolean
    filled_quantity?: boolean
    filled_price?: boolean
    timestamp?: boolean
    updatedAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    symbol?: boolean
    userId?: boolean
    side?: boolean
    type?: boolean
    quote_price?: boolean
    quote_quantity?: boolean
    filled_quantity?: boolean
    filled_price?: boolean
    timestamp?: boolean
    updatedAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    symbol?: boolean
    userId?: boolean
    side?: boolean
    type?: boolean
    quote_price?: boolean
    quote_quantity?: boolean
    filled_quantity?: boolean
    filled_price?: boolean
    timestamp?: boolean
    updatedAt?: boolean
    status?: boolean
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    orderId?: boolean
    symbol?: boolean
    userId?: boolean
    side?: boolean
    type?: boolean
    quote_price?: boolean
    quote_quantity?: boolean
    filled_quantity?: boolean
    filled_price?: boolean
    timestamp?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"orderId" | "symbol" | "userId" | "side" | "type" | "quote_price" | "quote_quantity" | "filled_quantity" | "filled_price" | "timestamp" | "updatedAt" | "status", ExtArgs["result"]["orders"]>

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      orderId: string
      symbol: string
      userId: string
      side: $Enums.SIDE
      type: $Enums.TYPE
      quote_price: number
      quote_quantity: number
      filled_quantity: number
      filled_price: number
      timestamp: Date
      updatedAt: Date
      status: $Enums.STATUS
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `orderId`
     * const ordersWithOrderIdOnly = await prisma.orders.findMany({ select: { orderId: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `orderId`
     * const ordersWithOrderIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { orderId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `orderId`
     * const ordersWithOrderIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { orderId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly orderId: FieldRef<"Orders", 'String'>
    readonly symbol: FieldRef<"Orders", 'String'>
    readonly userId: FieldRef<"Orders", 'String'>
    readonly side: FieldRef<"Orders", 'SIDE'>
    readonly type: FieldRef<"Orders", 'TYPE'>
    readonly quote_price: FieldRef<"Orders", 'Float'>
    readonly quote_quantity: FieldRef<"Orders", 'Float'>
    readonly filled_quantity: FieldRef<"Orders", 'Float'>
    readonly filled_price: FieldRef<"Orders", 'Float'>
    readonly timestamp: FieldRef<"Orders", 'DateTime'>
    readonly updatedAt: FieldRef<"Orders", 'DateTime'>
    readonly status: FieldRef<"Orders", 'STATUS'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
  }


  /**
   * Model Trades
   */

  export type AggregateTrades = {
    _count: TradesCountAggregateOutputType | null
    _avg: TradesAvgAggregateOutputType | null
    _sum: TradesSumAggregateOutputType | null
    _min: TradesMinAggregateOutputType | null
    _max: TradesMaxAggregateOutputType | null
  }

  export type TradesAvgAggregateOutputType = {
    price: number | null
    volume: number | null
  }

  export type TradesSumAggregateOutputType = {
    price: number | null
    volume: number | null
  }

  export type TradesMinAggregateOutputType = {
    tradeId: string | null
    symbol: string | null
    price: number | null
    volume: number | null
    timestamp: Date | null
  }

  export type TradesMaxAggregateOutputType = {
    tradeId: string | null
    symbol: string | null
    price: number | null
    volume: number | null
    timestamp: Date | null
  }

  export type TradesCountAggregateOutputType = {
    tradeId: number
    symbol: number
    price: number
    volume: number
    timestamp: number
    _all: number
  }


  export type TradesAvgAggregateInputType = {
    price?: true
    volume?: true
  }

  export type TradesSumAggregateInputType = {
    price?: true
    volume?: true
  }

  export type TradesMinAggregateInputType = {
    tradeId?: true
    symbol?: true
    price?: true
    volume?: true
    timestamp?: true
  }

  export type TradesMaxAggregateInputType = {
    tradeId?: true
    symbol?: true
    price?: true
    volume?: true
    timestamp?: true
  }

  export type TradesCountAggregateInputType = {
    tradeId?: true
    symbol?: true
    price?: true
    volume?: true
    timestamp?: true
    _all?: true
  }

  export type TradesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trades to aggregate.
     */
    where?: TradesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradesOrderByWithRelationInput | TradesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TradesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trades
    **/
    _count?: true | TradesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TradesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TradesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradesMaxAggregateInputType
  }

  export type GetTradesAggregateType<T extends TradesAggregateArgs> = {
        [P in keyof T & keyof AggregateTrades]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrades[P]>
      : GetScalarType<T[P], AggregateTrades[P]>
  }




  export type TradesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradesWhereInput
    orderBy?: TradesOrderByWithAggregationInput | TradesOrderByWithAggregationInput[]
    by: TradesScalarFieldEnum[] | TradesScalarFieldEnum
    having?: TradesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradesCountAggregateInputType | true
    _avg?: TradesAvgAggregateInputType
    _sum?: TradesSumAggregateInputType
    _min?: TradesMinAggregateInputType
    _max?: TradesMaxAggregateInputType
  }

  export type TradesGroupByOutputType = {
    tradeId: string
    symbol: string
    price: number
    volume: number
    timestamp: Date
    _count: TradesCountAggregateOutputType | null
    _avg: TradesAvgAggregateOutputType | null
    _sum: TradesSumAggregateOutputType | null
    _min: TradesMinAggregateOutputType | null
    _max: TradesMaxAggregateOutputType | null
  }

  type GetTradesGroupByPayload<T extends TradesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradesGroupByOutputType[P]>
            : GetScalarType<T[P], TradesGroupByOutputType[P]>
        }
      >
    >


  export type TradesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tradeId?: boolean
    symbol?: boolean
    price?: boolean
    volume?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["trades"]>

  export type TradesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tradeId?: boolean
    symbol?: boolean
    price?: boolean
    volume?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["trades"]>

  export type TradesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tradeId?: boolean
    symbol?: boolean
    price?: boolean
    volume?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["trades"]>

  export type TradesSelectScalar = {
    tradeId?: boolean
    symbol?: boolean
    price?: boolean
    volume?: boolean
    timestamp?: boolean
  }

  export type TradesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tradeId" | "symbol" | "price" | "volume" | "timestamp", ExtArgs["result"]["trades"]>

  export type $TradesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trades"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      tradeId: string
      symbol: string
      price: number
      volume: number
      timestamp: Date
    }, ExtArgs["result"]["trades"]>
    composites: {}
  }

  type TradesGetPayload<S extends boolean | null | undefined | TradesDefaultArgs> = $Result.GetResult<Prisma.$TradesPayload, S>

  type TradesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TradesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradesCountAggregateInputType | true
    }

  export interface TradesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trades'], meta: { name: 'Trades' } }
    /**
     * Find zero or one Trades that matches the filter.
     * @param {TradesFindUniqueArgs} args - Arguments to find a Trades
     * @example
     * // Get one Trades
     * const trades = await prisma.trades.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradesFindUniqueArgs>(args: SelectSubset<T, TradesFindUniqueArgs<ExtArgs>>): Prisma__TradesClient<$Result.GetResult<Prisma.$TradesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trades that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TradesFindUniqueOrThrowArgs} args - Arguments to find a Trades
     * @example
     * // Get one Trades
     * const trades = await prisma.trades.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradesFindUniqueOrThrowArgs>(args: SelectSubset<T, TradesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TradesClient<$Result.GetResult<Prisma.$TradesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradesFindFirstArgs} args - Arguments to find a Trades
     * @example
     * // Get one Trades
     * const trades = await prisma.trades.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradesFindFirstArgs>(args?: SelectSubset<T, TradesFindFirstArgs<ExtArgs>>): Prisma__TradesClient<$Result.GetResult<Prisma.$TradesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trades that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradesFindFirstOrThrowArgs} args - Arguments to find a Trades
     * @example
     * // Get one Trades
     * const trades = await prisma.trades.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradesFindFirstOrThrowArgs>(args?: SelectSubset<T, TradesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TradesClient<$Result.GetResult<Prisma.$TradesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trades
     * const trades = await prisma.trades.findMany()
     * 
     * // Get first 10 Trades
     * const trades = await prisma.trades.findMany({ take: 10 })
     * 
     * // Only select the `tradeId`
     * const tradesWithTradeIdOnly = await prisma.trades.findMany({ select: { tradeId: true } })
     * 
     */
    findMany<T extends TradesFindManyArgs>(args?: SelectSubset<T, TradesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trades.
     * @param {TradesCreateArgs} args - Arguments to create a Trades.
     * @example
     * // Create one Trades
     * const Trades = await prisma.trades.create({
     *   data: {
     *     // ... data to create a Trades
     *   }
     * })
     * 
     */
    create<T extends TradesCreateArgs>(args: SelectSubset<T, TradesCreateArgs<ExtArgs>>): Prisma__TradesClient<$Result.GetResult<Prisma.$TradesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trades.
     * @param {TradesCreateManyArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trades = await prisma.trades.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TradesCreateManyArgs>(args?: SelectSubset<T, TradesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trades and returns the data saved in the database.
     * @param {TradesCreateManyAndReturnArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trades = await prisma.trades.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trades and only return the `tradeId`
     * const tradesWithTradeIdOnly = await prisma.trades.createManyAndReturn({
     *   select: { tradeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TradesCreateManyAndReturnArgs>(args?: SelectSubset<T, TradesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trades.
     * @param {TradesDeleteArgs} args - Arguments to delete one Trades.
     * @example
     * // Delete one Trades
     * const Trades = await prisma.trades.delete({
     *   where: {
     *     // ... filter to delete one Trades
     *   }
     * })
     * 
     */
    delete<T extends TradesDeleteArgs>(args: SelectSubset<T, TradesDeleteArgs<ExtArgs>>): Prisma__TradesClient<$Result.GetResult<Prisma.$TradesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trades.
     * @param {TradesUpdateArgs} args - Arguments to update one Trades.
     * @example
     * // Update one Trades
     * const trades = await prisma.trades.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TradesUpdateArgs>(args: SelectSubset<T, TradesUpdateArgs<ExtArgs>>): Prisma__TradesClient<$Result.GetResult<Prisma.$TradesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trades.
     * @param {TradesDeleteManyArgs} args - Arguments to filter Trades to delete.
     * @example
     * // Delete a few Trades
     * const { count } = await prisma.trades.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TradesDeleteManyArgs>(args?: SelectSubset<T, TradesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trades
     * const trades = await prisma.trades.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TradesUpdateManyArgs>(args: SelectSubset<T, TradesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades and returns the data updated in the database.
     * @param {TradesUpdateManyAndReturnArgs} args - Arguments to update many Trades.
     * @example
     * // Update many Trades
     * const trades = await prisma.trades.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trades and only return the `tradeId`
     * const tradesWithTradeIdOnly = await prisma.trades.updateManyAndReturn({
     *   select: { tradeId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TradesUpdateManyAndReturnArgs>(args: SelectSubset<T, TradesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trades.
     * @param {TradesUpsertArgs} args - Arguments to update or create a Trades.
     * @example
     * // Update or create a Trades
     * const trades = await prisma.trades.upsert({
     *   create: {
     *     // ... data to create a Trades
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trades we want to update
     *   }
     * })
     */
    upsert<T extends TradesUpsertArgs>(args: SelectSubset<T, TradesUpsertArgs<ExtArgs>>): Prisma__TradesClient<$Result.GetResult<Prisma.$TradesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradesCountArgs} args - Arguments to filter Trades to count.
     * @example
     * // Count the number of Trades
     * const count = await prisma.trades.count({
     *   where: {
     *     // ... the filter for the Trades we want to count
     *   }
     * })
    **/
    count<T extends TradesCountArgs>(
      args?: Subset<T, TradesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TradesAggregateArgs>(args: Subset<T, TradesAggregateArgs>): Prisma.PrismaPromise<GetTradesAggregateType<T>>

    /**
     * Group by Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TradesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradesGroupByArgs['orderBy'] }
        : { orderBy?: TradesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TradesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trades model
   */
  readonly fields: TradesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trades.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trades model
   */
  interface TradesFieldRefs {
    readonly tradeId: FieldRef<"Trades", 'String'>
    readonly symbol: FieldRef<"Trades", 'String'>
    readonly price: FieldRef<"Trades", 'Float'>
    readonly volume: FieldRef<"Trades", 'Float'>
    readonly timestamp: FieldRef<"Trades", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trades findUnique
   */
  export type TradesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trades
     */
    select?: TradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trades
     */
    omit?: TradesOmit<ExtArgs> | null
    /**
     * Filter, which Trades to fetch.
     */
    where: TradesWhereUniqueInput
  }

  /**
   * Trades findUniqueOrThrow
   */
  export type TradesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trades
     */
    select?: TradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trades
     */
    omit?: TradesOmit<ExtArgs> | null
    /**
     * Filter, which Trades to fetch.
     */
    where: TradesWhereUniqueInput
  }

  /**
   * Trades findFirst
   */
  export type TradesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trades
     */
    select?: TradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trades
     */
    omit?: TradesOmit<ExtArgs> | null
    /**
     * Filter, which Trades to fetch.
     */
    where?: TradesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradesOrderByWithRelationInput | TradesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradesScalarFieldEnum | TradesScalarFieldEnum[]
  }

  /**
   * Trades findFirstOrThrow
   */
  export type TradesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trades
     */
    select?: TradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trades
     */
    omit?: TradesOmit<ExtArgs> | null
    /**
     * Filter, which Trades to fetch.
     */
    where?: TradesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradesOrderByWithRelationInput | TradesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradesScalarFieldEnum | TradesScalarFieldEnum[]
  }

  /**
   * Trades findMany
   */
  export type TradesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trades
     */
    select?: TradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trades
     */
    omit?: TradesOmit<ExtArgs> | null
    /**
     * Filter, which Trades to fetch.
     */
    where?: TradesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradesOrderByWithRelationInput | TradesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trades.
     */
    cursor?: TradesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    distinct?: TradesScalarFieldEnum | TradesScalarFieldEnum[]
  }

  /**
   * Trades create
   */
  export type TradesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trades
     */
    select?: TradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trades
     */
    omit?: TradesOmit<ExtArgs> | null
    /**
     * The data needed to create a Trades.
     */
    data: XOR<TradesCreateInput, TradesUncheckedCreateInput>
  }

  /**
   * Trades createMany
   */
  export type TradesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trades.
     */
    data: TradesCreateManyInput | TradesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trades createManyAndReturn
   */
  export type TradesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trades
     */
    select?: TradesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trades
     */
    omit?: TradesOmit<ExtArgs> | null
    /**
     * The data used to create many Trades.
     */
    data: TradesCreateManyInput | TradesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trades update
   */
  export type TradesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trades
     */
    select?: TradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trades
     */
    omit?: TradesOmit<ExtArgs> | null
    /**
     * The data needed to update a Trades.
     */
    data: XOR<TradesUpdateInput, TradesUncheckedUpdateInput>
    /**
     * Choose, which Trades to update.
     */
    where: TradesWhereUniqueInput
  }

  /**
   * Trades updateMany
   */
  export type TradesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trades.
     */
    data: XOR<TradesUpdateManyMutationInput, TradesUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradesWhereInput
    /**
     * Limit how many Trades to update.
     */
    limit?: number
  }

  /**
   * Trades updateManyAndReturn
   */
  export type TradesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trades
     */
    select?: TradesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trades
     */
    omit?: TradesOmit<ExtArgs> | null
    /**
     * The data used to update Trades.
     */
    data: XOR<TradesUpdateManyMutationInput, TradesUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradesWhereInput
    /**
     * Limit how many Trades to update.
     */
    limit?: number
  }

  /**
   * Trades upsert
   */
  export type TradesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trades
     */
    select?: TradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trades
     */
    omit?: TradesOmit<ExtArgs> | null
    /**
     * The filter to search for the Trades to update in case it exists.
     */
    where: TradesWhereUniqueInput
    /**
     * In case the Trades found by the `where` argument doesn't exist, create a new Trades with this data.
     */
    create: XOR<TradesCreateInput, TradesUncheckedCreateInput>
    /**
     * In case the Trades was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradesUpdateInput, TradesUncheckedUpdateInput>
  }

  /**
   * Trades delete
   */
  export type TradesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trades
     */
    select?: TradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trades
     */
    omit?: TradesOmit<ExtArgs> | null
    /**
     * Filter which Trades to delete.
     */
    where: TradesWhereUniqueInput
  }

  /**
   * Trades deleteMany
   */
  export type TradesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trades to delete
     */
    where?: TradesWhereInput
    /**
     * Limit how many Trades to delete.
     */
    limit?: number
  }

  /**
   * Trades without action
   */
  export type TradesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trades
     */
    select?: TradesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trades
     */
    omit?: TradesOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    name: string | null
    email: string | null
    password: string | null
    pin: string | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    name: string | null
    email: string | null
    password: string | null
    pin: string | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    name: number
    email: number
    password: number
    pin: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    name?: true
    email?: true
    password?: true
    pin?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    name?: true
    email?: true
    password?: true
    pin?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    name?: true
    email?: true
    password?: true
    pin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    name: string
    email: string
    password: string
    pin: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    pin?: boolean
    balance?: boolean | User$balanceArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    pin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    pin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    pin?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "name" | "email" | "password" | "pin", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    balance?: boolean | User$balanceArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      balance: Prisma.$BalancesPayload<ExtArgs>[]
      transactions: Prisma.$LedgerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      name: string
      email: string
      password: string
      pin: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    balance<T extends User$balanceArgs<ExtArgs> = {}>(args?: Subset<T, User$balanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly pin: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.balance
   */
  export type User$balanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balances
     */
    select?: BalancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balances
     */
    omit?: BalancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalancesInclude<ExtArgs> | null
    where?: BalancesWhereInput
    orderBy?: BalancesOrderByWithRelationInput | BalancesOrderByWithRelationInput[]
    cursor?: BalancesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BalancesScalarFieldEnum | BalancesScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    where?: LedgerWhereInput
    orderBy?: LedgerOrderByWithRelationInput | LedgerOrderByWithRelationInput[]
    cursor?: LedgerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LedgerScalarFieldEnum | LedgerScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Balances
   */

  export type AggregateBalances = {
    _count: BalancesCountAggregateOutputType | null
    _avg: BalancesAvgAggregateOutputType | null
    _sum: BalancesSumAggregateOutputType | null
    _min: BalancesMinAggregateOutputType | null
    _max: BalancesMaxAggregateOutputType | null
  }

  export type BalancesAvgAggregateOutputType = {
    freeBalance: number | null
    lockedBalance: number | null
  }

  export type BalancesSumAggregateOutputType = {
    freeBalance: bigint | null
    lockedBalance: bigint | null
  }

  export type BalancesMinAggregateOutputType = {
    balanceId: string | null
    userId: string | null
    asset: string | null
    freeBalance: bigint | null
    lockedBalance: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BalancesMaxAggregateOutputType = {
    balanceId: string | null
    userId: string | null
    asset: string | null
    freeBalance: bigint | null
    lockedBalance: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BalancesCountAggregateOutputType = {
    balanceId: number
    userId: number
    asset: number
    freeBalance: number
    lockedBalance: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BalancesAvgAggregateInputType = {
    freeBalance?: true
    lockedBalance?: true
  }

  export type BalancesSumAggregateInputType = {
    freeBalance?: true
    lockedBalance?: true
  }

  export type BalancesMinAggregateInputType = {
    balanceId?: true
    userId?: true
    asset?: true
    freeBalance?: true
    lockedBalance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BalancesMaxAggregateInputType = {
    balanceId?: true
    userId?: true
    asset?: true
    freeBalance?: true
    lockedBalance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BalancesCountAggregateInputType = {
    balanceId?: true
    userId?: true
    asset?: true
    freeBalance?: true
    lockedBalance?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BalancesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Balances to aggregate.
     */
    where?: BalancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalancesOrderByWithRelationInput | BalancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BalancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Balances
    **/
    _count?: true | BalancesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BalancesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BalancesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BalancesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BalancesMaxAggregateInputType
  }

  export type GetBalancesAggregateType<T extends BalancesAggregateArgs> = {
        [P in keyof T & keyof AggregateBalances]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBalances[P]>
      : GetScalarType<T[P], AggregateBalances[P]>
  }




  export type BalancesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BalancesWhereInput
    orderBy?: BalancesOrderByWithAggregationInput | BalancesOrderByWithAggregationInput[]
    by: BalancesScalarFieldEnum[] | BalancesScalarFieldEnum
    having?: BalancesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BalancesCountAggregateInputType | true
    _avg?: BalancesAvgAggregateInputType
    _sum?: BalancesSumAggregateInputType
    _min?: BalancesMinAggregateInputType
    _max?: BalancesMaxAggregateInputType
  }

  export type BalancesGroupByOutputType = {
    balanceId: string
    userId: string
    asset: string
    freeBalance: bigint
    lockedBalance: bigint
    createdAt: Date
    updatedAt: Date
    _count: BalancesCountAggregateOutputType | null
    _avg: BalancesAvgAggregateOutputType | null
    _sum: BalancesSumAggregateOutputType | null
    _min: BalancesMinAggregateOutputType | null
    _max: BalancesMaxAggregateOutputType | null
  }

  type GetBalancesGroupByPayload<T extends BalancesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BalancesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BalancesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BalancesGroupByOutputType[P]>
            : GetScalarType<T[P], BalancesGroupByOutputType[P]>
        }
      >
    >


  export type BalancesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    balanceId?: boolean
    userId?: boolean
    asset?: boolean
    freeBalance?: boolean
    lockedBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ledgers?: boolean | Balances$ledgersArgs<ExtArgs>
    _count?: boolean | BalancesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balances"]>

  export type BalancesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    balanceId?: boolean
    userId?: boolean
    asset?: boolean
    freeBalance?: boolean
    lockedBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balances"]>

  export type BalancesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    balanceId?: boolean
    userId?: boolean
    asset?: boolean
    freeBalance?: boolean
    lockedBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balances"]>

  export type BalancesSelectScalar = {
    balanceId?: boolean
    userId?: boolean
    asset?: boolean
    freeBalance?: boolean
    lockedBalance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BalancesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"balanceId" | "userId" | "asset" | "freeBalance" | "lockedBalance" | "createdAt" | "updatedAt", ExtArgs["result"]["balances"]>
  export type BalancesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ledgers?: boolean | Balances$ledgersArgs<ExtArgs>
    _count?: boolean | BalancesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BalancesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BalancesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BalancesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Balances"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ledgers: Prisma.$LedgerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      balanceId: string
      userId: string
      asset: string
      freeBalance: bigint
      lockedBalance: bigint
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["balances"]>
    composites: {}
  }

  type BalancesGetPayload<S extends boolean | null | undefined | BalancesDefaultArgs> = $Result.GetResult<Prisma.$BalancesPayload, S>

  type BalancesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BalancesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BalancesCountAggregateInputType | true
    }

  export interface BalancesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Balances'], meta: { name: 'Balances' } }
    /**
     * Find zero or one Balances that matches the filter.
     * @param {BalancesFindUniqueArgs} args - Arguments to find a Balances
     * @example
     * // Get one Balances
     * const balances = await prisma.balances.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BalancesFindUniqueArgs>(args: SelectSubset<T, BalancesFindUniqueArgs<ExtArgs>>): Prisma__BalancesClient<$Result.GetResult<Prisma.$BalancesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Balances that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BalancesFindUniqueOrThrowArgs} args - Arguments to find a Balances
     * @example
     * // Get one Balances
     * const balances = await prisma.balances.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BalancesFindUniqueOrThrowArgs>(args: SelectSubset<T, BalancesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BalancesClient<$Result.GetResult<Prisma.$BalancesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalancesFindFirstArgs} args - Arguments to find a Balances
     * @example
     * // Get one Balances
     * const balances = await prisma.balances.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BalancesFindFirstArgs>(args?: SelectSubset<T, BalancesFindFirstArgs<ExtArgs>>): Prisma__BalancesClient<$Result.GetResult<Prisma.$BalancesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balances that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalancesFindFirstOrThrowArgs} args - Arguments to find a Balances
     * @example
     * // Get one Balances
     * const balances = await prisma.balances.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BalancesFindFirstOrThrowArgs>(args?: SelectSubset<T, BalancesFindFirstOrThrowArgs<ExtArgs>>): Prisma__BalancesClient<$Result.GetResult<Prisma.$BalancesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Balances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalancesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Balances
     * const balances = await prisma.balances.findMany()
     * 
     * // Get first 10 Balances
     * const balances = await prisma.balances.findMany({ take: 10 })
     * 
     * // Only select the `balanceId`
     * const balancesWithBalanceIdOnly = await prisma.balances.findMany({ select: { balanceId: true } })
     * 
     */
    findMany<T extends BalancesFindManyArgs>(args?: SelectSubset<T, BalancesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Balances.
     * @param {BalancesCreateArgs} args - Arguments to create a Balances.
     * @example
     * // Create one Balances
     * const Balances = await prisma.balances.create({
     *   data: {
     *     // ... data to create a Balances
     *   }
     * })
     * 
     */
    create<T extends BalancesCreateArgs>(args: SelectSubset<T, BalancesCreateArgs<ExtArgs>>): Prisma__BalancesClient<$Result.GetResult<Prisma.$BalancesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Balances.
     * @param {BalancesCreateManyArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balances = await prisma.balances.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BalancesCreateManyArgs>(args?: SelectSubset<T, BalancesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Balances and returns the data saved in the database.
     * @param {BalancesCreateManyAndReturnArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balances = await prisma.balances.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Balances and only return the `balanceId`
     * const balancesWithBalanceIdOnly = await prisma.balances.createManyAndReturn({
     *   select: { balanceId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BalancesCreateManyAndReturnArgs>(args?: SelectSubset<T, BalancesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Balances.
     * @param {BalancesDeleteArgs} args - Arguments to delete one Balances.
     * @example
     * // Delete one Balances
     * const Balances = await prisma.balances.delete({
     *   where: {
     *     // ... filter to delete one Balances
     *   }
     * })
     * 
     */
    delete<T extends BalancesDeleteArgs>(args: SelectSubset<T, BalancesDeleteArgs<ExtArgs>>): Prisma__BalancesClient<$Result.GetResult<Prisma.$BalancesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Balances.
     * @param {BalancesUpdateArgs} args - Arguments to update one Balances.
     * @example
     * // Update one Balances
     * const balances = await prisma.balances.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BalancesUpdateArgs>(args: SelectSubset<T, BalancesUpdateArgs<ExtArgs>>): Prisma__BalancesClient<$Result.GetResult<Prisma.$BalancesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Balances.
     * @param {BalancesDeleteManyArgs} args - Arguments to filter Balances to delete.
     * @example
     * // Delete a few Balances
     * const { count } = await prisma.balances.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BalancesDeleteManyArgs>(args?: SelectSubset<T, BalancesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalancesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Balances
     * const balances = await prisma.balances.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BalancesUpdateManyArgs>(args: SelectSubset<T, BalancesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances and returns the data updated in the database.
     * @param {BalancesUpdateManyAndReturnArgs} args - Arguments to update many Balances.
     * @example
     * // Update many Balances
     * const balances = await prisma.balances.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Balances and only return the `balanceId`
     * const balancesWithBalanceIdOnly = await prisma.balances.updateManyAndReturn({
     *   select: { balanceId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BalancesUpdateManyAndReturnArgs>(args: SelectSubset<T, BalancesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Balances.
     * @param {BalancesUpsertArgs} args - Arguments to update or create a Balances.
     * @example
     * // Update or create a Balances
     * const balances = await prisma.balances.upsert({
     *   create: {
     *     // ... data to create a Balances
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Balances we want to update
     *   }
     * })
     */
    upsert<T extends BalancesUpsertArgs>(args: SelectSubset<T, BalancesUpsertArgs<ExtArgs>>): Prisma__BalancesClient<$Result.GetResult<Prisma.$BalancesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalancesCountArgs} args - Arguments to filter Balances to count.
     * @example
     * // Count the number of Balances
     * const count = await prisma.balances.count({
     *   where: {
     *     // ... the filter for the Balances we want to count
     *   }
     * })
    **/
    count<T extends BalancesCountArgs>(
      args?: Subset<T, BalancesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BalancesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalancesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BalancesAggregateArgs>(args: Subset<T, BalancesAggregateArgs>): Prisma.PrismaPromise<GetBalancesAggregateType<T>>

    /**
     * Group by Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalancesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BalancesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BalancesGroupByArgs['orderBy'] }
        : { orderBy?: BalancesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BalancesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBalancesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Balances model
   */
  readonly fields: BalancesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Balances.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BalancesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ledgers<T extends Balances$ledgersArgs<ExtArgs> = {}>(args?: Subset<T, Balances$ledgersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Balances model
   */
  interface BalancesFieldRefs {
    readonly balanceId: FieldRef<"Balances", 'String'>
    readonly userId: FieldRef<"Balances", 'String'>
    readonly asset: FieldRef<"Balances", 'String'>
    readonly freeBalance: FieldRef<"Balances", 'BigInt'>
    readonly lockedBalance: FieldRef<"Balances", 'BigInt'>
    readonly createdAt: FieldRef<"Balances", 'DateTime'>
    readonly updatedAt: FieldRef<"Balances", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Balances findUnique
   */
  export type BalancesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balances
     */
    select?: BalancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balances
     */
    omit?: BalancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalancesInclude<ExtArgs> | null
    /**
     * Filter, which Balances to fetch.
     */
    where: BalancesWhereUniqueInput
  }

  /**
   * Balances findUniqueOrThrow
   */
  export type BalancesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balances
     */
    select?: BalancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balances
     */
    omit?: BalancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalancesInclude<ExtArgs> | null
    /**
     * Filter, which Balances to fetch.
     */
    where: BalancesWhereUniqueInput
  }

  /**
   * Balances findFirst
   */
  export type BalancesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balances
     */
    select?: BalancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balances
     */
    omit?: BalancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalancesInclude<ExtArgs> | null
    /**
     * Filter, which Balances to fetch.
     */
    where?: BalancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalancesOrderByWithRelationInput | BalancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balances.
     */
    cursor?: BalancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balances.
     */
    distinct?: BalancesScalarFieldEnum | BalancesScalarFieldEnum[]
  }

  /**
   * Balances findFirstOrThrow
   */
  export type BalancesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balances
     */
    select?: BalancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balances
     */
    omit?: BalancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalancesInclude<ExtArgs> | null
    /**
     * Filter, which Balances to fetch.
     */
    where?: BalancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalancesOrderByWithRelationInput | BalancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balances.
     */
    cursor?: BalancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balances.
     */
    distinct?: BalancesScalarFieldEnum | BalancesScalarFieldEnum[]
  }

  /**
   * Balances findMany
   */
  export type BalancesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balances
     */
    select?: BalancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balances
     */
    omit?: BalancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalancesInclude<ExtArgs> | null
    /**
     * Filter, which Balances to fetch.
     */
    where?: BalancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalancesOrderByWithRelationInput | BalancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Balances.
     */
    cursor?: BalancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    distinct?: BalancesScalarFieldEnum | BalancesScalarFieldEnum[]
  }

  /**
   * Balances create
   */
  export type BalancesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balances
     */
    select?: BalancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balances
     */
    omit?: BalancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalancesInclude<ExtArgs> | null
    /**
     * The data needed to create a Balances.
     */
    data: XOR<BalancesCreateInput, BalancesUncheckedCreateInput>
  }

  /**
   * Balances createMany
   */
  export type BalancesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Balances.
     */
    data: BalancesCreateManyInput | BalancesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Balances createManyAndReturn
   */
  export type BalancesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balances
     */
    select?: BalancesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Balances
     */
    omit?: BalancesOmit<ExtArgs> | null
    /**
     * The data used to create many Balances.
     */
    data: BalancesCreateManyInput | BalancesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalancesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Balances update
   */
  export type BalancesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balances
     */
    select?: BalancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balances
     */
    omit?: BalancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalancesInclude<ExtArgs> | null
    /**
     * The data needed to update a Balances.
     */
    data: XOR<BalancesUpdateInput, BalancesUncheckedUpdateInput>
    /**
     * Choose, which Balances to update.
     */
    where: BalancesWhereUniqueInput
  }

  /**
   * Balances updateMany
   */
  export type BalancesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Balances.
     */
    data: XOR<BalancesUpdateManyMutationInput, BalancesUncheckedUpdateManyInput>
    /**
     * Filter which Balances to update
     */
    where?: BalancesWhereInput
    /**
     * Limit how many Balances to update.
     */
    limit?: number
  }

  /**
   * Balances updateManyAndReturn
   */
  export type BalancesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balances
     */
    select?: BalancesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Balances
     */
    omit?: BalancesOmit<ExtArgs> | null
    /**
     * The data used to update Balances.
     */
    data: XOR<BalancesUpdateManyMutationInput, BalancesUncheckedUpdateManyInput>
    /**
     * Filter which Balances to update
     */
    where?: BalancesWhereInput
    /**
     * Limit how many Balances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalancesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Balances upsert
   */
  export type BalancesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balances
     */
    select?: BalancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balances
     */
    omit?: BalancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalancesInclude<ExtArgs> | null
    /**
     * The filter to search for the Balances to update in case it exists.
     */
    where: BalancesWhereUniqueInput
    /**
     * In case the Balances found by the `where` argument doesn't exist, create a new Balances with this data.
     */
    create: XOR<BalancesCreateInput, BalancesUncheckedCreateInput>
    /**
     * In case the Balances was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BalancesUpdateInput, BalancesUncheckedUpdateInput>
  }

  /**
   * Balances delete
   */
  export type BalancesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balances
     */
    select?: BalancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balances
     */
    omit?: BalancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalancesInclude<ExtArgs> | null
    /**
     * Filter which Balances to delete.
     */
    where: BalancesWhereUniqueInput
  }

  /**
   * Balances deleteMany
   */
  export type BalancesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Balances to delete
     */
    where?: BalancesWhereInput
    /**
     * Limit how many Balances to delete.
     */
    limit?: number
  }

  /**
   * Balances.ledgers
   */
  export type Balances$ledgersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    where?: LedgerWhereInput
    orderBy?: LedgerOrderByWithRelationInput | LedgerOrderByWithRelationInput[]
    cursor?: LedgerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LedgerScalarFieldEnum | LedgerScalarFieldEnum[]
  }

  /**
   * Balances without action
   */
  export type BalancesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balances
     */
    select?: BalancesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balances
     */
    omit?: BalancesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalancesInclude<ExtArgs> | null
  }


  /**
   * Model Ledger
   */

  export type AggregateLedger = {
    _count: LedgerCountAggregateOutputType | null
    _avg: LedgerAvgAggregateOutputType | null
    _sum: LedgerSumAggregateOutputType | null
    _min: LedgerMinAggregateOutputType | null
    _max: LedgerMaxAggregateOutputType | null
  }

  export type LedgerAvgAggregateOutputType = {
    amount: number | null
  }

  export type LedgerSumAggregateOutputType = {
    amount: bigint | null
  }

  export type LedgerMinAggregateOutputType = {
    ledgerId: string | null
    balanceId: string | null
    userId: string | null
    type: $Enums.LedgerType | null
    symbol: string | null
    createdAt: Date | null
    amount: bigint | null
    reason: $Enums.LedgerReason | null
  }

  export type LedgerMaxAggregateOutputType = {
    ledgerId: string | null
    balanceId: string | null
    userId: string | null
    type: $Enums.LedgerType | null
    symbol: string | null
    createdAt: Date | null
    amount: bigint | null
    reason: $Enums.LedgerReason | null
  }

  export type LedgerCountAggregateOutputType = {
    ledgerId: number
    balanceId: number
    userId: number
    type: number
    symbol: number
    createdAt: number
    amount: number
    reason: number
    _all: number
  }


  export type LedgerAvgAggregateInputType = {
    amount?: true
  }

  export type LedgerSumAggregateInputType = {
    amount?: true
  }

  export type LedgerMinAggregateInputType = {
    ledgerId?: true
    balanceId?: true
    userId?: true
    type?: true
    symbol?: true
    createdAt?: true
    amount?: true
    reason?: true
  }

  export type LedgerMaxAggregateInputType = {
    ledgerId?: true
    balanceId?: true
    userId?: true
    type?: true
    symbol?: true
    createdAt?: true
    amount?: true
    reason?: true
  }

  export type LedgerCountAggregateInputType = {
    ledgerId?: true
    balanceId?: true
    userId?: true
    type?: true
    symbol?: true
    createdAt?: true
    amount?: true
    reason?: true
    _all?: true
  }

  export type LedgerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ledger to aggregate.
     */
    where?: LedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ledgers to fetch.
     */
    orderBy?: LedgerOrderByWithRelationInput | LedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ledgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ledgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ledgers
    **/
    _count?: true | LedgerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LedgerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LedgerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LedgerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LedgerMaxAggregateInputType
  }

  export type GetLedgerAggregateType<T extends LedgerAggregateArgs> = {
        [P in keyof T & keyof AggregateLedger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLedger[P]>
      : GetScalarType<T[P], AggregateLedger[P]>
  }




  export type LedgerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerWhereInput
    orderBy?: LedgerOrderByWithAggregationInput | LedgerOrderByWithAggregationInput[]
    by: LedgerScalarFieldEnum[] | LedgerScalarFieldEnum
    having?: LedgerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LedgerCountAggregateInputType | true
    _avg?: LedgerAvgAggregateInputType
    _sum?: LedgerSumAggregateInputType
    _min?: LedgerMinAggregateInputType
    _max?: LedgerMaxAggregateInputType
  }

  export type LedgerGroupByOutputType = {
    ledgerId: string
    balanceId: string
    userId: string
    type: $Enums.LedgerType
    symbol: string
    createdAt: Date
    amount: bigint
    reason: $Enums.LedgerReason
    _count: LedgerCountAggregateOutputType | null
    _avg: LedgerAvgAggregateOutputType | null
    _sum: LedgerSumAggregateOutputType | null
    _min: LedgerMinAggregateOutputType | null
    _max: LedgerMaxAggregateOutputType | null
  }

  type GetLedgerGroupByPayload<T extends LedgerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LedgerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LedgerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LedgerGroupByOutputType[P]>
            : GetScalarType<T[P], LedgerGroupByOutputType[P]>
        }
      >
    >


  export type LedgerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ledgerId?: boolean
    balanceId?: boolean
    userId?: boolean
    type?: boolean
    symbol?: boolean
    createdAt?: boolean
    amount?: boolean
    reason?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    balance?: boolean | BalancesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledger"]>

  export type LedgerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ledgerId?: boolean
    balanceId?: boolean
    userId?: boolean
    type?: boolean
    symbol?: boolean
    createdAt?: boolean
    amount?: boolean
    reason?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    balance?: boolean | BalancesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledger"]>

  export type LedgerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ledgerId?: boolean
    balanceId?: boolean
    userId?: boolean
    type?: boolean
    symbol?: boolean
    createdAt?: boolean
    amount?: boolean
    reason?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    balance?: boolean | BalancesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ledger"]>

  export type LedgerSelectScalar = {
    ledgerId?: boolean
    balanceId?: boolean
    userId?: boolean
    type?: boolean
    symbol?: boolean
    createdAt?: boolean
    amount?: boolean
    reason?: boolean
  }

  export type LedgerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ledgerId" | "balanceId" | "userId" | "type" | "symbol" | "createdAt" | "amount" | "reason", ExtArgs["result"]["ledger"]>
  export type LedgerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    balance?: boolean | BalancesDefaultArgs<ExtArgs>
  }
  export type LedgerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    balance?: boolean | BalancesDefaultArgs<ExtArgs>
  }
  export type LedgerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    balance?: boolean | BalancesDefaultArgs<ExtArgs>
  }

  export type $LedgerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ledger"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      balance: Prisma.$BalancesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ledgerId: string
      balanceId: string
      userId: string
      type: $Enums.LedgerType
      symbol: string
      createdAt: Date
      amount: bigint
      reason: $Enums.LedgerReason
    }, ExtArgs["result"]["ledger"]>
    composites: {}
  }

  type LedgerGetPayload<S extends boolean | null | undefined | LedgerDefaultArgs> = $Result.GetResult<Prisma.$LedgerPayload, S>

  type LedgerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LedgerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LedgerCountAggregateInputType | true
    }

  export interface LedgerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ledger'], meta: { name: 'Ledger' } }
    /**
     * Find zero or one Ledger that matches the filter.
     * @param {LedgerFindUniqueArgs} args - Arguments to find a Ledger
     * @example
     * // Get one Ledger
     * const ledger = await prisma.ledger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LedgerFindUniqueArgs>(args: SelectSubset<T, LedgerFindUniqueArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ledger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LedgerFindUniqueOrThrowArgs} args - Arguments to find a Ledger
     * @example
     * // Get one Ledger
     * const ledger = await prisma.ledger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LedgerFindUniqueOrThrowArgs>(args: SelectSubset<T, LedgerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ledger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerFindFirstArgs} args - Arguments to find a Ledger
     * @example
     * // Get one Ledger
     * const ledger = await prisma.ledger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LedgerFindFirstArgs>(args?: SelectSubset<T, LedgerFindFirstArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ledger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerFindFirstOrThrowArgs} args - Arguments to find a Ledger
     * @example
     * // Get one Ledger
     * const ledger = await prisma.ledger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LedgerFindFirstOrThrowArgs>(args?: SelectSubset<T, LedgerFindFirstOrThrowArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ledgers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ledgers
     * const ledgers = await prisma.ledger.findMany()
     * 
     * // Get first 10 Ledgers
     * const ledgers = await prisma.ledger.findMany({ take: 10 })
     * 
     * // Only select the `ledgerId`
     * const ledgerWithLedgerIdOnly = await prisma.ledger.findMany({ select: { ledgerId: true } })
     * 
     */
    findMany<T extends LedgerFindManyArgs>(args?: SelectSubset<T, LedgerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ledger.
     * @param {LedgerCreateArgs} args - Arguments to create a Ledger.
     * @example
     * // Create one Ledger
     * const Ledger = await prisma.ledger.create({
     *   data: {
     *     // ... data to create a Ledger
     *   }
     * })
     * 
     */
    create<T extends LedgerCreateArgs>(args: SelectSubset<T, LedgerCreateArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ledgers.
     * @param {LedgerCreateManyArgs} args - Arguments to create many Ledgers.
     * @example
     * // Create many Ledgers
     * const ledger = await prisma.ledger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LedgerCreateManyArgs>(args?: SelectSubset<T, LedgerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ledgers and returns the data saved in the database.
     * @param {LedgerCreateManyAndReturnArgs} args - Arguments to create many Ledgers.
     * @example
     * // Create many Ledgers
     * const ledger = await prisma.ledger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ledgers and only return the `ledgerId`
     * const ledgerWithLedgerIdOnly = await prisma.ledger.createManyAndReturn({
     *   select: { ledgerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LedgerCreateManyAndReturnArgs>(args?: SelectSubset<T, LedgerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ledger.
     * @param {LedgerDeleteArgs} args - Arguments to delete one Ledger.
     * @example
     * // Delete one Ledger
     * const Ledger = await prisma.ledger.delete({
     *   where: {
     *     // ... filter to delete one Ledger
     *   }
     * })
     * 
     */
    delete<T extends LedgerDeleteArgs>(args: SelectSubset<T, LedgerDeleteArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ledger.
     * @param {LedgerUpdateArgs} args - Arguments to update one Ledger.
     * @example
     * // Update one Ledger
     * const ledger = await prisma.ledger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LedgerUpdateArgs>(args: SelectSubset<T, LedgerUpdateArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ledgers.
     * @param {LedgerDeleteManyArgs} args - Arguments to filter Ledgers to delete.
     * @example
     * // Delete a few Ledgers
     * const { count } = await prisma.ledger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LedgerDeleteManyArgs>(args?: SelectSubset<T, LedgerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ledgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ledgers
     * const ledger = await prisma.ledger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LedgerUpdateManyArgs>(args: SelectSubset<T, LedgerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ledgers and returns the data updated in the database.
     * @param {LedgerUpdateManyAndReturnArgs} args - Arguments to update many Ledgers.
     * @example
     * // Update many Ledgers
     * const ledger = await prisma.ledger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ledgers and only return the `ledgerId`
     * const ledgerWithLedgerIdOnly = await prisma.ledger.updateManyAndReturn({
     *   select: { ledgerId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LedgerUpdateManyAndReturnArgs>(args: SelectSubset<T, LedgerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ledger.
     * @param {LedgerUpsertArgs} args - Arguments to update or create a Ledger.
     * @example
     * // Update or create a Ledger
     * const ledger = await prisma.ledger.upsert({
     *   create: {
     *     // ... data to create a Ledger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ledger we want to update
     *   }
     * })
     */
    upsert<T extends LedgerUpsertArgs>(args: SelectSubset<T, LedgerUpsertArgs<ExtArgs>>): Prisma__LedgerClient<$Result.GetResult<Prisma.$LedgerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ledgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerCountArgs} args - Arguments to filter Ledgers to count.
     * @example
     * // Count the number of Ledgers
     * const count = await prisma.ledger.count({
     *   where: {
     *     // ... the filter for the Ledgers we want to count
     *   }
     * })
    **/
    count<T extends LedgerCountArgs>(
      args?: Subset<T, LedgerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LedgerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ledger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LedgerAggregateArgs>(args: Subset<T, LedgerAggregateArgs>): Prisma.PrismaPromise<GetLedgerAggregateType<T>>

    /**
     * Group by Ledger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LedgerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LedgerGroupByArgs['orderBy'] }
        : { orderBy?: LedgerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LedgerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLedgerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ledger model
   */
  readonly fields: LedgerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ledger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LedgerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    balance<T extends BalancesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BalancesDefaultArgs<ExtArgs>>): Prisma__BalancesClient<$Result.GetResult<Prisma.$BalancesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ledger model
   */
  interface LedgerFieldRefs {
    readonly ledgerId: FieldRef<"Ledger", 'String'>
    readonly balanceId: FieldRef<"Ledger", 'String'>
    readonly userId: FieldRef<"Ledger", 'String'>
    readonly type: FieldRef<"Ledger", 'LedgerType'>
    readonly symbol: FieldRef<"Ledger", 'String'>
    readonly createdAt: FieldRef<"Ledger", 'DateTime'>
    readonly amount: FieldRef<"Ledger", 'BigInt'>
    readonly reason: FieldRef<"Ledger", 'LedgerReason'>
  }
    

  // Custom InputTypes
  /**
   * Ledger findUnique
   */
  export type LedgerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * Filter, which Ledger to fetch.
     */
    where: LedgerWhereUniqueInput
  }

  /**
   * Ledger findUniqueOrThrow
   */
  export type LedgerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * Filter, which Ledger to fetch.
     */
    where: LedgerWhereUniqueInput
  }

  /**
   * Ledger findFirst
   */
  export type LedgerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * Filter, which Ledger to fetch.
     */
    where?: LedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ledgers to fetch.
     */
    orderBy?: LedgerOrderByWithRelationInput | LedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ledgers.
     */
    cursor?: LedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ledgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ledgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ledgers.
     */
    distinct?: LedgerScalarFieldEnum | LedgerScalarFieldEnum[]
  }

  /**
   * Ledger findFirstOrThrow
   */
  export type LedgerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * Filter, which Ledger to fetch.
     */
    where?: LedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ledgers to fetch.
     */
    orderBy?: LedgerOrderByWithRelationInput | LedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ledgers.
     */
    cursor?: LedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ledgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ledgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ledgers.
     */
    distinct?: LedgerScalarFieldEnum | LedgerScalarFieldEnum[]
  }

  /**
   * Ledger findMany
   */
  export type LedgerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * Filter, which Ledgers to fetch.
     */
    where?: LedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ledgers to fetch.
     */
    orderBy?: LedgerOrderByWithRelationInput | LedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ledgers.
     */
    cursor?: LedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ledgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ledgers.
     */
    skip?: number
    distinct?: LedgerScalarFieldEnum | LedgerScalarFieldEnum[]
  }

  /**
   * Ledger create
   */
  export type LedgerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * The data needed to create a Ledger.
     */
    data: XOR<LedgerCreateInput, LedgerUncheckedCreateInput>
  }

  /**
   * Ledger createMany
   */
  export type LedgerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ledgers.
     */
    data: LedgerCreateManyInput | LedgerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ledger createManyAndReturn
   */
  export type LedgerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * The data used to create many Ledgers.
     */
    data: LedgerCreateManyInput | LedgerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ledger update
   */
  export type LedgerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * The data needed to update a Ledger.
     */
    data: XOR<LedgerUpdateInput, LedgerUncheckedUpdateInput>
    /**
     * Choose, which Ledger to update.
     */
    where: LedgerWhereUniqueInput
  }

  /**
   * Ledger updateMany
   */
  export type LedgerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ledgers.
     */
    data: XOR<LedgerUpdateManyMutationInput, LedgerUncheckedUpdateManyInput>
    /**
     * Filter which Ledgers to update
     */
    where?: LedgerWhereInput
    /**
     * Limit how many Ledgers to update.
     */
    limit?: number
  }

  /**
   * Ledger updateManyAndReturn
   */
  export type LedgerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * The data used to update Ledgers.
     */
    data: XOR<LedgerUpdateManyMutationInput, LedgerUncheckedUpdateManyInput>
    /**
     * Filter which Ledgers to update
     */
    where?: LedgerWhereInput
    /**
     * Limit how many Ledgers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ledger upsert
   */
  export type LedgerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * The filter to search for the Ledger to update in case it exists.
     */
    where: LedgerWhereUniqueInput
    /**
     * In case the Ledger found by the `where` argument doesn't exist, create a new Ledger with this data.
     */
    create: XOR<LedgerCreateInput, LedgerUncheckedCreateInput>
    /**
     * In case the Ledger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LedgerUpdateInput, LedgerUncheckedUpdateInput>
  }

  /**
   * Ledger delete
   */
  export type LedgerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
    /**
     * Filter which Ledger to delete.
     */
    where: LedgerWhereUniqueInput
  }

  /**
   * Ledger deleteMany
   */
  export type LedgerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ledgers to delete
     */
    where?: LedgerWhereInput
    /**
     * Limit how many Ledgers to delete.
     */
    limit?: number
  }

  /**
   * Ledger without action
   */
  export type LedgerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ledger
     */
    select?: LedgerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ledger
     */
    omit?: LedgerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LedgerInclude<ExtArgs> | null
  }


  /**
   * Model Tickers
   */

  export type AggregateTickers = {
    _count: TickersCountAggregateOutputType | null
    _min: TickersMinAggregateOutputType | null
    _max: TickersMaxAggregateOutputType | null
  }

  export type TickersMinAggregateOutputType = {
    tickerId: string | null
    symbol: string | null
  }

  export type TickersMaxAggregateOutputType = {
    tickerId: string | null
    symbol: string | null
  }

  export type TickersCountAggregateOutputType = {
    tickerId: number
    symbol: number
    _all: number
  }


  export type TickersMinAggregateInputType = {
    tickerId?: true
    symbol?: true
  }

  export type TickersMaxAggregateInputType = {
    tickerId?: true
    symbol?: true
  }

  export type TickersCountAggregateInputType = {
    tickerId?: true
    symbol?: true
    _all?: true
  }

  export type TickersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickers to aggregate.
     */
    where?: TickersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickers to fetch.
     */
    orderBy?: TickersOrderByWithRelationInput | TickersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TickersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickers
    **/
    _count?: true | TickersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TickersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TickersMaxAggregateInputType
  }

  export type GetTickersAggregateType<T extends TickersAggregateArgs> = {
        [P in keyof T & keyof AggregateTickers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTickers[P]>
      : GetScalarType<T[P], AggregateTickers[P]>
  }




  export type TickersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TickersWhereInput
    orderBy?: TickersOrderByWithAggregationInput | TickersOrderByWithAggregationInput[]
    by: TickersScalarFieldEnum[] | TickersScalarFieldEnum
    having?: TickersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TickersCountAggregateInputType | true
    _min?: TickersMinAggregateInputType
    _max?: TickersMaxAggregateInputType
  }

  export type TickersGroupByOutputType = {
    tickerId: string
    symbol: string
    _count: TickersCountAggregateOutputType | null
    _min: TickersMinAggregateOutputType | null
    _max: TickersMaxAggregateOutputType | null
  }

  type GetTickersGroupByPayload<T extends TickersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TickersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TickersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TickersGroupByOutputType[P]>
            : GetScalarType<T[P], TickersGroupByOutputType[P]>
        }
      >
    >


  export type TickersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tickerId?: boolean
    symbol?: boolean
  }, ExtArgs["result"]["tickers"]>

  export type TickersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tickerId?: boolean
    symbol?: boolean
  }, ExtArgs["result"]["tickers"]>

  export type TickersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tickerId?: boolean
    symbol?: boolean
  }, ExtArgs["result"]["tickers"]>

  export type TickersSelectScalar = {
    tickerId?: boolean
    symbol?: boolean
  }

  export type TickersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tickerId" | "symbol", ExtArgs["result"]["tickers"]>

  export type $TickersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tickers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      tickerId: string
      symbol: string
    }, ExtArgs["result"]["tickers"]>
    composites: {}
  }

  type TickersGetPayload<S extends boolean | null | undefined | TickersDefaultArgs> = $Result.GetResult<Prisma.$TickersPayload, S>

  type TickersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TickersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TickersCountAggregateInputType | true
    }

  export interface TickersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tickers'], meta: { name: 'Tickers' } }
    /**
     * Find zero or one Tickers that matches the filter.
     * @param {TickersFindUniqueArgs} args - Arguments to find a Tickers
     * @example
     * // Get one Tickers
     * const tickers = await prisma.tickers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TickersFindUniqueArgs>(args: SelectSubset<T, TickersFindUniqueArgs<ExtArgs>>): Prisma__TickersClient<$Result.GetResult<Prisma.$TickersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tickers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TickersFindUniqueOrThrowArgs} args - Arguments to find a Tickers
     * @example
     * // Get one Tickers
     * const tickers = await prisma.tickers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TickersFindUniqueOrThrowArgs>(args: SelectSubset<T, TickersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TickersClient<$Result.GetResult<Prisma.$TickersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickersFindFirstArgs} args - Arguments to find a Tickers
     * @example
     * // Get one Tickers
     * const tickers = await prisma.tickers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TickersFindFirstArgs>(args?: SelectSubset<T, TickersFindFirstArgs<ExtArgs>>): Prisma__TickersClient<$Result.GetResult<Prisma.$TickersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tickers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickersFindFirstOrThrowArgs} args - Arguments to find a Tickers
     * @example
     * // Get one Tickers
     * const tickers = await prisma.tickers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TickersFindFirstOrThrowArgs>(args?: SelectSubset<T, TickersFindFirstOrThrowArgs<ExtArgs>>): Prisma__TickersClient<$Result.GetResult<Prisma.$TickersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickers
     * const tickers = await prisma.tickers.findMany()
     * 
     * // Get first 10 Tickers
     * const tickers = await prisma.tickers.findMany({ take: 10 })
     * 
     * // Only select the `tickerId`
     * const tickersWithTickerIdOnly = await prisma.tickers.findMany({ select: { tickerId: true } })
     * 
     */
    findMany<T extends TickersFindManyArgs>(args?: SelectSubset<T, TickersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TickersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tickers.
     * @param {TickersCreateArgs} args - Arguments to create a Tickers.
     * @example
     * // Create one Tickers
     * const Tickers = await prisma.tickers.create({
     *   data: {
     *     // ... data to create a Tickers
     *   }
     * })
     * 
     */
    create<T extends TickersCreateArgs>(args: SelectSubset<T, TickersCreateArgs<ExtArgs>>): Prisma__TickersClient<$Result.GetResult<Prisma.$TickersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickers.
     * @param {TickersCreateManyArgs} args - Arguments to create many Tickers.
     * @example
     * // Create many Tickers
     * const tickers = await prisma.tickers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TickersCreateManyArgs>(args?: SelectSubset<T, TickersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickers and returns the data saved in the database.
     * @param {TickersCreateManyAndReturnArgs} args - Arguments to create many Tickers.
     * @example
     * // Create many Tickers
     * const tickers = await prisma.tickers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickers and only return the `tickerId`
     * const tickersWithTickerIdOnly = await prisma.tickers.createManyAndReturn({
     *   select: { tickerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TickersCreateManyAndReturnArgs>(args?: SelectSubset<T, TickersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TickersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tickers.
     * @param {TickersDeleteArgs} args - Arguments to delete one Tickers.
     * @example
     * // Delete one Tickers
     * const Tickers = await prisma.tickers.delete({
     *   where: {
     *     // ... filter to delete one Tickers
     *   }
     * })
     * 
     */
    delete<T extends TickersDeleteArgs>(args: SelectSubset<T, TickersDeleteArgs<ExtArgs>>): Prisma__TickersClient<$Result.GetResult<Prisma.$TickersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tickers.
     * @param {TickersUpdateArgs} args - Arguments to update one Tickers.
     * @example
     * // Update one Tickers
     * const tickers = await prisma.tickers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TickersUpdateArgs>(args: SelectSubset<T, TickersUpdateArgs<ExtArgs>>): Prisma__TickersClient<$Result.GetResult<Prisma.$TickersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickers.
     * @param {TickersDeleteManyArgs} args - Arguments to filter Tickers to delete.
     * @example
     * // Delete a few Tickers
     * const { count } = await prisma.tickers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TickersDeleteManyArgs>(args?: SelectSubset<T, TickersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickers
     * const tickers = await prisma.tickers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TickersUpdateManyArgs>(args: SelectSubset<T, TickersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickers and returns the data updated in the database.
     * @param {TickersUpdateManyAndReturnArgs} args - Arguments to update many Tickers.
     * @example
     * // Update many Tickers
     * const tickers = await prisma.tickers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickers and only return the `tickerId`
     * const tickersWithTickerIdOnly = await prisma.tickers.updateManyAndReturn({
     *   select: { tickerId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TickersUpdateManyAndReturnArgs>(args: SelectSubset<T, TickersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TickersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tickers.
     * @param {TickersUpsertArgs} args - Arguments to update or create a Tickers.
     * @example
     * // Update or create a Tickers
     * const tickers = await prisma.tickers.upsert({
     *   create: {
     *     // ... data to create a Tickers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tickers we want to update
     *   }
     * })
     */
    upsert<T extends TickersUpsertArgs>(args: SelectSubset<T, TickersUpsertArgs<ExtArgs>>): Prisma__TickersClient<$Result.GetResult<Prisma.$TickersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickersCountArgs} args - Arguments to filter Tickers to count.
     * @example
     * // Count the number of Tickers
     * const count = await prisma.tickers.count({
     *   where: {
     *     // ... the filter for the Tickers we want to count
     *   }
     * })
    **/
    count<T extends TickersCountArgs>(
      args?: Subset<T, TickersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TickersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tickers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TickersAggregateArgs>(args: Subset<T, TickersAggregateArgs>): Prisma.PrismaPromise<GetTickersAggregateType<T>>

    /**
     * Group by Tickers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TickersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TickersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TickersGroupByArgs['orderBy'] }
        : { orderBy?: TickersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TickersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTickersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tickers model
   */
  readonly fields: TickersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tickers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TickersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tickers model
   */
  interface TickersFieldRefs {
    readonly tickerId: FieldRef<"Tickers", 'String'>
    readonly symbol: FieldRef<"Tickers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tickers findUnique
   */
  export type TickersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickers
     */
    select?: TickersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickers
     */
    omit?: TickersOmit<ExtArgs> | null
    /**
     * Filter, which Tickers to fetch.
     */
    where: TickersWhereUniqueInput
  }

  /**
   * Tickers findUniqueOrThrow
   */
  export type TickersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickers
     */
    select?: TickersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickers
     */
    omit?: TickersOmit<ExtArgs> | null
    /**
     * Filter, which Tickers to fetch.
     */
    where: TickersWhereUniqueInput
  }

  /**
   * Tickers findFirst
   */
  export type TickersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickers
     */
    select?: TickersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickers
     */
    omit?: TickersOmit<ExtArgs> | null
    /**
     * Filter, which Tickers to fetch.
     */
    where?: TickersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickers to fetch.
     */
    orderBy?: TickersOrderByWithRelationInput | TickersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickers.
     */
    cursor?: TickersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickers.
     */
    distinct?: TickersScalarFieldEnum | TickersScalarFieldEnum[]
  }

  /**
   * Tickers findFirstOrThrow
   */
  export type TickersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickers
     */
    select?: TickersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickers
     */
    omit?: TickersOmit<ExtArgs> | null
    /**
     * Filter, which Tickers to fetch.
     */
    where?: TickersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickers to fetch.
     */
    orderBy?: TickersOrderByWithRelationInput | TickersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickers.
     */
    cursor?: TickersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickers.
     */
    distinct?: TickersScalarFieldEnum | TickersScalarFieldEnum[]
  }

  /**
   * Tickers findMany
   */
  export type TickersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickers
     */
    select?: TickersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickers
     */
    omit?: TickersOmit<ExtArgs> | null
    /**
     * Filter, which Tickers to fetch.
     */
    where?: TickersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickers to fetch.
     */
    orderBy?: TickersOrderByWithRelationInput | TickersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickers.
     */
    cursor?: TickersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickers.
     */
    skip?: number
    distinct?: TickersScalarFieldEnum | TickersScalarFieldEnum[]
  }

  /**
   * Tickers create
   */
  export type TickersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickers
     */
    select?: TickersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickers
     */
    omit?: TickersOmit<ExtArgs> | null
    /**
     * The data needed to create a Tickers.
     */
    data: XOR<TickersCreateInput, TickersUncheckedCreateInput>
  }

  /**
   * Tickers createMany
   */
  export type TickersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickers.
     */
    data: TickersCreateManyInput | TickersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tickers createManyAndReturn
   */
  export type TickersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickers
     */
    select?: TickersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tickers
     */
    omit?: TickersOmit<ExtArgs> | null
    /**
     * The data used to create many Tickers.
     */
    data: TickersCreateManyInput | TickersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tickers update
   */
  export type TickersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickers
     */
    select?: TickersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickers
     */
    omit?: TickersOmit<ExtArgs> | null
    /**
     * The data needed to update a Tickers.
     */
    data: XOR<TickersUpdateInput, TickersUncheckedUpdateInput>
    /**
     * Choose, which Tickers to update.
     */
    where: TickersWhereUniqueInput
  }

  /**
   * Tickers updateMany
   */
  export type TickersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickers.
     */
    data: XOR<TickersUpdateManyMutationInput, TickersUncheckedUpdateManyInput>
    /**
     * Filter which Tickers to update
     */
    where?: TickersWhereInput
    /**
     * Limit how many Tickers to update.
     */
    limit?: number
  }

  /**
   * Tickers updateManyAndReturn
   */
  export type TickersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickers
     */
    select?: TickersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tickers
     */
    omit?: TickersOmit<ExtArgs> | null
    /**
     * The data used to update Tickers.
     */
    data: XOR<TickersUpdateManyMutationInput, TickersUncheckedUpdateManyInput>
    /**
     * Filter which Tickers to update
     */
    where?: TickersWhereInput
    /**
     * Limit how many Tickers to update.
     */
    limit?: number
  }

  /**
   * Tickers upsert
   */
  export type TickersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickers
     */
    select?: TickersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickers
     */
    omit?: TickersOmit<ExtArgs> | null
    /**
     * The filter to search for the Tickers to update in case it exists.
     */
    where: TickersWhereUniqueInput
    /**
     * In case the Tickers found by the `where` argument doesn't exist, create a new Tickers with this data.
     */
    create: XOR<TickersCreateInput, TickersUncheckedCreateInput>
    /**
     * In case the Tickers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TickersUpdateInput, TickersUncheckedUpdateInput>
  }

  /**
   * Tickers delete
   */
  export type TickersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickers
     */
    select?: TickersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickers
     */
    omit?: TickersOmit<ExtArgs> | null
    /**
     * Filter which Tickers to delete.
     */
    where: TickersWhereUniqueInput
  }

  /**
   * Tickers deleteMany
   */
  export type TickersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickers to delete
     */
    where?: TickersWhereInput
    /**
     * Limit how many Tickers to delete.
     */
    limit?: number
  }

  /**
   * Tickers without action
   */
  export type TickersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tickers
     */
    select?: TickersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tickers
     */
    omit?: TickersOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrdersScalarFieldEnum: {
    orderId: 'orderId',
    symbol: 'symbol',
    userId: 'userId',
    side: 'side',
    type: 'type',
    quote_price: 'quote_price',
    quote_quantity: 'quote_quantity',
    filled_quantity: 'filled_quantity',
    filled_price: 'filled_price',
    timestamp: 'timestamp',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const TradesScalarFieldEnum: {
    tradeId: 'tradeId',
    symbol: 'symbol',
    price: 'price',
    volume: 'volume',
    timestamp: 'timestamp'
  };

  export type TradesScalarFieldEnum = (typeof TradesScalarFieldEnum)[keyof typeof TradesScalarFieldEnum]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    name: 'name',
    email: 'email',
    password: 'password',
    pin: 'pin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BalancesScalarFieldEnum: {
    balanceId: 'balanceId',
    userId: 'userId',
    asset: 'asset',
    freeBalance: 'freeBalance',
    lockedBalance: 'lockedBalance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BalancesScalarFieldEnum = (typeof BalancesScalarFieldEnum)[keyof typeof BalancesScalarFieldEnum]


  export const LedgerScalarFieldEnum: {
    ledgerId: 'ledgerId',
    balanceId: 'balanceId',
    userId: 'userId',
    type: 'type',
    symbol: 'symbol',
    createdAt: 'createdAt',
    amount: 'amount',
    reason: 'reason'
  };

  export type LedgerScalarFieldEnum = (typeof LedgerScalarFieldEnum)[keyof typeof LedgerScalarFieldEnum]


  export const TickersScalarFieldEnum: {
    tickerId: 'tickerId',
    symbol: 'symbol'
  };

  export type TickersScalarFieldEnum = (typeof TickersScalarFieldEnum)[keyof typeof TickersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'SIDE'
   */
  export type EnumSIDEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SIDE'>
    


  /**
   * Reference to a field of type 'SIDE[]'
   */
  export type ListEnumSIDEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SIDE[]'>
    


  /**
   * Reference to a field of type 'TYPE'
   */
  export type EnumTYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TYPE'>
    


  /**
   * Reference to a field of type 'TYPE[]'
   */
  export type ListEnumTYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TYPE[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'STATUS'
   */
  export type EnumSTATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'STATUS'>
    


  /**
   * Reference to a field of type 'STATUS[]'
   */
  export type ListEnumSTATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'STATUS[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'LedgerType'
   */
  export type EnumLedgerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerType'>
    


  /**
   * Reference to a field of type 'LedgerType[]'
   */
  export type ListEnumLedgerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerType[]'>
    


  /**
   * Reference to a field of type 'LedgerReason'
   */
  export type EnumLedgerReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerReason'>
    


  /**
   * Reference to a field of type 'LedgerReason[]'
   */
  export type ListEnumLedgerReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LedgerReason[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    orderId?: StringFilter<"Orders"> | string
    symbol?: StringFilter<"Orders"> | string
    userId?: StringFilter<"Orders"> | string
    side?: EnumSIDEFilter<"Orders"> | $Enums.SIDE
    type?: EnumTYPEFilter<"Orders"> | $Enums.TYPE
    quote_price?: FloatFilter<"Orders"> | number
    quote_quantity?: FloatFilter<"Orders"> | number
    filled_quantity?: FloatFilter<"Orders"> | number
    filled_price?: FloatFilter<"Orders"> | number
    timestamp?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    status?: EnumSTATUSFilter<"Orders"> | $Enums.STATUS
  }

  export type OrdersOrderByWithRelationInput = {
    orderId?: SortOrder
    symbol?: SortOrder
    userId?: SortOrder
    side?: SortOrder
    type?: SortOrder
    quote_price?: SortOrder
    quote_quantity?: SortOrder
    filled_quantity?: SortOrder
    filled_price?: SortOrder
    timestamp?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    orderId?: string
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    symbol?: StringFilter<"Orders"> | string
    userId?: StringFilter<"Orders"> | string
    side?: EnumSIDEFilter<"Orders"> | $Enums.SIDE
    type?: EnumTYPEFilter<"Orders"> | $Enums.TYPE
    quote_price?: FloatFilter<"Orders"> | number
    quote_quantity?: FloatFilter<"Orders"> | number
    filled_quantity?: FloatFilter<"Orders"> | number
    filled_price?: FloatFilter<"Orders"> | number
    timestamp?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    status?: EnumSTATUSFilter<"Orders"> | $Enums.STATUS
  }, "orderId">

  export type OrdersOrderByWithAggregationInput = {
    orderId?: SortOrder
    symbol?: SortOrder
    userId?: SortOrder
    side?: SortOrder
    type?: SortOrder
    quote_price?: SortOrder
    quote_quantity?: SortOrder
    filled_quantity?: SortOrder
    filled_price?: SortOrder
    timestamp?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    orderId?: StringWithAggregatesFilter<"Orders"> | string
    symbol?: StringWithAggregatesFilter<"Orders"> | string
    userId?: StringWithAggregatesFilter<"Orders"> | string
    side?: EnumSIDEWithAggregatesFilter<"Orders"> | $Enums.SIDE
    type?: EnumTYPEWithAggregatesFilter<"Orders"> | $Enums.TYPE
    quote_price?: FloatWithAggregatesFilter<"Orders"> | number
    quote_quantity?: FloatWithAggregatesFilter<"Orders"> | number
    filled_quantity?: FloatWithAggregatesFilter<"Orders"> | number
    filled_price?: FloatWithAggregatesFilter<"Orders"> | number
    timestamp?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    status?: EnumSTATUSWithAggregatesFilter<"Orders"> | $Enums.STATUS
  }

  export type TradesWhereInput = {
    AND?: TradesWhereInput | TradesWhereInput[]
    OR?: TradesWhereInput[]
    NOT?: TradesWhereInput | TradesWhereInput[]
    tradeId?: StringFilter<"Trades"> | string
    symbol?: StringFilter<"Trades"> | string
    price?: FloatFilter<"Trades"> | number
    volume?: FloatFilter<"Trades"> | number
    timestamp?: DateTimeFilter<"Trades"> | Date | string
  }

  export type TradesOrderByWithRelationInput = {
    tradeId?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    volume?: SortOrder
    timestamp?: SortOrder
  }

  export type TradesWhereUniqueInput = Prisma.AtLeast<{
    tradeId_timestamp?: TradesTradeIdTimestampCompoundUniqueInput
    symbol_timestamp?: TradesSymbolTimestampCompoundUniqueInput
    timestamp_symbol?: TradesTimestampSymbolCompoundUniqueInput
    AND?: TradesWhereInput | TradesWhereInput[]
    OR?: TradesWhereInput[]
    NOT?: TradesWhereInput | TradesWhereInput[]
    tradeId?: StringFilter<"Trades"> | string
    symbol?: StringFilter<"Trades"> | string
    price?: FloatFilter<"Trades"> | number
    volume?: FloatFilter<"Trades"> | number
    timestamp?: DateTimeFilter<"Trades"> | Date | string
  }, "timestamp_symbol" | "tradeId_timestamp" | "symbol_timestamp">

  export type TradesOrderByWithAggregationInput = {
    tradeId?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    volume?: SortOrder
    timestamp?: SortOrder
    _count?: TradesCountOrderByAggregateInput
    _avg?: TradesAvgOrderByAggregateInput
    _max?: TradesMaxOrderByAggregateInput
    _min?: TradesMinOrderByAggregateInput
    _sum?: TradesSumOrderByAggregateInput
  }

  export type TradesScalarWhereWithAggregatesInput = {
    AND?: TradesScalarWhereWithAggregatesInput | TradesScalarWhereWithAggregatesInput[]
    OR?: TradesScalarWhereWithAggregatesInput[]
    NOT?: TradesScalarWhereWithAggregatesInput | TradesScalarWhereWithAggregatesInput[]
    tradeId?: StringWithAggregatesFilter<"Trades"> | string
    symbol?: StringWithAggregatesFilter<"Trades"> | string
    price?: FloatWithAggregatesFilter<"Trades"> | number
    volume?: FloatWithAggregatesFilter<"Trades"> | number
    timestamp?: DateTimeWithAggregatesFilter<"Trades"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    pin?: StringFilter<"User"> | string
    balance?: BalancesListRelationFilter
    transactions?: LedgerListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pin?: SortOrder
    balance?: BalancesOrderByRelationAggregateInput
    transactions?: LedgerOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    pin?: StringFilter<"User"> | string
    balance?: BalancesListRelationFilter
    transactions?: LedgerListRelationFilter
  }, "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pin?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    pin?: StringWithAggregatesFilter<"User"> | string
  }

  export type BalancesWhereInput = {
    AND?: BalancesWhereInput | BalancesWhereInput[]
    OR?: BalancesWhereInput[]
    NOT?: BalancesWhereInput | BalancesWhereInput[]
    balanceId?: StringFilter<"Balances"> | string
    userId?: StringFilter<"Balances"> | string
    asset?: StringFilter<"Balances"> | string
    freeBalance?: BigIntFilter<"Balances"> | bigint | number
    lockedBalance?: BigIntFilter<"Balances"> | bigint | number
    createdAt?: DateTimeFilter<"Balances"> | Date | string
    updatedAt?: DateTimeFilter<"Balances"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ledgers?: LedgerListRelationFilter
  }

  export type BalancesOrderByWithRelationInput = {
    balanceId?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    freeBalance?: SortOrder
    lockedBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    ledgers?: LedgerOrderByRelationAggregateInput
  }

  export type BalancesWhereUniqueInput = Prisma.AtLeast<{
    balanceId?: string
    userId_asset?: BalancesUserIdAssetCompoundUniqueInput
    AND?: BalancesWhereInput | BalancesWhereInput[]
    OR?: BalancesWhereInput[]
    NOT?: BalancesWhereInput | BalancesWhereInput[]
    userId?: StringFilter<"Balances"> | string
    asset?: StringFilter<"Balances"> | string
    freeBalance?: BigIntFilter<"Balances"> | bigint | number
    lockedBalance?: BigIntFilter<"Balances"> | bigint | number
    createdAt?: DateTimeFilter<"Balances"> | Date | string
    updatedAt?: DateTimeFilter<"Balances"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ledgers?: LedgerListRelationFilter
  }, "balanceId" | "userId_asset">

  export type BalancesOrderByWithAggregationInput = {
    balanceId?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    freeBalance?: SortOrder
    lockedBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BalancesCountOrderByAggregateInput
    _avg?: BalancesAvgOrderByAggregateInput
    _max?: BalancesMaxOrderByAggregateInput
    _min?: BalancesMinOrderByAggregateInput
    _sum?: BalancesSumOrderByAggregateInput
  }

  export type BalancesScalarWhereWithAggregatesInput = {
    AND?: BalancesScalarWhereWithAggregatesInput | BalancesScalarWhereWithAggregatesInput[]
    OR?: BalancesScalarWhereWithAggregatesInput[]
    NOT?: BalancesScalarWhereWithAggregatesInput | BalancesScalarWhereWithAggregatesInput[]
    balanceId?: StringWithAggregatesFilter<"Balances"> | string
    userId?: StringWithAggregatesFilter<"Balances"> | string
    asset?: StringWithAggregatesFilter<"Balances"> | string
    freeBalance?: BigIntWithAggregatesFilter<"Balances"> | bigint | number
    lockedBalance?: BigIntWithAggregatesFilter<"Balances"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"Balances"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Balances"> | Date | string
  }

  export type LedgerWhereInput = {
    AND?: LedgerWhereInput | LedgerWhereInput[]
    OR?: LedgerWhereInput[]
    NOT?: LedgerWhereInput | LedgerWhereInput[]
    ledgerId?: StringFilter<"Ledger"> | string
    balanceId?: StringFilter<"Ledger"> | string
    userId?: StringFilter<"Ledger"> | string
    type?: EnumLedgerTypeFilter<"Ledger"> | $Enums.LedgerType
    symbol?: StringFilter<"Ledger"> | string
    createdAt?: DateTimeFilter<"Ledger"> | Date | string
    amount?: BigIntFilter<"Ledger"> | bigint | number
    reason?: EnumLedgerReasonFilter<"Ledger"> | $Enums.LedgerReason
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    balance?: XOR<BalancesScalarRelationFilter, BalancesWhereInput>
  }

  export type LedgerOrderByWithRelationInput = {
    ledgerId?: SortOrder
    balanceId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    symbol?: SortOrder
    createdAt?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    user?: UserOrderByWithRelationInput
    balance?: BalancesOrderByWithRelationInput
  }

  export type LedgerWhereUniqueInput = Prisma.AtLeast<{
    ledgerId?: string
    AND?: LedgerWhereInput | LedgerWhereInput[]
    OR?: LedgerWhereInput[]
    NOT?: LedgerWhereInput | LedgerWhereInput[]
    balanceId?: StringFilter<"Ledger"> | string
    userId?: StringFilter<"Ledger"> | string
    type?: EnumLedgerTypeFilter<"Ledger"> | $Enums.LedgerType
    symbol?: StringFilter<"Ledger"> | string
    createdAt?: DateTimeFilter<"Ledger"> | Date | string
    amount?: BigIntFilter<"Ledger"> | bigint | number
    reason?: EnumLedgerReasonFilter<"Ledger"> | $Enums.LedgerReason
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    balance?: XOR<BalancesScalarRelationFilter, BalancesWhereInput>
  }, "ledgerId">

  export type LedgerOrderByWithAggregationInput = {
    ledgerId?: SortOrder
    balanceId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    symbol?: SortOrder
    createdAt?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
    _count?: LedgerCountOrderByAggregateInput
    _avg?: LedgerAvgOrderByAggregateInput
    _max?: LedgerMaxOrderByAggregateInput
    _min?: LedgerMinOrderByAggregateInput
    _sum?: LedgerSumOrderByAggregateInput
  }

  export type LedgerScalarWhereWithAggregatesInput = {
    AND?: LedgerScalarWhereWithAggregatesInput | LedgerScalarWhereWithAggregatesInput[]
    OR?: LedgerScalarWhereWithAggregatesInput[]
    NOT?: LedgerScalarWhereWithAggregatesInput | LedgerScalarWhereWithAggregatesInput[]
    ledgerId?: StringWithAggregatesFilter<"Ledger"> | string
    balanceId?: StringWithAggregatesFilter<"Ledger"> | string
    userId?: StringWithAggregatesFilter<"Ledger"> | string
    type?: EnumLedgerTypeWithAggregatesFilter<"Ledger"> | $Enums.LedgerType
    symbol?: StringWithAggregatesFilter<"Ledger"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Ledger"> | Date | string
    amount?: BigIntWithAggregatesFilter<"Ledger"> | bigint | number
    reason?: EnumLedgerReasonWithAggregatesFilter<"Ledger"> | $Enums.LedgerReason
  }

  export type TickersWhereInput = {
    AND?: TickersWhereInput | TickersWhereInput[]
    OR?: TickersWhereInput[]
    NOT?: TickersWhereInput | TickersWhereInput[]
    tickerId?: StringFilter<"Tickers"> | string
    symbol?: StringFilter<"Tickers"> | string
  }

  export type TickersOrderByWithRelationInput = {
    tickerId?: SortOrder
    symbol?: SortOrder
  }

  export type TickersWhereUniqueInput = Prisma.AtLeast<{
    tickerId?: string
    AND?: TickersWhereInput | TickersWhereInput[]
    OR?: TickersWhereInput[]
    NOT?: TickersWhereInput | TickersWhereInput[]
    symbol?: StringFilter<"Tickers"> | string
  }, "tickerId">

  export type TickersOrderByWithAggregationInput = {
    tickerId?: SortOrder
    symbol?: SortOrder
    _count?: TickersCountOrderByAggregateInput
    _max?: TickersMaxOrderByAggregateInput
    _min?: TickersMinOrderByAggregateInput
  }

  export type TickersScalarWhereWithAggregatesInput = {
    AND?: TickersScalarWhereWithAggregatesInput | TickersScalarWhereWithAggregatesInput[]
    OR?: TickersScalarWhereWithAggregatesInput[]
    NOT?: TickersScalarWhereWithAggregatesInput | TickersScalarWhereWithAggregatesInput[]
    tickerId?: StringWithAggregatesFilter<"Tickers"> | string
    symbol?: StringWithAggregatesFilter<"Tickers"> | string
  }

  export type OrdersCreateInput = {
    orderId: string
    symbol: string
    userId: string
    side: $Enums.SIDE
    type: $Enums.TYPE
    quote_price: number
    quote_quantity: number
    filled_quantity?: number
    filled_price?: number
    timestamp: Date | string
    updatedAt: Date | string
    status: $Enums.STATUS
  }

  export type OrdersUncheckedCreateInput = {
    orderId: string
    symbol: string
    userId: string
    side: $Enums.SIDE
    type: $Enums.TYPE
    quote_price: number
    quote_quantity: number
    filled_quantity?: number
    filled_price?: number
    timestamp: Date | string
    updatedAt: Date | string
    status: $Enums.STATUS
  }

  export type OrdersUpdateInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    side?: EnumSIDEFieldUpdateOperationsInput | $Enums.SIDE
    type?: EnumTYPEFieldUpdateOperationsInput | $Enums.TYPE
    quote_price?: FloatFieldUpdateOperationsInput | number
    quote_quantity?: FloatFieldUpdateOperationsInput | number
    filled_quantity?: FloatFieldUpdateOperationsInput | number
    filled_price?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
  }

  export type OrdersUncheckedUpdateInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    side?: EnumSIDEFieldUpdateOperationsInput | $Enums.SIDE
    type?: EnumTYPEFieldUpdateOperationsInput | $Enums.TYPE
    quote_price?: FloatFieldUpdateOperationsInput | number
    quote_quantity?: FloatFieldUpdateOperationsInput | number
    filled_quantity?: FloatFieldUpdateOperationsInput | number
    filled_price?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
  }

  export type OrdersCreateManyInput = {
    orderId: string
    symbol: string
    userId: string
    side: $Enums.SIDE
    type: $Enums.TYPE
    quote_price: number
    quote_quantity: number
    filled_quantity?: number
    filled_price?: number
    timestamp: Date | string
    updatedAt: Date | string
    status: $Enums.STATUS
  }

  export type OrdersUpdateManyMutationInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    side?: EnumSIDEFieldUpdateOperationsInput | $Enums.SIDE
    type?: EnumTYPEFieldUpdateOperationsInput | $Enums.TYPE
    quote_price?: FloatFieldUpdateOperationsInput | number
    quote_quantity?: FloatFieldUpdateOperationsInput | number
    filled_quantity?: FloatFieldUpdateOperationsInput | number
    filled_price?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
  }

  export type OrdersUncheckedUpdateManyInput = {
    orderId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    side?: EnumSIDEFieldUpdateOperationsInput | $Enums.SIDE
    type?: EnumTYPEFieldUpdateOperationsInput | $Enums.TYPE
    quote_price?: FloatFieldUpdateOperationsInput | number
    quote_quantity?: FloatFieldUpdateOperationsInput | number
    filled_quantity?: FloatFieldUpdateOperationsInput | number
    filled_price?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSTATUSFieldUpdateOperationsInput | $Enums.STATUS
  }

  export type TradesCreateInput = {
    tradeId: string
    symbol: string
    price: number
    volume: number
    timestamp: Date | string
  }

  export type TradesUncheckedCreateInput = {
    tradeId: string
    symbol: string
    price: number
    volume: number
    timestamp: Date | string
  }

  export type TradesUpdateInput = {
    tradeId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradesUncheckedUpdateInput = {
    tradeId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradesCreateManyInput = {
    tradeId: string
    symbol: string
    price: number
    volume: number
    timestamp: Date | string
  }

  export type TradesUpdateManyMutationInput = {
    tradeId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradesUncheckedUpdateManyInput = {
    tradeId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    volume?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    userId?: string
    name: string
    email: string
    password: string
    pin: string
    balance?: BalancesCreateNestedManyWithoutUserInput
    transactions?: LedgerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    name: string
    email: string
    password: string
    pin: string
    balance?: BalancesUncheckedCreateNestedManyWithoutUserInput
    transactions?: LedgerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    balance?: BalancesUpdateManyWithoutUserNestedInput
    transactions?: LedgerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    balance?: BalancesUncheckedUpdateManyWithoutUserNestedInput
    transactions?: LedgerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: string
    name: string
    email: string
    password: string
    pin: string
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
  }

  export type BalancesCreateInput = {
    balanceId?: string
    asset: string
    freeBalance?: bigint | number
    lockedBalance?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBalanceInput
    ledgers?: LedgerCreateNestedManyWithoutBalanceInput
  }

  export type BalancesUncheckedCreateInput = {
    balanceId?: string
    userId: string
    asset: string
    freeBalance?: bigint | number
    lockedBalance?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    ledgers?: LedgerUncheckedCreateNestedManyWithoutBalanceInput
  }

  export type BalancesUpdateInput = {
    balanceId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    freeBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    lockedBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBalanceNestedInput
    ledgers?: LedgerUpdateManyWithoutBalanceNestedInput
  }

  export type BalancesUncheckedUpdateInput = {
    balanceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    freeBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    lockedBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledgers?: LedgerUncheckedUpdateManyWithoutBalanceNestedInput
  }

  export type BalancesCreateManyInput = {
    balanceId?: string
    userId: string
    asset: string
    freeBalance?: bigint | number
    lockedBalance?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BalancesUpdateManyMutationInput = {
    balanceId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    freeBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    lockedBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalancesUncheckedUpdateManyInput = {
    balanceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    freeBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    lockedBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerCreateInput = {
    ledgerId?: string
    type: $Enums.LedgerType
    symbol: string
    createdAt?: Date | string
    amount: bigint | number
    reason: $Enums.LedgerReason
    user: UserCreateNestedOneWithoutTransactionsInput
    balance: BalancesCreateNestedOneWithoutLedgersInput
  }

  export type LedgerUncheckedCreateInput = {
    ledgerId?: string
    balanceId: string
    userId: string
    type: $Enums.LedgerType
    symbol: string
    createdAt?: Date | string
    amount: bigint | number
    reason: $Enums.LedgerReason
  }

  export type LedgerUpdateInput = {
    ledgerId?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    symbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    reason?: EnumLedgerReasonFieldUpdateOperationsInput | $Enums.LedgerReason
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    balance?: BalancesUpdateOneRequiredWithoutLedgersNestedInput
  }

  export type LedgerUncheckedUpdateInput = {
    ledgerId?: StringFieldUpdateOperationsInput | string
    balanceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    symbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    reason?: EnumLedgerReasonFieldUpdateOperationsInput | $Enums.LedgerReason
  }

  export type LedgerCreateManyInput = {
    ledgerId?: string
    balanceId: string
    userId: string
    type: $Enums.LedgerType
    symbol: string
    createdAt?: Date | string
    amount: bigint | number
    reason: $Enums.LedgerReason
  }

  export type LedgerUpdateManyMutationInput = {
    ledgerId?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    symbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    reason?: EnumLedgerReasonFieldUpdateOperationsInput | $Enums.LedgerReason
  }

  export type LedgerUncheckedUpdateManyInput = {
    ledgerId?: StringFieldUpdateOperationsInput | string
    balanceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    symbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    reason?: EnumLedgerReasonFieldUpdateOperationsInput | $Enums.LedgerReason
  }

  export type TickersCreateInput = {
    tickerId?: string
    symbol: string
  }

  export type TickersUncheckedCreateInput = {
    tickerId?: string
    symbol: string
  }

  export type TickersUpdateInput = {
    tickerId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type TickersUncheckedUpdateInput = {
    tickerId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type TickersCreateManyInput = {
    tickerId?: string
    symbol: string
  }

  export type TickersUpdateManyMutationInput = {
    tickerId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type TickersUncheckedUpdateManyInput = {
    tickerId?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumSIDEFilter<$PrismaModel = never> = {
    equals?: $Enums.SIDE | EnumSIDEFieldRefInput<$PrismaModel>
    in?: $Enums.SIDE[] | ListEnumSIDEFieldRefInput<$PrismaModel>
    notIn?: $Enums.SIDE[] | ListEnumSIDEFieldRefInput<$PrismaModel>
    not?: NestedEnumSIDEFilter<$PrismaModel> | $Enums.SIDE
  }

  export type EnumTYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.TYPE | EnumTYPEFieldRefInput<$PrismaModel>
    in?: $Enums.TYPE[] | ListEnumTYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.TYPE[] | ListEnumTYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumTYPEFilter<$PrismaModel> | $Enums.TYPE
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumSTATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumSTATUSFilter<$PrismaModel> | $Enums.STATUS
  }

  export type OrdersCountOrderByAggregateInput = {
    orderId?: SortOrder
    symbol?: SortOrder
    userId?: SortOrder
    side?: SortOrder
    type?: SortOrder
    quote_price?: SortOrder
    quote_quantity?: SortOrder
    filled_quantity?: SortOrder
    filled_price?: SortOrder
    timestamp?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    quote_price?: SortOrder
    quote_quantity?: SortOrder
    filled_quantity?: SortOrder
    filled_price?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    orderId?: SortOrder
    symbol?: SortOrder
    userId?: SortOrder
    side?: SortOrder
    type?: SortOrder
    quote_price?: SortOrder
    quote_quantity?: SortOrder
    filled_quantity?: SortOrder
    filled_price?: SortOrder
    timestamp?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    orderId?: SortOrder
    symbol?: SortOrder
    userId?: SortOrder
    side?: SortOrder
    type?: SortOrder
    quote_price?: SortOrder
    quote_quantity?: SortOrder
    filled_quantity?: SortOrder
    filled_price?: SortOrder
    timestamp?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    quote_price?: SortOrder
    quote_quantity?: SortOrder
    filled_quantity?: SortOrder
    filled_price?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumSIDEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SIDE | EnumSIDEFieldRefInput<$PrismaModel>
    in?: $Enums.SIDE[] | ListEnumSIDEFieldRefInput<$PrismaModel>
    notIn?: $Enums.SIDE[] | ListEnumSIDEFieldRefInput<$PrismaModel>
    not?: NestedEnumSIDEWithAggregatesFilter<$PrismaModel> | $Enums.SIDE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSIDEFilter<$PrismaModel>
    _max?: NestedEnumSIDEFilter<$PrismaModel>
  }

  export type EnumTYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TYPE | EnumTYPEFieldRefInput<$PrismaModel>
    in?: $Enums.TYPE[] | ListEnumTYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.TYPE[] | ListEnumTYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumTYPEWithAggregatesFilter<$PrismaModel> | $Enums.TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTYPEFilter<$PrismaModel>
    _max?: NestedEnumTYPEFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumSTATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumSTATUSWithAggregatesFilter<$PrismaModel> | $Enums.STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSTATUSFilter<$PrismaModel>
    _max?: NestedEnumSTATUSFilter<$PrismaModel>
  }

  export type TradesTradeIdTimestampCompoundUniqueInput = {
    tradeId: string
    timestamp: Date | string
  }

  export type TradesSymbolTimestampCompoundUniqueInput = {
    symbol: string
    timestamp: Date | string
  }

  export type TradesTimestampSymbolCompoundUniqueInput = {
    timestamp: Date | string
    symbol: string
  }

  export type TradesCountOrderByAggregateInput = {
    tradeId?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    volume?: SortOrder
    timestamp?: SortOrder
  }

  export type TradesAvgOrderByAggregateInput = {
    price?: SortOrder
    volume?: SortOrder
  }

  export type TradesMaxOrderByAggregateInput = {
    tradeId?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    volume?: SortOrder
    timestamp?: SortOrder
  }

  export type TradesMinOrderByAggregateInput = {
    tradeId?: SortOrder
    symbol?: SortOrder
    price?: SortOrder
    volume?: SortOrder
    timestamp?: SortOrder
  }

  export type TradesSumOrderByAggregateInput = {
    price?: SortOrder
    volume?: SortOrder
  }

  export type BalancesListRelationFilter = {
    every?: BalancesWhereInput
    some?: BalancesWhereInput
    none?: BalancesWhereInput
  }

  export type LedgerListRelationFilter = {
    every?: LedgerWhereInput
    some?: LedgerWhereInput
    none?: LedgerWhereInput
  }

  export type BalancesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LedgerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pin?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    pin?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BalancesUserIdAssetCompoundUniqueInput = {
    userId: string
    asset: string
  }

  export type BalancesCountOrderByAggregateInput = {
    balanceId?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    freeBalance?: SortOrder
    lockedBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BalancesAvgOrderByAggregateInput = {
    freeBalance?: SortOrder
    lockedBalance?: SortOrder
  }

  export type BalancesMaxOrderByAggregateInput = {
    balanceId?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    freeBalance?: SortOrder
    lockedBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BalancesMinOrderByAggregateInput = {
    balanceId?: SortOrder
    userId?: SortOrder
    asset?: SortOrder
    freeBalance?: SortOrder
    lockedBalance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BalancesSumOrderByAggregateInput = {
    freeBalance?: SortOrder
    lockedBalance?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumLedgerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerTypeFilter<$PrismaModel> | $Enums.LedgerType
  }

  export type EnumLedgerReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerReason | EnumLedgerReasonFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerReason[] | ListEnumLedgerReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerReason[] | ListEnumLedgerReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerReasonFilter<$PrismaModel> | $Enums.LedgerReason
  }

  export type BalancesScalarRelationFilter = {
    is?: BalancesWhereInput
    isNot?: BalancesWhereInput
  }

  export type LedgerCountOrderByAggregateInput = {
    ledgerId?: SortOrder
    balanceId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    symbol?: SortOrder
    createdAt?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
  }

  export type LedgerAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type LedgerMaxOrderByAggregateInput = {
    ledgerId?: SortOrder
    balanceId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    symbol?: SortOrder
    createdAt?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
  }

  export type LedgerMinOrderByAggregateInput = {
    ledgerId?: SortOrder
    balanceId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    symbol?: SortOrder
    createdAt?: SortOrder
    amount?: SortOrder
    reason?: SortOrder
  }

  export type LedgerSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumLedgerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLedgerTypeFilter<$PrismaModel>
    _max?: NestedEnumLedgerTypeFilter<$PrismaModel>
  }

  export type EnumLedgerReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerReason | EnumLedgerReasonFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerReason[] | ListEnumLedgerReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerReason[] | ListEnumLedgerReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerReasonWithAggregatesFilter<$PrismaModel> | $Enums.LedgerReason
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLedgerReasonFilter<$PrismaModel>
    _max?: NestedEnumLedgerReasonFilter<$PrismaModel>
  }

  export type TickersCountOrderByAggregateInput = {
    tickerId?: SortOrder
    symbol?: SortOrder
  }

  export type TickersMaxOrderByAggregateInput = {
    tickerId?: SortOrder
    symbol?: SortOrder
  }

  export type TickersMinOrderByAggregateInput = {
    tickerId?: SortOrder
    symbol?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumSIDEFieldUpdateOperationsInput = {
    set?: $Enums.SIDE
  }

  export type EnumTYPEFieldUpdateOperationsInput = {
    set?: $Enums.TYPE
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumSTATUSFieldUpdateOperationsInput = {
    set?: $Enums.STATUS
  }

  export type BalancesCreateNestedManyWithoutUserInput = {
    create?: XOR<BalancesCreateWithoutUserInput, BalancesUncheckedCreateWithoutUserInput> | BalancesCreateWithoutUserInput[] | BalancesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalancesCreateOrConnectWithoutUserInput | BalancesCreateOrConnectWithoutUserInput[]
    createMany?: BalancesCreateManyUserInputEnvelope
    connect?: BalancesWhereUniqueInput | BalancesWhereUniqueInput[]
  }

  export type LedgerCreateNestedManyWithoutUserInput = {
    create?: XOR<LedgerCreateWithoutUserInput, LedgerUncheckedCreateWithoutUserInput> | LedgerCreateWithoutUserInput[] | LedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LedgerCreateOrConnectWithoutUserInput | LedgerCreateOrConnectWithoutUserInput[]
    createMany?: LedgerCreateManyUserInputEnvelope
    connect?: LedgerWhereUniqueInput | LedgerWhereUniqueInput[]
  }

  export type BalancesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BalancesCreateWithoutUserInput, BalancesUncheckedCreateWithoutUserInput> | BalancesCreateWithoutUserInput[] | BalancesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalancesCreateOrConnectWithoutUserInput | BalancesCreateOrConnectWithoutUserInput[]
    createMany?: BalancesCreateManyUserInputEnvelope
    connect?: BalancesWhereUniqueInput | BalancesWhereUniqueInput[]
  }

  export type LedgerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LedgerCreateWithoutUserInput, LedgerUncheckedCreateWithoutUserInput> | LedgerCreateWithoutUserInput[] | LedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LedgerCreateOrConnectWithoutUserInput | LedgerCreateOrConnectWithoutUserInput[]
    createMany?: LedgerCreateManyUserInputEnvelope
    connect?: LedgerWhereUniqueInput | LedgerWhereUniqueInput[]
  }

  export type BalancesUpdateManyWithoutUserNestedInput = {
    create?: XOR<BalancesCreateWithoutUserInput, BalancesUncheckedCreateWithoutUserInput> | BalancesCreateWithoutUserInput[] | BalancesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalancesCreateOrConnectWithoutUserInput | BalancesCreateOrConnectWithoutUserInput[]
    upsert?: BalancesUpsertWithWhereUniqueWithoutUserInput | BalancesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BalancesCreateManyUserInputEnvelope
    set?: BalancesWhereUniqueInput | BalancesWhereUniqueInput[]
    disconnect?: BalancesWhereUniqueInput | BalancesWhereUniqueInput[]
    delete?: BalancesWhereUniqueInput | BalancesWhereUniqueInput[]
    connect?: BalancesWhereUniqueInput | BalancesWhereUniqueInput[]
    update?: BalancesUpdateWithWhereUniqueWithoutUserInput | BalancesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BalancesUpdateManyWithWhereWithoutUserInput | BalancesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BalancesScalarWhereInput | BalancesScalarWhereInput[]
  }

  export type LedgerUpdateManyWithoutUserNestedInput = {
    create?: XOR<LedgerCreateWithoutUserInput, LedgerUncheckedCreateWithoutUserInput> | LedgerCreateWithoutUserInput[] | LedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LedgerCreateOrConnectWithoutUserInput | LedgerCreateOrConnectWithoutUserInput[]
    upsert?: LedgerUpsertWithWhereUniqueWithoutUserInput | LedgerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LedgerCreateManyUserInputEnvelope
    set?: LedgerWhereUniqueInput | LedgerWhereUniqueInput[]
    disconnect?: LedgerWhereUniqueInput | LedgerWhereUniqueInput[]
    delete?: LedgerWhereUniqueInput | LedgerWhereUniqueInput[]
    connect?: LedgerWhereUniqueInput | LedgerWhereUniqueInput[]
    update?: LedgerUpdateWithWhereUniqueWithoutUserInput | LedgerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LedgerUpdateManyWithWhereWithoutUserInput | LedgerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LedgerScalarWhereInput | LedgerScalarWhereInput[]
  }

  export type BalancesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BalancesCreateWithoutUserInput, BalancesUncheckedCreateWithoutUserInput> | BalancesCreateWithoutUserInput[] | BalancesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalancesCreateOrConnectWithoutUserInput | BalancesCreateOrConnectWithoutUserInput[]
    upsert?: BalancesUpsertWithWhereUniqueWithoutUserInput | BalancesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BalancesCreateManyUserInputEnvelope
    set?: BalancesWhereUniqueInput | BalancesWhereUniqueInput[]
    disconnect?: BalancesWhereUniqueInput | BalancesWhereUniqueInput[]
    delete?: BalancesWhereUniqueInput | BalancesWhereUniqueInput[]
    connect?: BalancesWhereUniqueInput | BalancesWhereUniqueInput[]
    update?: BalancesUpdateWithWhereUniqueWithoutUserInput | BalancesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BalancesUpdateManyWithWhereWithoutUserInput | BalancesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BalancesScalarWhereInput | BalancesScalarWhereInput[]
  }

  export type LedgerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LedgerCreateWithoutUserInput, LedgerUncheckedCreateWithoutUserInput> | LedgerCreateWithoutUserInput[] | LedgerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LedgerCreateOrConnectWithoutUserInput | LedgerCreateOrConnectWithoutUserInput[]
    upsert?: LedgerUpsertWithWhereUniqueWithoutUserInput | LedgerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LedgerCreateManyUserInputEnvelope
    set?: LedgerWhereUniqueInput | LedgerWhereUniqueInput[]
    disconnect?: LedgerWhereUniqueInput | LedgerWhereUniqueInput[]
    delete?: LedgerWhereUniqueInput | LedgerWhereUniqueInput[]
    connect?: LedgerWhereUniqueInput | LedgerWhereUniqueInput[]
    update?: LedgerUpdateWithWhereUniqueWithoutUserInput | LedgerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LedgerUpdateManyWithWhereWithoutUserInput | LedgerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LedgerScalarWhereInput | LedgerScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBalanceInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput
    connect?: UserWhereUniqueInput
  }

  export type LedgerCreateNestedManyWithoutBalanceInput = {
    create?: XOR<LedgerCreateWithoutBalanceInput, LedgerUncheckedCreateWithoutBalanceInput> | LedgerCreateWithoutBalanceInput[] | LedgerUncheckedCreateWithoutBalanceInput[]
    connectOrCreate?: LedgerCreateOrConnectWithoutBalanceInput | LedgerCreateOrConnectWithoutBalanceInput[]
    createMany?: LedgerCreateManyBalanceInputEnvelope
    connect?: LedgerWhereUniqueInput | LedgerWhereUniqueInput[]
  }

  export type LedgerUncheckedCreateNestedManyWithoutBalanceInput = {
    create?: XOR<LedgerCreateWithoutBalanceInput, LedgerUncheckedCreateWithoutBalanceInput> | LedgerCreateWithoutBalanceInput[] | LedgerUncheckedCreateWithoutBalanceInput[]
    connectOrCreate?: LedgerCreateOrConnectWithoutBalanceInput | LedgerCreateOrConnectWithoutBalanceInput[]
    createMany?: LedgerCreateManyBalanceInputEnvelope
    connect?: LedgerWhereUniqueInput | LedgerWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type UserUpdateOneRequiredWithoutBalanceNestedInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput
    upsert?: UserUpsertWithoutBalanceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBalanceInput, UserUpdateWithoutBalanceInput>, UserUncheckedUpdateWithoutBalanceInput>
  }

  export type LedgerUpdateManyWithoutBalanceNestedInput = {
    create?: XOR<LedgerCreateWithoutBalanceInput, LedgerUncheckedCreateWithoutBalanceInput> | LedgerCreateWithoutBalanceInput[] | LedgerUncheckedCreateWithoutBalanceInput[]
    connectOrCreate?: LedgerCreateOrConnectWithoutBalanceInput | LedgerCreateOrConnectWithoutBalanceInput[]
    upsert?: LedgerUpsertWithWhereUniqueWithoutBalanceInput | LedgerUpsertWithWhereUniqueWithoutBalanceInput[]
    createMany?: LedgerCreateManyBalanceInputEnvelope
    set?: LedgerWhereUniqueInput | LedgerWhereUniqueInput[]
    disconnect?: LedgerWhereUniqueInput | LedgerWhereUniqueInput[]
    delete?: LedgerWhereUniqueInput | LedgerWhereUniqueInput[]
    connect?: LedgerWhereUniqueInput | LedgerWhereUniqueInput[]
    update?: LedgerUpdateWithWhereUniqueWithoutBalanceInput | LedgerUpdateWithWhereUniqueWithoutBalanceInput[]
    updateMany?: LedgerUpdateManyWithWhereWithoutBalanceInput | LedgerUpdateManyWithWhereWithoutBalanceInput[]
    deleteMany?: LedgerScalarWhereInput | LedgerScalarWhereInput[]
  }

  export type LedgerUncheckedUpdateManyWithoutBalanceNestedInput = {
    create?: XOR<LedgerCreateWithoutBalanceInput, LedgerUncheckedCreateWithoutBalanceInput> | LedgerCreateWithoutBalanceInput[] | LedgerUncheckedCreateWithoutBalanceInput[]
    connectOrCreate?: LedgerCreateOrConnectWithoutBalanceInput | LedgerCreateOrConnectWithoutBalanceInput[]
    upsert?: LedgerUpsertWithWhereUniqueWithoutBalanceInput | LedgerUpsertWithWhereUniqueWithoutBalanceInput[]
    createMany?: LedgerCreateManyBalanceInputEnvelope
    set?: LedgerWhereUniqueInput | LedgerWhereUniqueInput[]
    disconnect?: LedgerWhereUniqueInput | LedgerWhereUniqueInput[]
    delete?: LedgerWhereUniqueInput | LedgerWhereUniqueInput[]
    connect?: LedgerWhereUniqueInput | LedgerWhereUniqueInput[]
    update?: LedgerUpdateWithWhereUniqueWithoutBalanceInput | LedgerUpdateWithWhereUniqueWithoutBalanceInput[]
    updateMany?: LedgerUpdateManyWithWhereWithoutBalanceInput | LedgerUpdateManyWithWhereWithoutBalanceInput[]
    deleteMany?: LedgerScalarWhereInput | LedgerScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type BalancesCreateNestedOneWithoutLedgersInput = {
    create?: XOR<BalancesCreateWithoutLedgersInput, BalancesUncheckedCreateWithoutLedgersInput>
    connectOrCreate?: BalancesCreateOrConnectWithoutLedgersInput
    connect?: BalancesWhereUniqueInput
  }

  export type EnumLedgerTypeFieldUpdateOperationsInput = {
    set?: $Enums.LedgerType
  }

  export type EnumLedgerReasonFieldUpdateOperationsInput = {
    set?: $Enums.LedgerReason
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type BalancesUpdateOneRequiredWithoutLedgersNestedInput = {
    create?: XOR<BalancesCreateWithoutLedgersInput, BalancesUncheckedCreateWithoutLedgersInput>
    connectOrCreate?: BalancesCreateOrConnectWithoutLedgersInput
    upsert?: BalancesUpsertWithoutLedgersInput
    connect?: BalancesWhereUniqueInput
    update?: XOR<XOR<BalancesUpdateToOneWithWhereWithoutLedgersInput, BalancesUpdateWithoutLedgersInput>, BalancesUncheckedUpdateWithoutLedgersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumSIDEFilter<$PrismaModel = never> = {
    equals?: $Enums.SIDE | EnumSIDEFieldRefInput<$PrismaModel>
    in?: $Enums.SIDE[] | ListEnumSIDEFieldRefInput<$PrismaModel>
    notIn?: $Enums.SIDE[] | ListEnumSIDEFieldRefInput<$PrismaModel>
    not?: NestedEnumSIDEFilter<$PrismaModel> | $Enums.SIDE
  }

  export type NestedEnumTYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.TYPE | EnumTYPEFieldRefInput<$PrismaModel>
    in?: $Enums.TYPE[] | ListEnumTYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.TYPE[] | ListEnumTYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumTYPEFilter<$PrismaModel> | $Enums.TYPE
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumSTATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumSTATUSFilter<$PrismaModel> | $Enums.STATUS
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumSIDEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SIDE | EnumSIDEFieldRefInput<$PrismaModel>
    in?: $Enums.SIDE[] | ListEnumSIDEFieldRefInput<$PrismaModel>
    notIn?: $Enums.SIDE[] | ListEnumSIDEFieldRefInput<$PrismaModel>
    not?: NestedEnumSIDEWithAggregatesFilter<$PrismaModel> | $Enums.SIDE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSIDEFilter<$PrismaModel>
    _max?: NestedEnumSIDEFilter<$PrismaModel>
  }

  export type NestedEnumTYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TYPE | EnumTYPEFieldRefInput<$PrismaModel>
    in?: $Enums.TYPE[] | ListEnumTYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.TYPE[] | ListEnumTYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumTYPEWithAggregatesFilter<$PrismaModel> | $Enums.TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTYPEFilter<$PrismaModel>
    _max?: NestedEnumTYPEFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSTATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.STATUS | EnumSTATUSFieldRefInput<$PrismaModel>
    in?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.STATUS[] | ListEnumSTATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumSTATUSWithAggregatesFilter<$PrismaModel> | $Enums.STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSTATUSFilter<$PrismaModel>
    _max?: NestedEnumSTATUSFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumLedgerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerTypeFilter<$PrismaModel> | $Enums.LedgerType
  }

  export type NestedEnumLedgerReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerReason | EnumLedgerReasonFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerReason[] | ListEnumLedgerReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerReason[] | ListEnumLedgerReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerReasonFilter<$PrismaModel> | $Enums.LedgerReason
  }

  export type NestedEnumLedgerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerType | EnumLedgerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerType[] | ListEnumLedgerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerTypeWithAggregatesFilter<$PrismaModel> | $Enums.LedgerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLedgerTypeFilter<$PrismaModel>
    _max?: NestedEnumLedgerTypeFilter<$PrismaModel>
  }

  export type NestedEnumLedgerReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LedgerReason | EnumLedgerReasonFieldRefInput<$PrismaModel>
    in?: $Enums.LedgerReason[] | ListEnumLedgerReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.LedgerReason[] | ListEnumLedgerReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumLedgerReasonWithAggregatesFilter<$PrismaModel> | $Enums.LedgerReason
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLedgerReasonFilter<$PrismaModel>
    _max?: NestedEnumLedgerReasonFilter<$PrismaModel>
  }

  export type BalancesCreateWithoutUserInput = {
    balanceId?: string
    asset: string
    freeBalance?: bigint | number
    lockedBalance?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    ledgers?: LedgerCreateNestedManyWithoutBalanceInput
  }

  export type BalancesUncheckedCreateWithoutUserInput = {
    balanceId?: string
    asset: string
    freeBalance?: bigint | number
    lockedBalance?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    ledgers?: LedgerUncheckedCreateNestedManyWithoutBalanceInput
  }

  export type BalancesCreateOrConnectWithoutUserInput = {
    where: BalancesWhereUniqueInput
    create: XOR<BalancesCreateWithoutUserInput, BalancesUncheckedCreateWithoutUserInput>
  }

  export type BalancesCreateManyUserInputEnvelope = {
    data: BalancesCreateManyUserInput | BalancesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LedgerCreateWithoutUserInput = {
    ledgerId?: string
    type: $Enums.LedgerType
    symbol: string
    createdAt?: Date | string
    amount: bigint | number
    reason: $Enums.LedgerReason
    balance: BalancesCreateNestedOneWithoutLedgersInput
  }

  export type LedgerUncheckedCreateWithoutUserInput = {
    ledgerId?: string
    balanceId: string
    type: $Enums.LedgerType
    symbol: string
    createdAt?: Date | string
    amount: bigint | number
    reason: $Enums.LedgerReason
  }

  export type LedgerCreateOrConnectWithoutUserInput = {
    where: LedgerWhereUniqueInput
    create: XOR<LedgerCreateWithoutUserInput, LedgerUncheckedCreateWithoutUserInput>
  }

  export type LedgerCreateManyUserInputEnvelope = {
    data: LedgerCreateManyUserInput | LedgerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BalancesUpsertWithWhereUniqueWithoutUserInput = {
    where: BalancesWhereUniqueInput
    update: XOR<BalancesUpdateWithoutUserInput, BalancesUncheckedUpdateWithoutUserInput>
    create: XOR<BalancesCreateWithoutUserInput, BalancesUncheckedCreateWithoutUserInput>
  }

  export type BalancesUpdateWithWhereUniqueWithoutUserInput = {
    where: BalancesWhereUniqueInput
    data: XOR<BalancesUpdateWithoutUserInput, BalancesUncheckedUpdateWithoutUserInput>
  }

  export type BalancesUpdateManyWithWhereWithoutUserInput = {
    where: BalancesScalarWhereInput
    data: XOR<BalancesUpdateManyMutationInput, BalancesUncheckedUpdateManyWithoutUserInput>
  }

  export type BalancesScalarWhereInput = {
    AND?: BalancesScalarWhereInput | BalancesScalarWhereInput[]
    OR?: BalancesScalarWhereInput[]
    NOT?: BalancesScalarWhereInput | BalancesScalarWhereInput[]
    balanceId?: StringFilter<"Balances"> | string
    userId?: StringFilter<"Balances"> | string
    asset?: StringFilter<"Balances"> | string
    freeBalance?: BigIntFilter<"Balances"> | bigint | number
    lockedBalance?: BigIntFilter<"Balances"> | bigint | number
    createdAt?: DateTimeFilter<"Balances"> | Date | string
    updatedAt?: DateTimeFilter<"Balances"> | Date | string
  }

  export type LedgerUpsertWithWhereUniqueWithoutUserInput = {
    where: LedgerWhereUniqueInput
    update: XOR<LedgerUpdateWithoutUserInput, LedgerUncheckedUpdateWithoutUserInput>
    create: XOR<LedgerCreateWithoutUserInput, LedgerUncheckedCreateWithoutUserInput>
  }

  export type LedgerUpdateWithWhereUniqueWithoutUserInput = {
    where: LedgerWhereUniqueInput
    data: XOR<LedgerUpdateWithoutUserInput, LedgerUncheckedUpdateWithoutUserInput>
  }

  export type LedgerUpdateManyWithWhereWithoutUserInput = {
    where: LedgerScalarWhereInput
    data: XOR<LedgerUpdateManyMutationInput, LedgerUncheckedUpdateManyWithoutUserInput>
  }

  export type LedgerScalarWhereInput = {
    AND?: LedgerScalarWhereInput | LedgerScalarWhereInput[]
    OR?: LedgerScalarWhereInput[]
    NOT?: LedgerScalarWhereInput | LedgerScalarWhereInput[]
    ledgerId?: StringFilter<"Ledger"> | string
    balanceId?: StringFilter<"Ledger"> | string
    userId?: StringFilter<"Ledger"> | string
    type?: EnumLedgerTypeFilter<"Ledger"> | $Enums.LedgerType
    symbol?: StringFilter<"Ledger"> | string
    createdAt?: DateTimeFilter<"Ledger"> | Date | string
    amount?: BigIntFilter<"Ledger"> | bigint | number
    reason?: EnumLedgerReasonFilter<"Ledger"> | $Enums.LedgerReason
  }

  export type UserCreateWithoutBalanceInput = {
    userId?: string
    name: string
    email: string
    password: string
    pin: string
    transactions?: LedgerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBalanceInput = {
    userId?: string
    name: string
    email: string
    password: string
    pin: string
    transactions?: LedgerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBalanceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
  }

  export type LedgerCreateWithoutBalanceInput = {
    ledgerId?: string
    type: $Enums.LedgerType
    symbol: string
    createdAt?: Date | string
    amount: bigint | number
    reason: $Enums.LedgerReason
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type LedgerUncheckedCreateWithoutBalanceInput = {
    ledgerId?: string
    userId: string
    type: $Enums.LedgerType
    symbol: string
    createdAt?: Date | string
    amount: bigint | number
    reason: $Enums.LedgerReason
  }

  export type LedgerCreateOrConnectWithoutBalanceInput = {
    where: LedgerWhereUniqueInput
    create: XOR<LedgerCreateWithoutBalanceInput, LedgerUncheckedCreateWithoutBalanceInput>
  }

  export type LedgerCreateManyBalanceInputEnvelope = {
    data: LedgerCreateManyBalanceInput | LedgerCreateManyBalanceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBalanceInput = {
    update: XOR<UserUpdateWithoutBalanceInput, UserUncheckedUpdateWithoutBalanceInput>
    create: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBalanceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBalanceInput, UserUncheckedUpdateWithoutBalanceInput>
  }

  export type UserUpdateWithoutBalanceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    transactions?: LedgerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBalanceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    transactions?: LedgerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LedgerUpsertWithWhereUniqueWithoutBalanceInput = {
    where: LedgerWhereUniqueInput
    update: XOR<LedgerUpdateWithoutBalanceInput, LedgerUncheckedUpdateWithoutBalanceInput>
    create: XOR<LedgerCreateWithoutBalanceInput, LedgerUncheckedCreateWithoutBalanceInput>
  }

  export type LedgerUpdateWithWhereUniqueWithoutBalanceInput = {
    where: LedgerWhereUniqueInput
    data: XOR<LedgerUpdateWithoutBalanceInput, LedgerUncheckedUpdateWithoutBalanceInput>
  }

  export type LedgerUpdateManyWithWhereWithoutBalanceInput = {
    where: LedgerScalarWhereInput
    data: XOR<LedgerUpdateManyMutationInput, LedgerUncheckedUpdateManyWithoutBalanceInput>
  }

  export type UserCreateWithoutTransactionsInput = {
    userId?: string
    name: string
    email: string
    password: string
    pin: string
    balance?: BalancesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    userId?: string
    name: string
    email: string
    password: string
    pin: string
    balance?: BalancesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type BalancesCreateWithoutLedgersInput = {
    balanceId?: string
    asset: string
    freeBalance?: bigint | number
    lockedBalance?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBalanceInput
  }

  export type BalancesUncheckedCreateWithoutLedgersInput = {
    balanceId?: string
    userId: string
    asset: string
    freeBalance?: bigint | number
    lockedBalance?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BalancesCreateOrConnectWithoutLedgersInput = {
    where: BalancesWhereUniqueInput
    create: XOR<BalancesCreateWithoutLedgersInput, BalancesUncheckedCreateWithoutLedgersInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    balance?: BalancesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    pin?: StringFieldUpdateOperationsInput | string
    balance?: BalancesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BalancesUpsertWithoutLedgersInput = {
    update: XOR<BalancesUpdateWithoutLedgersInput, BalancesUncheckedUpdateWithoutLedgersInput>
    create: XOR<BalancesCreateWithoutLedgersInput, BalancesUncheckedCreateWithoutLedgersInput>
    where?: BalancesWhereInput
  }

  export type BalancesUpdateToOneWithWhereWithoutLedgersInput = {
    where?: BalancesWhereInput
    data: XOR<BalancesUpdateWithoutLedgersInput, BalancesUncheckedUpdateWithoutLedgersInput>
  }

  export type BalancesUpdateWithoutLedgersInput = {
    balanceId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    freeBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    lockedBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBalanceNestedInput
  }

  export type BalancesUncheckedUpdateWithoutLedgersInput = {
    balanceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    freeBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    lockedBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalancesCreateManyUserInput = {
    balanceId?: string
    asset: string
    freeBalance?: bigint | number
    lockedBalance?: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LedgerCreateManyUserInput = {
    ledgerId?: string
    balanceId: string
    type: $Enums.LedgerType
    symbol: string
    createdAt?: Date | string
    amount: bigint | number
    reason: $Enums.LedgerReason
  }

  export type BalancesUpdateWithoutUserInput = {
    balanceId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    freeBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    lockedBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledgers?: LedgerUpdateManyWithoutBalanceNestedInput
  }

  export type BalancesUncheckedUpdateWithoutUserInput = {
    balanceId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    freeBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    lockedBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ledgers?: LedgerUncheckedUpdateManyWithoutBalanceNestedInput
  }

  export type BalancesUncheckedUpdateManyWithoutUserInput = {
    balanceId?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    freeBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    lockedBalance?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LedgerUpdateWithoutUserInput = {
    ledgerId?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    symbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    reason?: EnumLedgerReasonFieldUpdateOperationsInput | $Enums.LedgerReason
    balance?: BalancesUpdateOneRequiredWithoutLedgersNestedInput
  }

  export type LedgerUncheckedUpdateWithoutUserInput = {
    ledgerId?: StringFieldUpdateOperationsInput | string
    balanceId?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    symbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    reason?: EnumLedgerReasonFieldUpdateOperationsInput | $Enums.LedgerReason
  }

  export type LedgerUncheckedUpdateManyWithoutUserInput = {
    ledgerId?: StringFieldUpdateOperationsInput | string
    balanceId?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    symbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    reason?: EnumLedgerReasonFieldUpdateOperationsInput | $Enums.LedgerReason
  }

  export type LedgerCreateManyBalanceInput = {
    ledgerId?: string
    userId: string
    type: $Enums.LedgerType
    symbol: string
    createdAt?: Date | string
    amount: bigint | number
    reason: $Enums.LedgerReason
  }

  export type LedgerUpdateWithoutBalanceInput = {
    ledgerId?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    symbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    reason?: EnumLedgerReasonFieldUpdateOperationsInput | $Enums.LedgerReason
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type LedgerUncheckedUpdateWithoutBalanceInput = {
    ledgerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    symbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    reason?: EnumLedgerReasonFieldUpdateOperationsInput | $Enums.LedgerReason
  }

  export type LedgerUncheckedUpdateManyWithoutBalanceInput = {
    ledgerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumLedgerTypeFieldUpdateOperationsInput | $Enums.LedgerType
    symbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    reason?: EnumLedgerReasonFieldUpdateOperationsInput | $Enums.LedgerReason
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}