// Importa o pacot Intl que ainda não é disponível no Android
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  );
}