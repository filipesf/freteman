import assets from './assets';

const HomeData = {
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
  customers: {
    title: 'Clientes Satisfeitos',
    content: [{
      testimonial: 'A entrega ocorreu como planejada e o pessoal foi extremamente copetente e profissional ao manejar objetos frágeis.',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      name: 'Guilherme Mesquita',
      location: 'São Paulo - SP',
    }, {
      testimonial: 'A entrega ocorreu como planejada e o pessoal foi extremamente copetente e profissional ao manejar objetos frágeis.',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      name: 'Guilherme Mesquita',
      location: 'São Paulo - SP',
    }, {
      testimonial: 'A entrega ocorreu como planejada e o pessoal foi extremamente copetente e profissional ao manejar objetos frágeis.',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      name: 'Guilherme Mesquita',
      location: 'São Paulo - SP',
    }],
  },
  clients: {
    title: 'Marcas',
    subtitle: 'Atuamos em diversas áreas para oferecer a você serviços para qualquer necessidade.',
    content: [
      { image: assets.img.latam },
      { image: assets.img.petrobras },
      { image: assets.img.vivo },
      { image: assets.img.reclameaqui },
      { image: assets.img.consul },
    ],
  },
  footer: {
    customerService: {
      image: assets.img.man,
      title: 'Nós estamos aqui para ajudar. Fale conosco.'
    },
    subNavs: [{
      title : 'Empresa',
      list: [{
        text: 'Serviços',
        href: '#Servicos'
      }, {
        text: 'Cidades Atendidas',
        href: '#Cidades-Atendidas'
      }, {
        text: 'Seja um Freteman',
        href: '#Seja-um-Freteman'
      }]
    }, {
      title : 'Freteman',
      list: [{
        text: 'Seja um Freteman',
        href: '#Seja-um-Freteman'
      }]
    }, {
      title : 'Sobre',
      list: [{
        text: 'Trabalhe Conosco',
        href: '#Trabalhe-Conosco'
      }, {
        text: 'Blog',
        href: '#Blog'
      }]
    }, {
      title : 'Dúvidas?',
      list: [{
        text: 'Perguntas Frequentes',
        href: '#Perguntas-Frequentes'
      }, {
        text: 'Entre em contato',
        href: '#Entre-em-contato'
      }]
    }],
    contact: {
      phone: '(11) 93944-1232',
      email: 'contato@freteman.com.br',
      socialLinks: [{
        href: '#Facebook',
        icon: assets.icon.fb,
      }, {
        href: '#Instagram',
        icon: assets.icon.ig,
      }, {
        href: '#Linkedin',
        icon: assets.icon.in,
      }]
    }
  }
};

export default HomeData;
