import React from "react";

const Header = ({ selectedTeam, teamMemberCount }) => {
  return (
    <div>
      <header className="container">
        <div className="row justify-content-center mt-3 mb-4">
          <div className="col-8">
            <h1>Team Member Allocation</h1>
            <h2>
              {selectedTeam} has {teamMemberCount} Members
            </h2>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
