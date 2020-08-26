import React from 'react';
import StateImage from '../StateImage/StateImage'

function StateImageList(props) {
    console.log(props.stateCode)
    console.log(props.stateMeta)
    let image = props.stateMeta.find(stateObj => stateObj.code === props.stateCode); 
      return (
        <React.Fragment>
          {/* <Game game={gameObj} list={true} /> */}
       
          {/* <StateImage stateCode={props.stateCode}/> */}
          {/* <StateImage stateObj={stateObj}/> */}
          <StateImage image={image}/>
        </React.Fragment>
      )
  }
  
  export default StateImageList;

// this.props.stateCode  
// this.props.stateMeta  