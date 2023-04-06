import { ana, carlos, joao, maria } from '@/assets';
import {
  AiOutlineHeart,
  AiOutlineInstagram,
  AiOutlineLock,
} from 'react-icons/ai';
import { MdComputer } from 'react-icons/md';
import { SlSocialLinkedin, SlSocialTwitter } from 'react-icons/sl';

const heart = <AiOutlineHeart />,
  locker = <AiOutlineLock />,
  computer = <MdComputer />,
  instagram = <AiOutlineInstagram />,
  linkedin = <SlSocialLinkedin />,
  twitter = <SlSocialTwitter />;

export const navLinks = [
  { name: 'Diferenciais', url: '#resources' },
  { name: 'Programa de pontos', url: '#rewards' },
  { name: 'Depoimentos', url: '#testimonials' },
];

export const header = {
  title: 'Seja Digital Seja DSF Bank',
  subtitle:
    'Somos a união da tecnologia com a confiança que você procura em um banco. Nós oferecemos serviços bancários digitais seguros e inovadores, para ajudar você a se conectar com o futuro financeiro e aproveitar cada oportunidade.',
  caption: '__ confiado por milhões de usuários',
};

export const experience = [
  {
    title: '10M',
    subtitle:
      'De usuários satisfeitos que confiam no DSF como seu banco digital de escolha.',
    color: 'blue',
  },
  {
    title: '6 +',
    subtitle:
      'Anos de experiência oferecendo serviços bancários inovadores, seguros e confiáveis.',
    color: 'orange',
  },
];

export const resources = {
  title: 'Nossos Diferenciais',
  subtitle:
    'Conheça os recursos que nos diferenciam dos demais bancos e como estamos comprometidos em oferecer a você a melhor experiência financeira possível.',
  list: [
    {
      icon: locker,
      title: 'Segurança de ponta a ponta',
      subtitle:
        'Conte com a mais avançada tecnologia de segurança para total segurança dos seus dados.',
    },
    {
      icon: computer,
      title: 'Experiência de usuário inovadora',
      subtitle:
        'Estamos sempre empenhados em tornar a interação com nossos serviços o mais fácil e agradável possível.',
    },
    {
      icon: heart,
      title: 'Atendimento excepcional',
      subtitle:
        'Nossa equipe está pronta para ajudá-lo a solucionar qualquer dúvida ou problema,',
    },
  ],
};

export const rewards = {
  title: 'DSF Rewards - O Programa de Pontos DSF Bank',
  list: [
    {
      title: 'Acumule pontos e troque por vantagens',
      subtitle:
        'Com o DSF Rewards você acumule pontos a cada real gasto, podendo trocá-los por passagens aéreas e vantagens exclusivas em nossa loja virtual.',
    },
    {
      title: 'Como funciona',
      subtitle:
        'Você acumula pontos a cada transação realizada com seu cartão de crédito. Além disso, quanto mais você usar os serviços do DSF Bank, mais pontos acumula. É simples assim!',
    },
  ],
};

export const testimonials = {
  title: 'O que nossos clientes estão dizendo',
  list: [
    {
      avatar: ana,
      name: 'Ana Silva',
      role: 'Advogada',
      comment:
        'Adorei a praticidade do aplicativo do DSF Bank. Tudo o que eu preciso está ali na tela do meu celular, sem complicação.',
    },
    {
      avatar: joao,
      name: 'João Santos',
      role: 'Empresário',
      comment:
        'O programa de pontos do DSF Bank é incrível! Com os pontos que acumulo nas minhas transações, posso fazer compras em lojas parceiras. É uma ótima maneira de economizar!',
    },
    {
      avatar: maria,
      name: 'Maria Ferreira',
      role: 'Estudante',
      comment:
        'Estava procurando por um banco digital seguro e confiável e encontrei o DSF Bank. Amei a facilidade de abrir uma conta e agora faço todas as minhas transações pelo aplicativo.',
    },
    {
      avatar: carlos,
      name: 'Carlos Gomes',
      role: 'Designer gráfico',
      comment:
        'Eu estava cansado de ter que ir até o banco toda semana para resolver minhas pendências. Com o DSF Bank, agora consigo fazer tudo pelo celular, de forma prática e segura.',
    },
  ],
};

export const footer = {
  description: 'Transformando vidas com tecnologia e inovação.',
  links: [
    { name: 'Perguntas frequentes', url: '#' },
    { name: 'Política de Privacidade', url: '#' },
    { name: 'Termos de Uso', url: '#' },
    { name: 'Trabalhe Conosco', url: '#' },
    { name: 'Fale Conosco', url: '#' },
  ],
  contact: [
    'contato@dsfbank.com.br',
    '(00) 1234-5678',
    'Rua Fictícia, 1234, Bairro Fictício, Cidade Fictícia - Estado Fictício',
  ],
  copy: 'Copyright © 2023 DSF Bank. Todos os direitos reservados.',
  social: [
    { component: instagram, url: '#' },
    { component: twitter, url: '#' },
    { component: linkedin, url: '#' },
  ],
};
