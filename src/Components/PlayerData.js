import React, {Fragment} from 'react';
import EditInput from './EditInput';
import EditScoreInput from './EditScoreInput';
import DisplayAllscores from './DisplayAllscores';
import Trash from './svg/Trash';
import EditUser from './svg/EditUser';

function PlayerData (props){
    return(
        <Fragment>
        <div className="player player-edit">
            <div className="btn-svg btn-delete" onClick={()=>props.deletePlayer(props.index)}><Trash /></div>
            {props.isInEditMode?<div className="player__content"><h3 className="heading-tertiary player__title" onClick={props.setEditMode}>{props.players.name}</h3><EditUser /></div>:<EditInput index={props.index} updatePlayerName={props.updatePlayerName} playerName={props.players.name} setEditMode={props.setEditMode} />}
            <EditScoreInput getErrorsFromInput={props.getErrorsFromInput} displayScorePerTurn={props.displayScorePerTurn} index={props.index}/>
            <DisplayAllscores players={props.players} index={props.index}/>
        </div>
        </Fragment>
    )
}

export default PlayerData;
