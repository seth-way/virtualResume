import React, { useState } from 'react';
import { Image } from 'react-bootstrap';

const icons = [
  {
    name: 'phone',
    toggleOn: '570.419.2673',
    toggleOff: <Image src="./resources/phone.png" alt="PHONE" height="40" value="phone" />,
  },
  {
    name: 'email',
    toggleOn: <span value="email">seth.r.way@gmail.com</span>,
    toggleOff: <Image src="./resources/mail.png" alt="EMAIL" height="40" value="email" />,
  },
  {
    name: 'linkedin',
    toggleOn: 'linkedin.com/in/sethway',
    toggleOff: <Image src="./resources/linkedin.png" alt="LINKEDIN" height="40" value="linkedin" />,
  },
  {
    name: 'github',
    toggleOn: 'https://github.com/seth-way',
    toggleOff: <Image src="./resources/github.png" alt="GITHUB" height="40" value="github" />,
  },
];

const Footer = () => {
  const iconToggleSwitch = {};
  const [iconHovered, toggleIconHover] = useState(iconToggleSwitch);

  const toggleIconHoverOn = (e) => {
    const icon = e.target.getAttribute('value');
    toggleIconHover({ [icon]: true });
  };

  const toggleIconHoverOff = (e) => {
    const icon = e.target.getAttribute('value');
    toggleIconHover({ [icon]: false });
  };

  return (
    <>
      <div className="iconContainer">
        {icons.map((icon, index) => (
          <div
            className="footerIcon"
            onMouseEnter={(event) => toggleIconHoverOn(event)}
            onMouseLeave={(event) => toggleIconHoverOff(event)}
            value={icons[index].name}
          >
            {iconHovered[icons[index].name]
              ? <div className="iconHovered">{icons[index].toggleOn}</div>
              : icons[index].toggleOff}
          </div>
        ))}
      </div>
    </>
  );
};

export default Footer;
