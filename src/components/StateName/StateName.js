import React from 'react'; 

function StateName (props) {
    let newName = props.abbrev; 

    if (newName === 'AK') {
        newName = 'Alaska'
        return newName
    }
    if (newName === 'AL') {
        newName = 'Alabama'
        return newName
    }
    if (newName === 'AR') {
        newName = 'Arkansas'
        return newName
    }
    if (newName === 'AZ') {
        newName = 'Arizona'
        return newName
    }
    if (newName === 'AZ') {
        newName = 'Arizona'
        return newName
    }
    if (newName === 'CA') {
        newName = 'California'
        return newName
    }
    if (newName === 'CO') {
        newName = 'Colorado'
        return newName
    }
    if (newName === 'CT') {
        newName = 'Connecticut'
        return newName
    }
    if (newName === 'CT') {
        newName = 'Connecticut'
        return newName
    }


    console.log('StateName component props: ', newName )
    return (
        <div>
            {newName}
        </div>
    )
}; 

export default StateName; 