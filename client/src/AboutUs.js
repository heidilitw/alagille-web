


import React from 'react';

const members = [
  { name: 'Dr. Tzung-Chien Hsieh', photo: '/images/Hsieh_Tzung-Chien.jpg', affiliation: 'IGSB, University Hospital Bonn, Germany', position: 'PostDoc and Principal Investigator' },
  { name: 'Ms. Sophia Kaptain', photo: '/images/Sophia_Kaptain.jpg', affiliation: 'IGSB, University Hospital Bonn, Germany', position: 'Data curator' },
  { name: 'Dr. Jing-Mei Li', photo: '/images/jingmei.jpg', affiliation: 'IGSB, University Hospital Bonn, Germany', position: 'Data scientist and software developer' },
  { name: 'Ms. Merle ten Hagen', photo: '/images/Merle_ten_Hagen.jpeg', affiliation: 'IGSB, University Hospital Bonn, Germany', position: 'Data curator' },
  { name: 'Ms. Hannah Weiland', photo: '/images/Hannah_Weiland.jpg', affiliation: 'IGSB, University Hospital Bonn, Germany', position: 'Data curator' },
  { name: 'Prof. Peter M. Krawitz', photo: '/images/Krawitz_Peter.jpg', affiliation: 'IGSB, University Hospital Bonn, Germany', position: 'Medical consultor' },
  { name: 'Prof. Shahida Moosa', photo: '/images/Shahida_Moosa.jpg', affiliation: 'Stellenbosch University, Cape Town, South Africa', position: 'Medical consultor' },
];

function AboutUs() {
  return (
    <section id="about-us" className="AboutUs">
      <h2>Team</h2>
      <div className="members">
        {members.map((member, index) => (
          <div key={index} className="member">
            <img src={member.photo} alt={member.name} />
            <p><strong>{member.name}</strong></p>
            <p>{member.affiliation}</p>
            <p>{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutUs;