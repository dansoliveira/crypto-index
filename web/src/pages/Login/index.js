import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import Button from "../../components/Button";
import Container from "../../components/Container";
import Field from "../../components/Field";
import Form from "../../components/Form";

import session from '../../repositories/session';

const Login = () => {
  const {
    register,
    handleSubmit
  } = useForm();

  async function handleLogin(data) {
    const { email, password } = data;

    try {
      const response = await session.login({
        email,
        password,
      });

      localStorage.setItem('token', response.data.token)
    } catch (err) {
      const { message } = err.response.data;

      toast.error(message);
    }
  }

  return (
    <Container>
      <Form id="login-form" onSubmit={handleSubmit(handleLogin)}>
        <Field
          label="Email"
          inputProps={{
            name: 'email',
            ref: register,
          }}
        />
        <Field
          label="Senha"
          inputProps={{
            type: 'password',
            name: 'password',
            ref: register,
          }}
        />
      </Form>
      <Button type="submit" form="login-form">
        ENTRAR
      </Button>
    </Container>
  )
}

export default Login;
