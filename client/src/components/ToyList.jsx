import React from 'react';
import Toy from './Toy.jsx';

const ToyList = ({ toys, changeStatus }) => {
  const noToysMessage = (
    <div className="empty-msg jumbotron">
      <i className="far fa-surprise surprise-face" />
      <span>There are no toys to display.</span>
    </div>
  );
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
