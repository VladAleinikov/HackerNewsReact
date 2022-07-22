import React from 'react'

const Comments = ({ commentLinks, show, ...props }) => {
  let comments = [];
  commentLinks.map(id => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`).
      then(res => res.json()).
      then(result => {
        comments.push(result);
    })
  })
  return (
    show ?
      <div className='commentsSection'>
        {
          comments.map(comment =>
            <div>
              <p>{comment.by}</p>
              <p>{comment.text}</p>
              {comment.kids != undefined ?
                <Comments commentLinks={comment.kids} show={false} /> : ""}
            </div>)
        }
        <span class="material-symbols-outlined">
          expand_less
        </span>
      </div> :
      <span class="material-symbols-outlined">
        expand_more
      </span>
  )
}

export default Comments