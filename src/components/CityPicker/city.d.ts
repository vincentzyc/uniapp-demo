

interface TYPE_CITY_ITEM {
  n: string;
  c?: TYPE_CITY_ITEM;
}

// export type TYPE_CITY = TYPE_CITY_ITEM[];


// declare module './city' {
//   export type TYPE_CITY = TYPE_CITY_ITEM[];
// }

declare module './city.js' {
  export const CITY: TYPE_CITY_ITEM[];
}
