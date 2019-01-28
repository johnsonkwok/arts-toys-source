import React from 'react';
import Toy from './Toy.jsx';

const ToyList = ({ toys }) => (
  <div className="container">
    {toys.map((toy) => (
      <Toy key={toy.id} toy={toy} />
    ))}
  </div>
);

export default ToyList;
