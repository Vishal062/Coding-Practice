import React from "react";
import "./styles.css";

const postDataStatic = {
  comments: [
    {
      id: 1,
      text: "First comment here.",
      author: "user2",
      children: [
        {
          id: 2,
          text: "Another comment Reply For 1st Comment.",
          author: "user3",
          children: [
            {
              id: 3,
              text: "Third comment text.",
              author: "user4",
              children: []
            }
          ]
        }
      ]
    },
    {
      id: 4,
      text: "Another comment here 2.",
      author: "user5",
      children: []
    },
    {
      id: 5,
      text: "Another comment here 3.",
      author: "user9",
      children: []
    }
  ]
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postData:
        JSON.parse(window.localStorage.getItem("postData")) || postDataStatic
    };
    // this.handleReplyTo = this.handleReplyTo.bind(this);
    // this.getData = this.getData.bind(this);
    // this.onKeyUp = this.onKeyUp.bind(this);
  }

  handleReplyTo = (id) => {
    let el = document.getElementById("replyTo_" + id);
    el.style.display = "block";
  };

  getData = (object, string) => {
    var result;
    if (!object || typeof object !== "object") return;
    Object.values(object).some((v) => {
      if (v === string) return (result = object);
      return (result = this.getData(v, string));
    });
    return result;
  };

  onKeyUp = (event) => {
    let postData = this.state.postData;
    if (event.which === 13) {
      let commentText = event.target.value;
      let commentId = parseInt(event.target.id.split("_")[1], 10);
      let parent = this.getData(postData, commentId);

      const commentValue = {
        id: Math.floor(Math.random() * 101),
        text: commentText,
        author: "user" + Math.floor(Math.random() * 101),
        children: []
      };
      parent.children = [...parent.children, { ...commentValue }];
      event.target.value = "";
      event.target.style.display = "none";
      this.setState({ postData: postData });
      window.localStorage.setItem("postData", JSON.stringify(postData));
    }
  };

  render = () => {
    const postData = this.state.postData;

    const Comment = ({ comment }) => {
      const nestedComments = (comment.children || []).map((comment) => {
        return <Comment key={comment.id} comment={comment} type="child" />;
      });

      const name = "u" + comment.author.match(/(\d+)/)[0];

      return (
        <div className="commentDetails">
          <div className="profileImage">{name}</div>
          <h4>{comment.author}</h4>
          <p>
            {comment.text}
            <button
              className="replyTo"
              onClick={() => this.handleReplyTo(comment.id)}
            >
              Reply To
            </button>
          </p>

          <input
            className="commentInput"
            id={"replyTo_" + comment.id}
            placeholder="enter your reply here"
            onKeyUp={(event) => this.onKeyUp(event)}
          />
          {nestedComments}
        </div>
      );
    };

    return (
      <div>
        <div>
          {postData.comments.map((comment) => {
            return <Comment key={comment.id} comment={comment} />;
          })}
        </div>
      </div>
    );
  };
}

export default App;
