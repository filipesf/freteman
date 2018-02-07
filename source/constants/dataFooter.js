import assets from './assets';

const dataFooter = {
  customerService: {
    image: assets.img.man,
    title: 'Nós estamos aqui para ajudar. Fale conosco.'
  },
  navs: [{
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
};

export default dataFooter;
