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
      href: '/servicos'
    }, {
      text: 'Cidades Atendidas',
      href: '#Cidades-Atendidas'
    }, {
      text: 'Seja um Fleetman',
      href: '#Seja-um-Fleetman'
    }]
  }, {
    title : 'Fleetman',
    list: [{
      text: 'Seja um Fleetman',
      href: '#Seja-um-Fleetman'
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
      href: '/faq'
    }, {
      text: 'Entre em contato',
      href: '/contato'
    }]
  }],
  contact: {
    phone: '(48) 99999-9999',
    email: 'contato@fleetman.com.br',
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
