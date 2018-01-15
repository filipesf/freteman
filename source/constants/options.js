import assets from './assets';

const opts = {
  yN: [{
    id: 'sim',
    label: 'Sim',
    value: 'Sim'
  }, {
    id: 'nao',
    label: 'Não',
    value: 'Não'
  }],
  floors: [
    { id: 'terreo', label: 'Térreo', value: 0 },
    { id: '1º', label: '1º', value: 1 },
    { id: '2º', label: '2º', value: 2 },
    { id: '3º', label: '3º', value: 3 },
    { id: '4º', label: '4º', value: 4 },
    { id: '5º', label: '5º', value: 5 },
    { id: '6º', label: '6º', value: 6 },
    { id: '7º', label: '7º', value: 7 },
    { id: '8º', label: '8º', value: 8 },
    { id: '9º', label: '9º', value: 9 },
    { id: '10º', label: '10º', value: 10 },
  ],
  pay: [{
    id: 'money',
    label: 'Dinheiro',
    value: 'Dinheiro'
  }, {
    id: 'ccard',
    label: 'Cartão de Crédito',
    value: 'Cartão de Crédito'
  }],
  helpers: [{
    id: 'motorista-nao-ajuda',
    value: 'O motorista não carregará coisas',
    label: 'O motorista não carregará coisas',
    icon: assets.icon.helpers0
  }, {
    id: 'motorista-ajuda',
    value: 'O motorista irá ajudar no transporte',
    label: 'O motorista irá ajudar no transporte',
    icon: assets.icon.helpers1
  }, {
    id: 'motorista-1-ajudante',
    value: 'Motorista + 1 Ajudante',
    label: 'Motorista + 1 Ajudante',
    icon: assets.icon.helpers2
  }, {
    id: 'motorista-2-ajudantes',
    value: 'Motorista + 2 Ajudantes',
    label: 'Motorista + 2 Ajudantes',
    icon: assets.icon.helpers3
  }],
  services: [{
    id: 'cargas-e-encomendas',
    label: 'Cargas e encomendas',
    value: 'Cargas e encomendas'
  }],
  payMethods: [{
    id: 'pagamento-coleta',
    label: 'R. Andaraí, Vila Mariana, 123 - São Paulo, SP',
    value: 'R. Andaraí, Vila Mariana, 123 - São Paulo, SP'
  }, {
    id: 'pagamento-entrega',
    label: 'R. Conselheiro Cotegipe, Belenzinho, 123 - São Paulo, SP',
    value: 'R. Conselheiro Cotegipe, Belenzinho, 123 - São Paulo, SP'
  }]
};

export default opts;
