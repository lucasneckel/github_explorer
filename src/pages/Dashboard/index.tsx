import React from 'react';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';
import Repository from '../Repository';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore respositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/62622868?s=460&u=0445e1d72a2f81bfe119069442a6462553c7808d&v=4"
            alt="Lucas Neckel"
          />
          <div>
            <strong>Rockertseat uniform</strong>
          </div>
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
