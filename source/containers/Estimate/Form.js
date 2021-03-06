import React from 'react';
import propTypes from 'prop-types';
import opts from '../../constants/dataOptions';
import Panel from '../../components/Panel';
import Place from './Place';
import AddPlace from './AddPlace';
import Withdrawal from './Withdrawal';
import Vehicles from './Vehicles';
import Select from '../../components/Form/Select';
import RadioGroup from '../../components/Form/RadioGroup';
import Textarea from '../../components/Form/Textarea';
import OrderSummary from '../../components/OrderSummary';

const Form = props => {
  return (
    <form className="l-estimate__form">
      <Panel>
        <Place point="coleta" />
        <Place point="entrega" />
        <AddPlace />
      </Panel>

      <Panel title="Horário de Retirada">
        <Withdrawal />
      </Panel>

      <Panel title="Veículo" tooltip="Selecione o tipo de veículo">
        <Vehicles />
      </Panel>

      <Panel title="Tipo de serviço">
        <Select id="servico" name="servico" options={opts.services} />
      </Panel>

      <Panel title="Você vai precisar de ajudantes?" tooltip="Por favor, especifique quantos ajudantes serão necessários para a realização deste frete">
        <RadioGroup block name="ajudantes" options={opts.helpers} />
      </Panel>

      <Panel title="Descreva o que iremos transportar">
        <Textarea id="descricao" placeholder="Ex: Serão transportadas 2 caixas contendo dois motores de carro. O conteúdo das caixas é frágil e precisa de muito cuidado." />
      </Panel>

      <Panel title="Método e local de pagamento">
        <Select location id="pagamento" name="pagamento" options={opts.payMethods} />
        <RadioGroup name="payment" options={opts.pay} />
      </Panel>

      <Panel theme="dark">
        <OrderSummary total={props.order.total} />
      </Panel>

      <button className="c-btn --block --accent --large">FINALIZAR</button>
    </form>
  );
};

Form.propTypes = {
  order: propTypes.object,
};

export default Form;
