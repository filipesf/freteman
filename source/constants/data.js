import React from 'react';
import assets from './assets';

const LandingPage = {
  header: {
    hero: assets.img.hero,
    featured: assets.img.featured,
    title: 'Entregamos qualquer coisa em qualquer lugar',
    subtitle: 'Atendemos entregas de mercadorias, cargas, móveis e mudanças.',
  },
  services: {
    title: 'Tipos de serviços',
    subtitle: 'Atuamos em diversas áreas para oferecer a você serviços para qualquer necessidade.',
    content: [{
      image: assets.img.distribution,
      title: "Entrega de produtos",
      subtitle: "Entrega de produtos.",
    }, {
      image: assets.img.house,
      title: "Entrega de produtos",
      subtitle: "Entrega de produtos.",
    }, {
      image: assets.img.generator,
      title: "Entrega de produtos",
      subtitle: "Entrega de produtos.",
    }, {
      image: assets.img.wine,
      title: "Entrega de produtos",
      subtitle: "Entrega de produtos.",
    }, {
      image: assets.img.computer,
      title: "Entrega de produtos",
      subtitle: "Entrega de produtos.",
    }],
  },
  howItWorks: {
    title: 'Como Funciona',
    subtitle: 'Chame um mensageiro em três passos simples',
    content: [{
      icon: assets.icon.box,
      thumb: assets.img.system,
      title: "Faça um pedido pelo sistema da Freteman",
      description: "Escolha o local de coleta e de entrega e forneça detalhes do serviço.",
    }, {
      icon: assets.icon.brand,
      thumb: assets.img.van,
      title: "Encontre-se com o funcionário da Freteman",
      description: "A encomenda é coletada por nosso funcionário e encaminhada até seu destino.",
    }, {
      icon: assets.icon.pin,
      thumb: assets.img.route,
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
  clients: {
    title: 'Clientes Satisfeitos',
    content: [{
      quote: 'A entrega ocorreu como planejada e o pessoal foi extremamente copetente e profissional ao manejar objetos frágeis.',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      name: 'Guilherme Mesquita',
      location: 'São Paulo - SP',
    }, {
      quote: 'A entrega ocorreu como planejada e o pessoal foi extremamente copetente e profissional ao manejar objetos frágeis.',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      name: 'Guilherme Mesquita',
      location: 'São Paulo - SP',
    }, {
      quote: 'A entrega ocorreu como planejada e o pessoal foi extremamente copetente e profissional ao manejar objetos frágeis.',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      name: 'Guilherme Mesquita',
      location: 'São Paulo - SP',
    }],
  },
  brands: {
    title: 'Marcas',
    subtitle: 'Atuamos em diversas áreas para oferecer a você serviços para qualquer necessidade.',
    content: [
      { image: assets.img.latam },
      { image: assets.img.petrobras },
      { image: assets.img.vivo },
      { image: assets.img.reclameaqui },
      { image: assets.img.consul },
    ],
  }
};

export default LandingPage;
