import assets from './assets';
import dataServices from './dataServices';
import dataClients from './dataClients';
import dataTestimonials from './dataTestimonials';

const dataHome = {
  header: {
    hero: assets.img.hero,
    featured: assets.img.featured2x,
    title: 'Entregamos qualquer coisa em qualquer lugar',
    subtitle: 'Atendemos entregas de mercadorias, cargas, móveis e mudanças.',
  },
  services: dataServices,
  howItWorks: {
    title: 'Como Funciona',
    subtitle: 'Chame um mensageiro em três passos simples',
    content: [{
      icon: assets.icon.box,
      thumb: assets.img.scSystem,
      title: "Faça um pedido pelo sistema da Fleetman",
      description: "Escolha o local de coleta e de entrega e forneça detalhes do serviço.",
    }, {
      icon: assets.icon.brand,
      thumb: assets.img.scVan,
      title: "Encontre-se com o funcionário da Fleetman",
      description: "A encomenda é coletada por nosso funcionário e encaminhada até seu destino.",
    }, {
      icon: assets.icon.pin,
      thumb: assets.img.scRoute,
      title: "Seu material é entregue ao destino escolhido",
      description: "Sua encomenda chega nas mãos do destinário e você pode acompanhar tudo pelo sistema.",
    }],
  },
  benefits: {
    title: 'Benefícios',
    subtitle: 'Atuamos em diversas áreas para oferecer a você serviços para qualquer necessidade.',
    content: [{
      image: assets.img.timer,
      title: "Sua entrega feita em até 120 minutos",
    }, {
      image: assets.img.pricing,
      title: "Cotação instantânea e transparente, reserva imediata",
    }, {
      image: assets.img.wineShield,
      title: "Suas coisas protegidas com seguro",
    }],
  },
  customers: {
    title: 'Clientes Satisfeitos',
    content: dataTestimonials,
  },
  clients: dataClients
};

export default dataHome;
