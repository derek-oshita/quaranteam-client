import React from 'react';
import StateImage from '../StateImage/StateImage'

function StateImageList(props) {
    // console.log(props.stateCode)
    // console.log(props.stateMeta)
    let stateInfo = props.stateMeta.find(stateObj => stateObj.code === props.stateCode); 
    // console.log('image: ', stateInfo)
      return (
        <>
          {/* <Game game={gameObj} list={true} /> */}
       
          {/* <StateImage stateCode={props.stateCode}/> */}
          {/* <StateImage stateObj={stateObj}/> */}
          <StateImage data={stateInfo}/>
        </>
      )
  }
  
  export default StateImageList;

// this.props.stateCode  
// this.props.stateMeta  