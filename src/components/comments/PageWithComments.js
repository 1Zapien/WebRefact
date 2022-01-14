import React from "react";
import commentBox from "commentbox.io";

console.log(process.env.REACT_APP_COMMENT);
class PageWithComments extends React.Component {
  componentDidMount() {
    this.removeCommentBox = commentBox(process.env.REACT_APP_COMMENT);
  }

  componentWillUnmount() {
    this.removeCommentBox();
  }

  render() {
    return <div className="commentbox" />;
  }
}

export default PageWithComments;
