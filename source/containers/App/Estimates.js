import React from 'react';
import Panel from '../../components/Panel';
import opts from '../../constants/options';
import RadioGroup from '../../components/Form/RadioGroup';
import InputText from '../../components/Form/InputText';
import Textarea from '../../components/Form/Textarea';
import Place from './Place';
import Veicles from './Veicles';
import "../../components/Button";
import './assets/estimates.scss';

class Estimates extends React.Component {
  render() {
    return (
      <section className="l-estimates">
        <section className="l-estimates__group">
          <Panel>
            <Place point="coleta" />
            <Place point="entrega" />
          </Panel>

          <Panel title="Horário de Retirada" />
          <Panel title="Veículo">
            <Veicles />
          </Panel>

          <Panel title="Tipo de serviço">
            <InputText id="tipo-de-servico" placeholder="Cargas e encomendas" />
          </Panel>

          <Panel title="Você vai precisar de ajudantes?">
            <RadioGroup block name="ajudantes" options={opts.helpers} />
          </Panel>

          <Panel title="Descreva o que iremos transportar">
            <Textarea id="descricao" placeholder="Será transportado 2 caixas contendo dois motores de carro. O conteúdo das caixas é frágil e precisa de muito cuidado." />
          </Panel>

          <Panel title="Método e local de pagamento">
            <InputText id="pagamento" placeholder="R. Andaraí, Vila Mariana, 123 - São Paulo, SP" />
            <RadioGroup name="payment" options={opts.pay} />
          </Panel>

          <Panel theme="dark">
            <ul className="l-order-summary">
              <li className="c-order-item">
                <span className="c-order-item__name --large">Valor Total</span>
                <span className="c-order-item__value --large">R$ 1264,00</span>
              </li>
            </ul>
          </Panel>

          <button className="c-btn --accent --large">Finalizar</button>
        </section>

        <section>
          <Panel><div /></Panel>
        </section>
      </section>
    );
  }
}

export default Estimates;
