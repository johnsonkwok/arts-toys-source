import React from 'react';
import Toy from './Toy.jsx';

const ToyList = ({ toys, changeStatus }) => (
  <div className="container">
    {toys.map((toy) => (
      <Toy key={toy.id} toy={toy} changeStatus={changeStatus} />
    ))}
  </div>
);

export default ToyList;
