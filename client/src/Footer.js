import React from 'react';

const logos = [
  { logo: 'ukb', photo: '/images/ukb.png' },
  { logo: 'unibonn', photo: '/images/unibonn.png', },
  { logo: 'AGD', photo: '/images/AGD.png'},
  { logo: 'IPSEN', photo: '/images/Ipsen.svg'},
  { logo: 'GeneTalk', photo: '/images/GeneTalk.png'},
];

function Footer() {
  return (

      <div className="logos">
          {logos.map((logo, index) => (
              <div key={index} className="logo">
                  <img src={logo.photo} alt={logo.logo}/>
              </div>
          ))}
      </div>

  );
}

export default Footer;