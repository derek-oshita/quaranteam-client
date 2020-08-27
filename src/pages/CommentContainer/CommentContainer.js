import React from 'react'; 
import CommentModel from '../../models/comment'; 
import { Button } from 'antd';
import './CommentContainer.css'

class CommentContainer extends React.Component {
    state = {
        title: '',
        body: '',
        userId: this.props.currentUser, 
        stateId: this.props.match.params.state, 
      };
    
      handleChange = (event) => {
        if (event.target.value === 'on') {
          event.target.value = true;
        }
        this.setState({[event.target.name]: event.target.value})
      };
      
      handleSubmit = (event) => {
        event.preventDefault();
        console.log('comment container', this.props.match.params.state)
        CommentModel.createComment(this.state)
          .then((result) => {
            console.log(result.title);
            this.setState({
              title: result.title, 
              body: result.body, 
            })
          });
        this.props.history.push(`/states/${this.props.match.params.state}`);
      }
     

    render () {
      console.log(`CommentContainer: ${this.props.currentUser}`)
        return (
            <div className="comment-form-container">
            <form onSubmit={this.handleSubmit} className="comment-form">
              <h2 className="comment-header">How is {this.props.match.params.state} doing?</h2>
              <div>
                <label htmlFor="title">Title</label>
                <input onInput={this.handleChange} type="text" name="title" />
              </div>
              <div>
                <label htmlFor="body">Body</label>
                <input onInput={this.handleChange} type="text" name="body" />
              </div>
              <Button type="primary" onClick={this.handleSubmit}>Save</Button>
            </form>
          </div>
        )
    }
}; 


export default CommentContainer; 
