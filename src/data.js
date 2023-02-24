// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import AboutImg from '../src/assets/img/about.png';
import Feature1Img from '../src/assets/img/features/feature1.png';
import Feature2Img from '../src/assets/img/features/feature2.png';
import Feature3Img from '../src/assets/img/features/feature3.png';
import Feature4Img from '../src/assets/img/features/feature4.png';
import Avatar1Img from '../src/assets/img/testimonials/avatar1.png';
import Avatar2Img from '../src/assets/img/testimonials/avatar2.png';
import Avatar3Img from '../src/assets/img/testimonials/avatar3.png';
import Avatar4Img from '../src/assets/img/testimonials/avatar4.png';
import Avatar5Img from '../src/assets/img/testimonials/avatar5.png';
import Avatar6Img from '../src/assets/img/testimonials/avatar6.png';
import Avatar7Img from '../src/assets/img/testimonials/avatar7.png';
import Avatar8Img from '../src/assets/img/testimonials/avatar8.png';
import Avatar9Img from '../src/assets/img/testimonials/avatar9.png';

import LogoV2 from '../src/assets/img/logo.png';
import HeroImage from '../src/assets/img/hero-img.png';
import Feature1BgImg from '../src/assets/img/features/feature1_bg.png';
import Feature2BgImg from '../src/assets/img/features/feature2_bg.png';
import Feature3BgImg from '../src/assets/img/features/feature3_bg.png';
import Feature4BgImg from '../src/assets/img/features/feature4_bg.png';

export const navigationData = [
  {
    name: 'Accueil',
    href: '#home',
  },
  {
    name: 'A propos',
    href: '#about',
  },
  {
    name: 'Comment ça marche ?',
    href: '#howItWorks',
  },
  {
    name: 'Notre équipe',
    href: '#team',
  },
  {
    name: 'Contactez-nous',
    href: '#contact',
  },
];

export const heroData = {
  title: `Posez et Profitez`,
  subtitle:
    'Prenez vos livres préférés de votre bibliothèques et Commencez à les écouter avec Read-Turn ',
  btnText: 'Adoptez Read-Turn',
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: 'Comment est né Read Turn ?',
  subtitle:
    'Read Turn est né de l’idée qu’un livre peut être découverte par toutes personnes en soif d’aventure et de connaissances sans que les barrières de la lecture ne puissent les entraver. C\'est donc comme ça que nous avons developpé un dispositif capable de lire un livre à notre place.',
};

export const featuresData = {
  title: 'Comment ça marche ?',
  subtitle:
    'Avec Read Turn dite A Dieu avec la lecture qui fatigue. Choisissez votre bouquin et laissez Read Turn vous plongez dans une nouvelle expérience en lisant le livre à votre place',
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: 'Etape 1',
      description:
        'Commencez par choisir le livre de votre bibliothèque que vous aimeriez lire ',
      linkText: 'Learn more',
      delay: '400',
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: 'Etape 2',
      description:
        'Après avoir choisi votre livre, il vous suffit de le placer dans le compartiment à livre de Read Turn et d\'ouvrir le livre à la page que vous voulez.',
      linkText: 'Learn more',
      delay: '700',
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: 'Etape 3',
      description:
        'Pour écouter votre plus attendre leancez Read Turn',
      linkText: 'Learn more',
      delay: '1300',
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: 'Etape 4',
      description:
        'Profitez de la lecture dans un canapé, un lit et laissez Read Turn lire votre à votre place.',
      linkText: 'Learn more',
      delay: '1000',
    },
  ],
};

export const testimonialsData = [
  {
    image: Avatar4Img,
    name: 'Antoine SARRAZIN',
    web: 'Manager',
    message:
      'Je me suis occupé de la partie recherche de brevets, de la conception de la maquette fonctionnelle (partie CAO)',
    delay: '300',
  },
  {
    image: Avatar5Img,
    name: 'Manal HANINI',
    web: 'Manager',
    message: 'Je me suis occupé de la partie recherche de brevets, ainsi que du marketing du projet, comprenant l’étude de marché',
    delay: '600',
  },
  {
    image: Avatar6Img,
    name: 'Mouhamed GNING',
    web: 'Manager',
    message:
      'Je me suis occupé en premier lieu de l\'Analyse Fonctionnelle Interne du système cherchant la validation du besoin mais aussi du produit, de la conception de la maquette fonctionnelle et de l\'AMDEC',
    delay: '900',
  },
  {
    image: Avatar7Img,
    name: 'Julien BONNEMAY',
    web: 'Manager',
    message:
      'Je me suis occupé de l’Analyse Fonctionnelle de notre produit, de la conception de la maquette fonctionnelle, et du Marketing',
    delay: '1200',
  },
  {
    image: Avatar8Img,
    name: 'Kevin AH THION',
    web: 'Manager',
    message: 'Je me suis occupé de la partie « lecture de textes » de la conception du prototype fonctionnel, comprenant l’utilisation et la création du code nécessaire à l’utilisation d’un OCR.',
    delay: '1500',
  },
  {
    image: Avatar9Img,
    name: 'Lucas NIEPCERON',
    web: 'Manager',
    message: 'Je me suis occupé de la conception de la maquette fonctionnelle, de la rédaction du rapport de la partie « tourner les pages » et la création du support de communication, comprenant la création du logo ainsi que des cartes de visite.',
    delay: '1800',
  },
];

export const ctaData = {
  title: 'Contactez-nous',
  subtitle: 'Adoptez Read Turn',
  btnText1: 'Learn more',
  btnText2: 'Request Demo',
};

export const footerData = {
  logo: LogoV2,
  address: 'Rue Notre Du Lac 49045 Angers - France',
  email: 'readturn@univ-angers.fr',
  phone: '1-232-7788 (Main)',
  list1: [
    {
      name: 'Accueil',
      href: '#',
    },
    {
      name: 'Notre Histoire',
      href: '#',
    },
    {
      name: 'Notre Equipe',
      href: '#',
    },
  ],
  list2: [
    {
      name: 'Support',
      href: '#',
    },
    {
      name: 'Tutoriel',
      href: '#',
    },
    {
      name: 'Guide',
      href: '#',
    },
    {
      name: 'Q & A',
      href: '#',
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: '#',
    },
    {
      icon: <FaInstagram />,
      href: '#',
    },
    {
      icon: <FaGithub />,
      href: '#',
    },
  ],
};

export const copyrightData = {
  text: '© Read-Turn, 2022. All rights reserved.',
  icon: <BsChatDotsFill />,
};
