import fs from 'fs';
import { resolve } from 'path';
import { BitcoinPriceIndex } from '../providers/IBitcoinPriceIndex';

interface CurrenciesDescription {
  [key: string]: string;
}

interface CurrenciesDTO {
  [key: string]: string;
}

class GetCurrenciesCalculatedService {
  private currenciesPath: string;

  private currenciesDescription: CurrenciesDescription;

  private maximumFractionDigits = 4;

  constructor() {
    this.currenciesPath = resolve(
      __dirname,
      '..',
      'helpers',
      'currencies.json',
    );
    this.currenciesDescription = {
      BRL: 'Brazilian Real',
      EUR: 'Euro',
      CAD: 'Canadian Dollar',
    };
  }

  public execute(usdRateFloat: number): BitcoinPriceIndex {
    const currencies = fs.readFileSync(this.currenciesPath, {
      encoding: 'utf-8',
    });
    const currenciesParsed: CurrenciesDTO = JSON.parse(currencies);
    const bitcoinPriceIndex: BitcoinPriceIndex = {};

    Object.entries(currenciesParsed).forEach(exchange => {
      const [code, rate] = exchange;
      const rateFloat = parseFloat(
        (parseFloat(rate) * usdRateFloat).toFixed(this.maximumFractionDigits),
      );
      const rateFloatFormatted = rateFloat.toLocaleString('en-US', {
        maximumFractionDigits: this.maximumFractionDigits,
      });

      bitcoinPriceIndex[code] = {
        code,
        rate: rateFloatFormatted,
        description: this.currenciesDescription[code],
        rate_float: rateFloat,
      };
    });

    return bitcoinPriceIndex;
  }
}

export default GetCurrenciesCalculatedService;
