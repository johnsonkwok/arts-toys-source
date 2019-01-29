import React from 'react';

const Toy = ({ toy, changeStatus }) => (
  <div className="toy">
    <div className="toy-desc">
      <span>{toy.name}</span>
      <span className="value">${toy.est_value}</span>
    </div>
    <div>
      <img className="picture" src={`${toy.picture}`} alt="No Pic Available" />
    </div>
    <div className="btn-group">
      <button type="button" className={`btn btn-sm btn-outline-info ${toy.own ? 'active' : ''}`} onClick={() => changeStatus('own', toy)}>
        <i className="fas fa-plus m-0" />
      </button>
      <button type="button" className={`btn btn-sm btn-outline-info ${toy.want ? 'active' : ''}`} onClick={() => changeStatus('want', toy)}>
        <i className="far fa-list-alt m-0" />
      </button>
    </div>
  </div>
);

export default Toy;
