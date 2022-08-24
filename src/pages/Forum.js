import "../App.css";
// Boostrap styling
import "bootstrap/dist/css/bootstrap.css";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import React, { useState } from "react";

function PopUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (show === true) {
    return (
      <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (show === false) {
    return console.log("yeah");
  }
}

function cssPopUp() {
  return (
    <div className="">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Forum1() {
  const handleButton = () => {
    console.log("hello");
    <div className="">
      <div className="main-box-large">hello</div>
    </div>;
  };

  return (
    <div className="">
      <div className="main-box-large">
        <h1>Forum</h1>
        <p>posts go here</p>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={handleButton}
        >
          Launch demo modal
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nothing here yet */}
    </div>
  );
}

function Forum2() {

  // var id = window.location.search.slice(1);
  // var thread = threads.find(t => t.id == id);

  function addComment(comment) {
      var commentHtml = `
          <div class="comment">
              <div class="top-comment">
                  <p class="user">
                      ${comment.author}
                  </p>
                  <p class="comment-ts">
                      ${new Date(comment.date).toLocaleString()}
                  </p>
              </div>
              <div class="comment-content">
                  ${comment.content}
              </div>
          </div>
      `
      comments.insertAdjacentHTML('beforeend', commentHtml);
  }


  function addComment(comment) {
  
        <div class="comment">
            <div class="top-comment">
                <p class="user">
                    ${comment.author}
                </p>
                <p class="comment-ts">
                    ${new Date(comment.date).toLocaleString()}
                </p>
            </div>
            <div class="comment-content">
                ${comment.content}
            </div>
        </div>
  
}

  let comments = document.querySelector('.comments');


  // for (let comment of comments) {
  //     addComment(comment);
  // }

  // var btn = document.querySelector('.post');
  // btn.addEventListener('click', function() {
  //     var txt = document.querySelector('textarea');
  //     var comment = {
  //         content: txt.value,
  //         date: Date.now(),
  //         author: 'Aaron'
  //     }
  //     addComment(comment);
  //     txt.value = '';
  //     // thread.comments.push(comment);
  //     // localStorage.setItem('threads', JSON.stringify(threads));
  // })

  function handleClick() {
    var txt = document.querySelector('textarea');
    var comment = {
        content: txt.value,
        date: Date.now(),
        author: 'Aaron'
    }
    addComment(comment);
    txt.value = '';

    const newComment = this.addComment();
    return (
      <div>{newComment}</div>
    )
  }


  return (
    <div className="App">
      {/* auth.token ? <Outlet/> :  <Navigate to="/" replace state={{from: myprofile}}/> */}
      <div className="forum-bg">
        <div className="forum-card">
          <h1>Forum</h1>

          <textarea className='caption-area'></textarea>
        <button onClick={handleClick}>add comment</button>
        <div class="comments">
        </div>
         
        </div>
      </div>{" "}
      {/* end of main-box custom-card */}
      {/* Nothing here yet */}
    </div>
  );
}

// ADD LOCAL STORAGE TO THIS. STORE INTO ARRAY OBJECT STUFF 
function Forum() {
  const [post, setPost] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleInputChange = (event) => {
    setPost(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Trim the post text.
    const postTrimmed = post.trim();

    if(postTrimmed === "") {
      setErrorMessage("A post cannot be empty.");
      return;
    }

    // Create post.
    setPosts([ ...posts, { username: 'name', text: postTrimmed }]);

    // Reset post content.
    setPost("");
    setErrorMessage("");
  }

  return (
    <div className='forum-bg'>
      <div className='forum-card'>

      <h1>Forum</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          
          <div className="form-group">
            <textarea name="post" id="post" className="form-control" rows="3" 
              placeholder='Start a post' value={post} onChange={handleInputChange} />
          </div>
          {errorMessage !== null &&
            <div className="form-group">
              <span className="text-danger">{errorMessage}</span>
            </div>
          }
          <div className="form-group">
            <input type="button" className="btn btn-danger mr-5" value="Cancel"
              onClick={() => { setPost(""); setErrorMessage(null); }} />
            <input type="submit" className="btn btn-primary" value="Post" />
          </div>
        </fieldset>
      </form>

      <hr />
      <legend>Posts</legend>
      <div>
      {
        posts.length === 0 ?
          <span className="text-muted">No posts have been submitted.</span>
          :
          posts.map((x) =>
            <div className="border my-3 p-3" style={{ whiteSpace: "pre-wrap" }}>
              <h3 className="text-primary">{x.username}</h3>
              {x.text}
            </div>
          )
      }
      </div>
      
      </div> {/* end of forum card */}
    </div> 
  )
  {/* end of forum bg */};
}
export default Forum;
