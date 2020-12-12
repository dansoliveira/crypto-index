import fs from 'fs';
import { resolve } from 'path';

interface CurrenciesDTO {
  [key: string]: string;
}

class GetCurrenciesService {
  private currenciesPath: string;

  constructor() {
    this.currenciesPath = resolve(
      __dirname,
      '..',
      'helpers',
      'currencies.json',
    );
  }

  public execute(): CurrenciesDTO {
    const currencies = fs.readFileSync(this.currenciesPath, {
      encoding: 'utf-8',
    });
    const currenciesParsed: CurrenciesDTO = JSON.parse(currencies);

    return currenciesParsed;
  }
}

export default GetCurrenciesService;
