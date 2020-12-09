export interface Exchange {
  code: string;
  rate: string;
  description: string;
  rate_float: number;
}

export interface Time {
  updated: string;
  updatedISO: string;
  updateuk: string;
}

export interface BitcoinPriceIndex {
  [key: string]: Exchange;
}

export interface BitcoinCurrentPrice {
  time: Time;
  disclaimer: string;
  bpi: BitcoinPriceIndex;
}

export interface IBitcoinPriceIndex {
  getCurrentPrice(): Promise<BitcoinCurrentPrice>;
}
