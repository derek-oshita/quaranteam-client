// IMPORTS
import React from 'react'; 
import Comment from '../Comment/Comment'
import './UserProfile.css'; 
import luffy from './luffy.jpg'

// USER PROFILE
class UserProfile extends React.Component {
    state = {
        user: ''
    }

    componentDidMount = () => {
        const userId = localStorage.getItem('id')
        fetch(`localhost:4000/api/v1/auth/getuser/${userId}`)
            .then(res => res.json)
            .then(res => {
                console.log(res)
                this.setState({
                    user: res.user
                })
            })
    }
    render () {
    return (
        <main className="user-profile-container">
            {/* USER DETAILS */}
            <div className="user-details-container">
            <section className="user-details">
            {/* IMAGE */}
            <img alt ="user-image" className="user-image" src={luffy}/>
            {/* INFO */}
            <div className="user-info">
                <p className="username-p">{this.state.user.username}</p>
                <p className="username-loc">San Francisco, CA</p>
            </div>
            </section>
            </div>


            {/* RECENT POSTS */}
            <section className="user-posts">
                <Comment />
            </section>               
        </main>
    )
}
}

// EXPORTS 
export default UserProfile; 