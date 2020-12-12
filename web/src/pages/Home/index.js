import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Button from "../../components/Button";
import Container from "../../components/Container";
import Field from "../../components/Field";
import { OthersCurrencies } from "./styles";
import bitcoinIndex from '../../repositories/bitcoinIndex';

function Home() {
  const [currencies, setCurrencies] = useState({});
  
  useEffect(() => {
    fetchBitcoiIndex();
  }, []);

  async function fetchBitcoiIndex() {
    try {
      const { data } = await bitcoinIndex.get();

      setCurrencies(data.bpi);
    } catch (err) {
      const { message } = err.response.data;

      toast.error(message);
    }
  }

  function updateCurrencies(bitcoinRate) {
    console.log(currencies);
    const newCurrencies = {};
    
    Object.values(currencies).forEach(currency => {
      if (currency.code === 'BTC') {
        newCurrencies[currency.code] = currency;
        return;
      };

      const newRate = currency.rate_float * bitcoinRate;

      currency.rate = newRate.toLocaleString('en-US', {
        maximumFractionDigits: 4,
      })

      newCurrencies[currency.code] = currency;
    });

    setCurrencies({
      ...newCurrencies,
    });
  }
  
  return (
    <Container>
      <Button.Secondary>
        Atualizar valor monetário
      </Button.Secondary>
      <Field.Secondary
        label="BTC"
        value={currencies.BTC?.rate_float}
        inputProps={{
          type: 'number',
          onKeyPress: (event) => {
            const character = String.fromCharCode(event.which);
            const decimalSeparators = ['.', ','];
            const isDecimalSeparator = decimalSeparators.includes(character);

            if (
                isNaN(character) &&
                !isDecimalSeparator
            ) {
              return event.preventDefault();
            }

            const content = event.target.innerText;

            const containsAlmostOneDecimalSeparator = decimalSeparators
              .filter(separator => content.includes(separator)).length > 0;

            if (isDecimalSeparator && containsAlmostOneDecimalSeparator) {
              return event.preventDefault();
            }
              
          },
          onInput: event => {
            const content = event.target.innerText;

            const sanitizedContent = content.replace(',', '.');

            updateCurrencies(sanitizedContent);
          }
        }}
      />
      <OthersCurrencies>
        <Field.Secondary
          label="USD"
          inputProps={{
            viewMode: true,
          }}
          value={currencies.USD?.rate}
        />
        <Field.Secondary
          label="BRL"
          inputProps={{
            viewMode: true,
          }}
          value={currencies.BRL?.rate}
        />
        <Field.Secondary
          label="EUR"
          inputProps={{
            viewMode: true,
          }}
          value={currencies.EUR?.rate}
        />
        <Field.Secondary
          label="CAD"
          inputProps={{
            viewMode: true,
          }}
          value={currencies.CAD?.rate}
        />
      </OthersCurrencies>
    </Container>
  )
}

export default Home;
