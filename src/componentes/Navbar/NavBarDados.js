import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as TablerIcons from 'react-icons/tb';

export const NavBarDados = [
  {
    title: 'Sorteador',
    path: '/',
    icon: < TablerIcons.TbNumbers />,
    cName: 'nav-text'
  },
  {
    title: 'Relógio',
    path: '/relogio',
    icon: <IoIcons.IoMdTime />,
    cName: 'nav-text'
  },
  {
    title: 'Listar Usuários',
    path: '/listar-usuarios',
    icon: <FaIcons.FaUser />,
    cName: 'nav-text'
  },

];