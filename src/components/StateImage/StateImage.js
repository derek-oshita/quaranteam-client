import React from 'react'; 

function StateImage (props) {
        console.log('stateimage data: ', props.data)
        let stateData = {}; 
        // if (props.data !== undefined) {
        //     stateData = props.data
        //     // stateData = {...props.data}
        //     console.log('stateimage.js ', stateData)
        // } 
        // console.log('state data: ', stateData.nickname)
        return (
            <>
                {/* NICKNAME */}
                {
                    props.data !== undefined ? 
                    (<p>{props.data.nickname}</p>)
                    : 
                    (<p>Loading...</p>)
        
                }
                
            </>
        )
};

export default StateImage; 

