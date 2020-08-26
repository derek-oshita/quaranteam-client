// IMPORTS
import React from 'react';
import Comment from '../Comment/Comment';

function GamesList(props) {
  const gamesList = props.games.map((gameObj) => {
    return (
      <Link key={gameObj._id} to={`/games/${gameObj._id}`}>
        <Game game={gameObj} list={true} />
      </Link>
    )
  });

  return (
    <div className="games-container">
      {gamesList}
    </div>
  );
}

export default GamesList;