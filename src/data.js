import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  // FaHome,
  // FaUserFriends,
  // FaFolderOpen,
  // FaCalendarAlt,
  // FaWpforms,
} from 'react-icons/fa';
import { 
  BsFillPersonFill,
} from 'react-icons/bs';
import {
  AiFillStar,
  AiFillDelete,
} from 'react-icons/ai';
// import {
//   MdLabel,
// } from 'react-icons/md';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'contacts',
    icon: <BsFillPersonFill />,
  },
  // {
  //   id: 2,
  //   url: '/labels',
  //   text: 'labels',
  //   icon: <MdLabel />,
  // },
  {
    id: 3,
    url: '/favorite',
    text: 'favorite',
    icon: <AiFillStar />,
  },
  {
    id: 4,
    url: '/',
    text: 'clear contacts list',
    icon: <AiFillDelete />,
  },
  // {
  //   id: 4,
  //   url: '/calendar',
  //   text: 'calendar',
  //   icon: <FaCalendarAlt />,
  // },
  // {
  //   id: 5,
  //   url: '/documents',
  //   text: 'documents',
  //   icon: <FaWpforms />,
  // },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: 'https://www.twitter.com',
    icon: <FaSketch />,
  },
];
