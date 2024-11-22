import React from 'react';

const Header = ({ navigation }) => {
  return (
    <header>
      {navigation.map((item, index) => (
        <a key={index} href={item.link}>
          {item.label}
        </a>
      ))}
    </header>
  );
};

export default Header;
