import React from "react";
import "./Popular.css";
import { Link } from "react-router-dom";
const Popular = () => {
  return (
    <div className="popular">
      <div className="popular-container">
        <div className="main-text">
          <h2 className="pop">Most <span className="popular-typewriter"> Popular Tours </span> of India </h2>
        </div>

        <div className="img-section">
          <div className="img1">
             <Link className="maha effect" to="/place/maharastra">Maharastra</Link>
             <Link className="megh effect" to="/place/meghalaya">Meghalaya</Link>
             <Link className="kera effect" to="/place/kerala">Kerala</Link> 
             <Link className="guj effect" to="/place/gujarat">Gujarat</Link>
          </div>
          <div className="img2">
             <Link className="kash effect" to="/place/kashmir">Kashmir</Link>
             <Link className="ass effect" to="/place/assam">Assam</Link>
             <Link className="raja effect" to="/place/rajastan">Rajastan</Link>
             <Link className="pun effect" to="/place/punjab">Punjab</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;

