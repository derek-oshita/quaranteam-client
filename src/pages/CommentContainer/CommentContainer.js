import React from 'react'; 
import CommentModel from '../../models/comment'; 
import { withRouter } from 'react-router-dom';
import { Form, Input, InputNumber, Button } from 'antd';

class CommentContainer extends React.Component {
    state = {
        title: '',
        body: '',
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
        CommentModel.createComment(this.state)
          .then((result) => {
            console.log(result);
          });
        this.props.history.push('/states');
      }

    render () {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
              <h2>Comment On Your Experience</h2>
              <div>
                <label htmlFor="title">Title</label>
                <input onInput={this.handleChange} type="text" name="title" />
              </div>
              <div>
                <label htmlFor="body">Body</label>
                <input onInput={this.handleChange} type="text" name="body" />
              </div>
              <button type="submit">Add Comment</button>
            </form>
          </div>
        )
    }
}; 


export default CommentContainer
