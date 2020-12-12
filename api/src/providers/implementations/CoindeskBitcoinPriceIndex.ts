import { INetwork } from '../../network/INetwork';
import GetCurrenciesCalculatedService from '../../services/GetCurrenciesCalculatedService';
import {
  IBitcoinPriceIndex,
  BitcoinCurrentPrice,
  BitcoinPriceIndex,
} from '../IBitcoinPriceIndex';

class CoindeskBitcoinPriceIndex implements IBitcoinPriceIndex {
  constructor(
    private getCurrenciesCalculatedService: GetCurrenciesCalculatedService,
    private network: INetwork,
  ) {}

  async getCurrentPrice(): Promise<BitcoinCurrentPrice> {
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
  }
}

export default CoindeskBitcoinPriceIndex;
