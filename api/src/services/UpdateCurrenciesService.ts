import fs from 'fs';
import { resolve } from 'path';
import * as yup from 'yup';

interface CurrenciesDTO {
  [key: string]: string;
}

interface UpdateCurrenciesDTO {
  currency: string;
  value: string;
}

class UpdateCurrenciesService {
  private currenciesPath: string;

  private allowedCurrencies: string[];

  constructor() {
    this.currenciesPath = resolve(
      __dirname,
      '..',
      'helpers',
      'currencies.json',
    );
    this.allowedCurrencies = ['BRL', 'EUR', 'CAD'];
  }

  public async execute({
    currency,
    value,
  }: UpdateCurrenciesDTO): Promise<void> {
    try {
      const schema = yup.object().shape({
        currency: yup.string().required().oneOf(this.allowedCurrencies),
        value: yup.number().required().positive(),
      });

      await schema.validate({
        currency,
        value,
      });
    } catch (err) {
      if (err.path === 'value') {
        throw new Error('Valor inválido');
      } else {
        throw new Error('Moeda inválida');
      }
    }
    const currencies = fs.readFileSync(this.currenciesPath, {
      encoding: 'utf-8',
    });
    const currenciesParsed: CurrenciesDTO = JSON.parse(currencies);

    currenciesParsed[currency] = value.toString();

    fs.writeFileSync(this.currenciesPath, JSON.stringify(currenciesParsed));
  }
}

export default UpdateCurrenciesService;
