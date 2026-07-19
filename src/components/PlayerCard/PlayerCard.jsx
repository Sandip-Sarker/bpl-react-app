import React from 'react';
import userImg from '../../assets/user-1.png'
import flagImg from '../../assets/report-1.png'

const PlayerCard = ({player}) => {
    return (
        <div>
              <div className="card bg-base-100 shadow-sm p-4 m-3">
                    <figure>
                        <img className='w-full h-[300px] object-cover'
                        src={player['player-image']}
                        alt="Shoes" />
                    </figure>
                    <div className="mt-4">

                        <div className='flex'>
                            <img src={userImg} alt=""  />
                            <h2 className="card-title ml-2">{player['player-name']}</h2>
                        </div>

                        <div className='flex justify-between mt-4 border-b-1 pb-2 border-gray-400'>
                            <div className='flex items-center'>
                                <img className="w-[20px] h-[20px]" src={flagImg} alt="" />
                                <span className='ml-2'>{player['player-country']}</span>
                            </div>
                            <button className='btn'>{player['player-role']}</button>
                        </div>

                        <div className='flex justify-between mt-4'>
                            <span className='font-bold'>Rating</span>
                            <span>{player['rating']}</span>
                        </div>


                        <div className='flex justify-between mt-1'>
                            <span className='font-bold'>{player['bating-style']}</span>
                            <span>{player['bowling-style'] ? player['bowling-style'] : '' }</span>
                        </div>
                        

                        <div className="card-actions flex justify-between mt-3 items-center">
                            <p className='font-bold'>Price: {player['price']}</p>
                            <button className="btn">Choose Player</button>
                        </div>
                    </div>
                </div> 
        </div>
    );
};

export default PlayerCard;