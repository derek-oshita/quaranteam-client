import React from 'react'; 
import CommentModel from '../../models/comment'; 
import { Button } from 'antd';

class CommentContainer extends React.Component {
    state = {
        title: '',
        body: '',
        userId: this.props.currentUser, 
        stateId: this.props.match.params.state, 
      };
    
      handleChange = (event) => {
        // console.log(event.target.id);
        if (event.target.value === 'on') {
          event.target.value = true;
        }
        this.setState({[event.target.name]: event.target.value})
      };
      
      // CONTINUE HERE 
      handleSubmit = (event) => {
        event.preventDefault();
        // this.props.match.params.state
        console.log('comment container', this.props.match.params.state)
        CommentModel.createComment(this.state)
          .then((result) => {
            console.log(result);
          });
        this.props.history.push(`/states/${this.props.match.params.state}`);
      }
     

    render () {
      console.log(`CommentContainer: ${this.props.currentUser}`)
        return (
            <>
            <form onSubmit={this.handleSubmit}>
              <h2>How is {this.props.match.params.state} doing?</h2>
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
          </>
        )
    }
}; 


export default CommentContainer; 
