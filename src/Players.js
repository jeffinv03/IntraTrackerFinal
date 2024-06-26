import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PlayerInfo from './components/PlayerInfo';
import { useGame } from './GameContext';
import "./Players.css";

function Players() {
  const { team, removePlayerFromTeam } = useGame();
  const handleRemovePlayer = (name) => {
    removePlayerFromTeam(name);
  };

  return (
    <div className="players-page d-flex flex-column align-items-center justify-content-center">
      <h1 className="page-title">Manage Team</h1>
      <div className="display-players">
        {team.map(player => (
          <div key={player.name} className="player-info-container d-flex flex-column align-items-center justify-content-center">
            <PlayerInfo name={player.name} /> 
            <Button variant="danger" onClick={() => handleRemovePlayer(player.name)}>Remove</Button>
          </div>
        ))}
      </div>
      <div>
        <Link to="/add-player" className="btn btn-primary rounded-pill ms-3 button-style home-button add-player-button">Add Player</Link>
      </div>
    </div>
  );
}

export default Players;
