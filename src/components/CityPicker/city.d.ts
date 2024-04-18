interface TYPE_CITY_ITEM {
  n: string;
  c?: TYPE_CITY_ITEM;
}

export type TYPE_CITY = TYPE_CITY_ITEM[];
