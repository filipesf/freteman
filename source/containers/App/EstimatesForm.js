import React from 'react';
import opts from '../../constants/options';
import Panel from '../../components/Panel';
import Place from './Place';
import PlaceActions from './PlaceActions';
import Withdrawal from './Withdrawal';
import Veicles from './Veicles';
import Select from '../../components/Form/Select';
import RadioGroup from '../../components/Form/RadioGroup';
import Textarea from '../../components/Form/Textarea';
import OrderSummary from '../../components/OrderSummary';

const EstimateForm = props => {
  return (
    <section className="l-estimates__form">
      <Panel>
        <Place point="coleta" />
        <Place point="entrega" />
        <PlaceActions />
      </Panel>

      <Panel title="Horário de Retirada">
        <Withdrawal />
      </Panel>

      <Panel title="Veículo">
        <Veicles />
      </Panel>

      <Panel title="Tipo de serviço">
        <Select id="servico" name="servico" options={opts.services} />
      </Panel>

      <Panel title="Você vai precisar de ajudantes?">
        <RadioGroup block name="ajudantes" options={opts.helpers} />
      </Panel>

      <Panel title="Descreva o que iremos transportar">
        <Textarea id="descricao" placeholder="Será transportado 2 caixas contendo dois motores de carro. O conteúdo das caixas é frágil e precisa de muito cuidado." />
      </Panel>

      <Panel title="Método e local de pagamento">
        <Select location id="pagamento" name="pagamento" options={opts.payMethods} />
        <RadioGroup name="payment" options={opts.pay} />
      </Panel>

      <Panel theme="dark">
        <OrderSummary total={props.order.total} />
      </Panel>

      <button className="c-btn --block --accent --large">FINALIZAR</button>
    </section>
  );
};

export default EstimateForm;
