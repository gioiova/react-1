import React from 'react';

const Footer = ({ navigation }) => {
  return (
    <footer>
      {navigation.map((item, index) => (
        <a key={index} href={item.link}>
          {item.label}
        </a>
      ))}
    </footer>
  );
};

export default Footer;
