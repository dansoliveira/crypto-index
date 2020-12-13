# Crypto Index Web
Este é o front-end web do Crypto Index.

## Características

Todo acesso a uma rota não autenticada será redirecionada para a tela de login, além de ter o retorno da API exibido em uma notificação do lado superior direito.

Demais informações de uso que correspondem a validações e funcionamento dos endpoints podem ser encontrados no [readme da API](https://github.com/dansoliveira/crypto-index/blob/main/api/README.md).

## Primeiros passos
Instale as dependências rodando o comando `yarn` na raiz do projeto.

Faça uma cópia do arquivo `.env.example` renomeando para `.env.local`
```bash
cp .env.example .env.local
```

Troque as informações dentro do arquivo para a URL da API. Para este projeto, a porta default é a `3333`, além do sufixo `/api` na url, obrigatório para acessar os demais endpoints.
```
REACT_APP_API_BASE_URL=http://localhost:3333/api
```

Inicie a aplicação (irá abrir por default na url `http://localhost:3000`)
```
yarn start
```
