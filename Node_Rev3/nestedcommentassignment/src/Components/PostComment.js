export const PostComment = (e) => {
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
};
