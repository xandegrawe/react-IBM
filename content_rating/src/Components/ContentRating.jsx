
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
		super();
    this.state = {
      likes: 0,
      dislikes: 0,

			handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1
        }));
      },

      handleDislike:() => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1
        }));
      }
    };
  }
  render() {
    return (
     <>
		 <h1> Content Rating</h1>
     <div className='content-rating'></div>
			<p>
				IBM react course
			</p>
			<div className='rating-buttons'>
				<button className="like-button" onClick={this.state.handleLike}>
          Like ({this.state.likes})
        </button>
        <button className="dislike-button" onClick={this.state.handleDislike}>
          Dislike ({this.state.dislikes})
        </button>
			</div>
     </>
    );
  }
}

export default ContentRating;
