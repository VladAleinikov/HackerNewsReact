import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Comments = ({ commentLinks, show, isFirst, ...props }) => {

  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(show);
  useEffect(() => {
    commentLinks.map(id => {
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).
        then(res => res.json()).
        then(result => {
          setComments([...comments, result]);

        })
    })

    
  }, [])



  return (
    showComments ?
      <div className='commentsSection'>
        {isFirst ? "" :
          <span onClick={e => setShowComments(false)} className="material-symbols-outlined show-less">
          expand_less
        </span>}

        {
          comments.map(comment => 
            <div>
              <p>{comment.by}</p>
              <p>{comment.text}</p>
              {comment.kids != undefined ?
                <Comments commentLinks={comment.kids} show={false} isFirst={false} /> : ""}
            </div>)
        }

      </div> :
      <span onClick={e => setShowComments(true)} className="material-symbols-outlined show-more">
        expand_more
      </span>
  )
}

export default Comments