import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Field from "../../components/Field";
import Form from "../../components/Form";
import currencies from "../../repositories/currencies";
import { Header } from "./styles";

function UpdateCurrencies() {
  const history = useHistory();
  const {
    register,
    handleSubmit
  } = useForm();
  const [currencyOptions, setCurrencyOptions] = useState([
    {
      label: 'BRL',
    },
    {
      label: 'EUR',
    },
    {
      label: 'CAD',
    }
  ]);
  const [currentOption, setCurrentOption] = useState({});
  
  useEffect(() => {
    fetchCurrencies();
  }, []);

  async function fetchCurrencies() {
    try {
      const { data } = await currencies.get();

      const options = Object.entries(data).map(currency => {
        const [label, value] = currency;

        return {
          label,
          value,
        };
      });

      setCurrencyOptions(options);
      updateCurrentOption();
    } catch (err) {
      const { message } = err.response.data;

      toast.error(message);
    }
  }

  function updateCurrentOption(el) {
    const element = el || document.getElementById('currency');
    const optionNode = element.selectedOptions[0];
    
    setCurrentOption({
      label: optionNode.label,
      value: optionNode.value,
    });
  }

  async function handleUpdateCurrency(data) {
    try {
      const response = await currencies.post({
        currency: currentOption.label,
        value: data.newCurrencyValue,
      });
      
      const { message } = response.data;

      toast.success(message);
      
      history.goBack();
    } catch (err) {
      const { message } = err.response.data;

      toast.error(message);
    }
  }

  return (
    <Container>
      <Header>
        <Button.Secondary
          onClick={() => {
            history.goBack();
          }}
        >
          Voltar
        </Button.Secondary>
     </Header>
      <Form id="update-currencies-form" onSubmit={handleSubmit(handleUpdateCurrency)}>
        <Field.Select
          label="Moeda"
          inputProps={{
            id: 'currency',
            options: currencyOptions,
            onChange: event => {
              updateCurrentOption(event.target);
            },
          }}
        />
        <Field.InlineView
          label="Valor atual:"
          value={currentOption.value && Number(currentOption.value).toLocaleString('en-US', {
            style: 'currency',
            currency: currentOption.label,
          })}
        />
        <Field
          label="Novo valor"
          inputProps={{
            type: 'number',
            min: 0,
            step: '0.01',
            name: 'newCurrencyValue',
            ref: register,
          }}
        />
      </Form>
      <Button type="submit" form="update-currencies-form">
        ATUALIZAR
      </Button>
    </Container>
  );
}

export default UpdateCurrencies;
