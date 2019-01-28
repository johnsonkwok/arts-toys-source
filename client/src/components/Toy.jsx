import React from 'react';

const Toy = ({ toy }) => (
  <div className="toy">
    <div>
      <span>{toy.name}</span>
      <span>${toy.est_value}</span>
    </div>
    <div>
      <img className="picture" src={`${toy.picture}`} alt="No Pic Available" />
    </div>
  </div>
);

export default Toy;
