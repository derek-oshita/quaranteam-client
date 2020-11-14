// HELPER FUNCTIONS FOR STATE CONTAINER

// ADD COMMAS
const addComas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
}

// EXPORT
export { addComas }; 

