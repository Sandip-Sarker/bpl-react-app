import React, {use} from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers = ({ playersPromise }) => {

    const playersData = use(playersPromise)
    console.log(playersData)

    return (
        <div className='max-w-300 mx-auto grid grid-cols-1 md:grid-cols-3'>

            {
                playersData.map(player => <PlayerCard player={player}/>)
            }

        </div>
    );
};

export default AvailablePlayers;