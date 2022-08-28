import "../App.css";
// Boostrap styling
import "bootstrap/dist/css/bootstrap.css";
import { getUserProperties, getUsers, addPost } from "../data/repository";
import React, { useState } from "react";

function Forum(props) {
  // Retrieves the user details from localStorage.
  const userDetails = getUserProperties(props.username, getUsers());
  // Variables for creating a post. 
  const [post, setPost] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [posts, setPosts] = useState([]);

  // Variables for the adding a image button. This select the button.
  const hiddenFBtn = document.getElementById("fileChooser");
  const fileBtn = document.getElementById("fileBtn");

  // Variable for showing character count when the user types in the textfield. 
  const [characterCount, setCharacterCount] = useState(0);

  // Variable for trimming the post. 
  const postTrimmed = post.trim();

  // Creates a post and changes the character count. 
  const handleInputChange = (event) => {
    setPost(event.target.value);
    setCharacterCount(event.target.value.length);
  };

  // Executes when the user creates a post
  const createPost = (event) => {
    event.preventDefault();

    // Error messages if the user tries to post a empty message or a message longer than 250 words.
    if (postTrimmed === "") {
      setErrorMessage("You cannot send a empty post.");

      return;
    } else if (characterCount > 250) {
      console.log(characterCount);
      setErrorMessage("Must not exceed 250 characters");
      return;
    } else {
      setCharacterCount(0);
    }

    // This creates the post.
    setPosts([
      ...posts,
      {
        username: `${userDetails.fName} ${userDetails.lName}`,
        text: postTrimmed,
      },
    ]);

    // This resets the post content. 
    setPost("");
    setErrorMessage("");
  };

 

  // Opens file chooser for a image. 
  function clickFileChoose() {
    // Opens file chooser
    fileBtn.addEventListener("click", function () {
      hiddenFBtn.click();
    });

    hiddenFBtn.addEventListener("change", function () {
      if (hiddenFBtn.value) {
        const pathway = hiddenFBtn.value;
        console.log(pathway);
      }
    });
  }

  // Saves posts to localStorage.
  function savePosts() {
    addPost(postTrimmed)
  }

  return (
    <div className="dark-bg">
      <div className="forum-card">
        <h1 className="text-danger">Forum</h1>
        <form onSubmit={createPost}>
          <fieldset>
            <div className="form-group">
              <textarea
                name="post"
                id="post"
                className="form-control"
                rows="3"
                placeholder="Share your thoughts..."
                value={post}
                onChange={handleInputChange}
              >
                {" "}
              </textarea>
            </div>
            {errorMessage !== null && (
              <div className="form-group">
                <span className="text-danger">{errorMessage}</span>
              </div>
            )}
            <div className="form-group">
              <p className="text-white-50">Word count: {characterCount}</p>
              <input
                type="button"
                className="btn btn-danger mr-5"
                value="Cancel"
                onClick={() => {
                  setPost("");
                  setErrorMessage(null);
                }}
              />

              <input type="file" id="fileChooser" hidden="hidden"></input>
              <button
                type="button"
                className="btn btn-primary button-pos"
                value="Image"
                id="fileBtn"
                onClick={clickFileChoose}
              >
                Image
              </button>
              <input
                type="submit"
                className="btn btn-primary button-pos"
                value="Post"
                onClick={savePosts}
              />
            </div>
          </fieldset>
        </form>

        <hr />
        <legend className="text-danger">Posts</legend>
        <div>
          {posts.length === 0 ? (
            <span className="text-muted">No posts have been submitted.</span>
          ) : (
            posts.map((x) => (
              <div
                className="post-border my-3 p-3"
                style={{ whiteSpace: "pre-wrap" }}
              >
                <h3 className="text-primary fs-4">{x.username}</h3>
                {x.text}
              </div>
            ))
          )}
        </div>
      </div>{" "}
      {/* end of forum card */}
    </div>
  );

}
export default Forum;
