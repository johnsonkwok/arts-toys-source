import React from 'react';
import Toy from './Toy.jsx';

const ToyList = ({ toys, changeStatus }) => {
  const noToysMessage = <div>There are no toys to display.</div>;
  const toysToDisplay = (
    <div className="container">
      {toys.map((toy) => (
        <Toy key={toy.id} toy={toy} changeStatus={changeStatus} />
      ))}
    </div>
  );
  return (
    <div>
      {toys.length === 0 ? noToysMessage : toysToDisplay}
    </div>
  );
};

export default ToyList;
