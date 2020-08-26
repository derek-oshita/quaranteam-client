import React from 'react'; 

function StateImage (props) {
        console.log('stateimage data: ', props.data)
        let stateData = props.data; 
        // console.log('state data: ', stateData.nickname)
        return (
            <React.Fragment>
                {/* <p>{props.data.nickname}</p> */}
            </React.Fragment>
        )
};

export default StateImage; 

