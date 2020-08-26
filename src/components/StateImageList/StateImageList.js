import React from 'react';
import StateImage from '../StateImage/StateImage'

function StateImageList(props) {
    // console.log(props.stateCode)
    props.stateMeta.map((stateObj) => {
    // console.log(stateObj)
      return (
        <React.Fragment>
          <StateImage stateObj={stateObj}/>
        </React.Fragment>
      )
    });
      return (
        <React.Fragment>
          {/* <Game game={gameObj} list={true} /> */}
          {/* {imageList} */}
          {/* <StateImage stateCode={props.stateCode}/> */}
          {/* <StateImage stateObj={stateObj}/> */}
        </React.Fragment>
      )
  }
  
  export default StateImageList;

// this.props.stateCode  
// this.props.stateMeta  