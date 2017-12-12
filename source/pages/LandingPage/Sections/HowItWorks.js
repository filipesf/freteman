import React from 'react';
import SVG from 'react-svg-inline';

/* CONTAINERS
   ========================================================================== */
import Section   from '../../../containers/Section';



/* COMPONENTS
   ========================================================================== */
import Headline from '../../../components/Headline';



/* ASSETS
   ========================================================================== */
import order    from '../../../assets/images/howitworks-1.png';
import employee from '../../../assets/images/howitworks-2.png';
import destiny  from '../../../assets/images/howitworks-3.png';
import pin  from '../../../assets/images/icons/pin.svg';
import './howitworks.scss';





/* ==========================================================================
   HOW IT WORKS
   ========================================================================== */
const HowItWorks = () =>
  <Section>
    <Headline
      title="Como Funciona"
      subtitle="Chame um mensageiro em três passos simples"
    />

    <div className="c-carousel">
      <input className="c-carousel__controller" type="radio" id="howitworks-1" name="carousel" defaultChecked />
      <input className="c-carousel__controller" type="radio" id="howitworks-2" name="carousel" />
      <input className="c-carousel__controller" type="radio" id="howitworks-3" name="carousel" />
      <ul className="c-carousel__details">
        <li className="c-media">
          <SVG svg={pin} />
          <label htmlFor="howitworks-1">
            <h4 className="title">Faça um pedido pelo sistema da Freteman</h4>
            <p className="description">Escolha o local de coleta e de entrega e forneça detalhes do serviço.</p>
          </label>
        </li>
        <li className="c-media">
          <SVG svg={pin} />
          <label htmlFor="howitworks-2">
            <h4 className="title">Encontre-se com o funcionário da Freteman</h4>
            <p className="description">A encomenda é coletada por nosso funcionário e encaminhada até seu destino.</p>
          </label>
        </li>
        <li className="c-media">
          <SVG svg={pin} />
          <label htmlFor="howitworks-3">
            <h4 className="title">Seu material é entregue ao destino escolhido</h4>
            <p className="description">Sua encomenda chega nas mãos do destinário e você pode acompanhar tudo pelo sistema.</p>
          </label>
        </li>
      </ul>
      <ul className="c-carousel__items">
        <li className="c-carousel__item"><img src={order} alt="" /></li>
        <li className="c-carousel__item"><img src={employee} alt="" /></li>
        <li className="c-carousel__item"><img src={destiny} alt="" /></li>
      </ul>
       <div className="c-bullet-list">
         <label className="bullet" htmlFor="howitworks-1"></label>
         <label className="bullet" htmlFor="howitworks-2"></label>
         <label className="bullet" htmlFor="howitworks-3"></label>
       </div>
    </div>
  </Section>

export default HowItWorks;
