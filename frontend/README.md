# Principais Comandos React

- [Comandos](#comandos)
- [Create React App](#create-react-app)
- [Componentes](#componentes)
- [Props](#props)
- [State](#state)
- [Hooks](#hooks)
- [Context API](#context-api)
- [Ciclo de Vida](#ciclo-de-vida)
- [Eventos](#eventos)
- [Formulários](#formulários)
- [Estilização](#estilização)
- [Rotas](#rotas)
- [Requisições HTTP](#requisições-http)
- [Testes](#testes)
- [Deploy](#deploy)

## Comandos

- `npx create-react-app nome-do-projeto` - Cria um novo projeto React.
- `npm start` - Inicia o servidor de desenvolvimento.
- `npm run build` - Gera a versão de produção.
- `npm test` - Executa os testes.
- `npm run eject` - Ejeta o projeto do Create React App.

## Create React App

O Create React App é uma ferramenta que facilita a criação de um projeto React. Ele configura o ambiente de desenvolvimento com Webpack, Babel, ESLint e outros.

Para criar um novo projeto, execute o comando:

```bash
npx create-react-app nome-do-projeto
```

## Componentes

Componentes são blocos de construção de uma aplicação React. Eles podem ser funções ou classes que retornam elementos React.

```jsx
// Função
function Componente() {
  return <h1>Olá, mundo!</h1>;
}

// Classe

class Componente extends React.Component {
  render() {
    return <h1>Olá, mundo!</h1>;
  }
}
```

## Props

Props são propriedades que um componente pai passa para um componente filho. Elas são somente leitura e não podem ser modificadas pelo componente filho.

```jsx
function Saudacao(props) {
  return <h1>Olá, {props.nome}!</h1>;
}

function App() {
  return <Saudacao nome="Mundo" />;
}
```

## State

State é um objeto que representa o estado interno de um componente. Ele pode ser modificado pelo próprio componente e é utilizado para renderizar a interface de acordo com as mudanças.

```jsx
class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }

  incrementar() {
    this.setState({ contador: this.state.contador + 1 });
  }

  render() {
    return (
      <div>
        <p>Contador: {this.state.contador}</p>
        <button onClick={() => this.incrementar()}>Incrementar</button>
      </div>
    );
  }
}
```

## Hooks


Hooks são funções que permitem adicionar funcionalidades de componentes de classe em componentes funcionais. Eles são introduzidos no React 16.8.

```jsx
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
```

## Context API

A Context API é uma forma de compartilhar dados entre componentes sem a necessidade de passar props manualmente em cada nível da árvore de componentes.

```jsx

const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <ThemeContext.Consumer>
      {theme => <Button theme={theme} />}
    </ThemeContext.Consumer>
  );
}
```

## Ciclo de Vida

Os componentes React possuem métodos de ciclo de vida que são executados em diferentes fases do ciclo de vida de um componente.

```jsx
class App extends
React.Component {
  componentDidMount() {
    console.log('O componente foi montado');
  }

  componentWillUnmount() {
    console.log('O componente foi desmontado');
  }

  render() {
    return <h1>Olá, mundo!</h1>;
  }
}
```

## Eventos

Eventos são ações que ocorrem em resposta a interações do usuário, como cliques, teclas pressionadas e movimentos do mouse.

```jsx

function Botao() {
  function handleClick() {
    console.log('O botão foi clicado');
  }

  return <button onClick={handleClick}>Clique aqui</button>;
}
```

## Formulários

Os formulários em React funcionam de forma semelhante aos formulários HTML, mas com algumas diferenças importantes.

```jsx

function Formulario() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Formulário enviado');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

## Estilização

A estilização de componentes em React pode ser feita de várias formas, como CSS puro, CSS-in-JS e bibliotecas de estilos.

```jsx
function Estilizado() {
  return <h1 style={{ color: 'red', fontSize: '24px' }}>Estilizado</h1>;
}
```

## Rotas

As rotas em React são utilizadas para navegar entre diferentes páginas ou componentes da aplicação.

```jsx
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/sobre" component={Sobre} />
      </div>
    </Router>
  );
}
```

## Requisições HTTP

As requisições HTTP em React podem ser feitas utilizando a API Fetch, Axios ou outras bibliotecas de requisições.

```jsx
import React, { useEffect, useState } from 'react';

function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/dados')
      .then(response => response.json())
      .then(data => setDados(data));
  }, []);

  return <ul>{dados.map(item => <li key={item.id}>{item.nome}</li>)}</ul>;
}
```

## Testes

Os testes em React podem ser feitos utilizando ferramentas como Jest, React Testing Library e Enzyme.

```jsx
import { render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

## Deploy

O deploy de uma aplicação React pode ser feito em diversos serviços de hospedagem, como Netlify, Vercel, GitHub Pages e AWS.

Para gerar a versão de produção, execute o comando:

```bash
npm run build
```

Em seguida, faça o deploy dos arquivos gerados na pasta `build`.

