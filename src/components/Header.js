import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container-fluid text-center text-white">
        <div className="row">
          <div className="col-md-3">
            <Link to="/">
              <h5
                className="trello-logo"
              >
                Trello-Clone
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
