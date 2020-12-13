import { inject, injectable } from 'tsyringe';
import { INetwork } from '../../network/INetwork';
import GetCurrenciesCalculatedService from '../../services/GetCurrenciesCalculatedService';
import {
  IBitcoinPriceIndex,
  BitcoinCurrentPrice,
  BitcoinPriceIndex,
} from '../IBitcoinPriceIndex';

@injectable()
class CoindeskBitcoinPriceIndex implements IBitcoinPriceIndex {
  constructor(
    @inject('GetCurrenciesCalculatedService')
    private getCurrenciesCalculatedService: GetCurrenciesCalculatedService,
    @inject('INetwork')
    private network: INetwork,
  ) {}

  async getCurrentPrice(): Promise<BitcoinCurrentPrice> {
    try {
      const { data: bitcoinPrice } = await this.network.get({
        url: 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json',
      });

      const { bpi }: Record<string, BitcoinPriceIndex> = bitcoinPrice;

      const currencies = this.getCurrenciesCalculatedService.execute(
        bpi.USD.rate_float,
      );
      const bitcoinPriceIndex = {
        ...bpi,
        ...currencies,
      };

      return {
        ...bitcoinPrice,
        bpi: bitcoinPriceIndex,
      };
    } catch (err) {
      throw new Error('API coindesk indisponível');
    }
  }
}

export default CoindeskBitcoinPriceIndex;
