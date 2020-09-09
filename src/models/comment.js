// VARIABLES
const url = 'https://enigmatic-garden-30320.herokuapp.com/api/v1/comment'

// COMMENT MODEL 
class CommentModel {
    static getAllComments = () => {
      return fetch(url)
        .then((response) => response.json())
    }
  
    static getCommentById = (commentId) => {
      return fetch(`${url}/${commentId}`)
        .then((response) => response.json())
    }
  
    static createComment = (comment) => {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('token'),
        },
        body: JSON.stringify(comment)
      })
        .then((response) => response.json())
    }
  
    static updateComment = (comment, id) => {
      return fetch(`${url}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('token'),
        },
        body: JSON.stringify(comment)
      })
        .then((response) => response.json())
    }
  
    static deleteComment = (id) => {
      return fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('token'),
        },
      })
        .then((response) => response.json())
    }
  }; 

// EXPORTS
export default CommentModel; 