import cx from 'classnames';
import React, { useState } from 'react';
export default () => {
  const [likes, setLikes] = useState({ quantity: 100, buttonClicked: false });
  const [dislikes, setDislikes] = useState({ quantity: 25, buttonClicked: false });

  function handleIncreaseDecreaseLikes() {
    if(dislikes.buttonClicked) {
      handleIncreaseDecreaseDislikes();
    }

    if(likes.buttonClicked) {
      setLikes(prev => {
        return {
          quantity: prev.quantity - 1,
          buttonClicked: false,
        }
      });

    } else {
      setLikes(prev => {
        return {
          quantity: prev.quantity + 1,
          buttonClicked: true,
        }
      });
    }
  }
  
  function handleIncreaseDecreaseDislikes() {
    if(likes.buttonClicked) {
      handleIncreaseDecreaseLikes();
    }

    if(dislikes.buttonClicked) {
      setDislikes(prev => {
        return {
          quantity: prev.quantity - 1,
          buttonClicked: false,
        }
      });
    } else {
      setDislikes(prev => {
        return {
          quantity: prev.quantity + 1,
          buttonClicked: true,
        }
      });
    }
  }

  return (
    <>
      <div>
        <button 
          className={`${likes.buttonClicked ? 'like-button liked' : 'like-button'}`}
          onClick={handleIncreaseDecreaseLikes}
        >
          Like | <span className="likes-counter">{likes.quantity}</span>
        </button>
        <button
          className={`${dislikes.buttonClicked ? 'dislike-button disliked' : 'dislike-button'}`}
          onClick={handleIncreaseDecreaseDislikes}
        >
          Dislike | <span className="dislikes-counter">{dislikes.quantity}</span>
        </button>
      </div>
      <style>{`
        .like-button, .dislike-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:   #585858;
        }

        .liked, .disliked {
            font-weight: bold;
            color: #1565c0;
        }
      `}</style>
    </>
  );
};