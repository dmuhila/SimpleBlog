import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { readPost, deletePost } from "../actions/BlogActions";
import { withRouter } from "react-router-dom";

class Blog extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.readPost(this.props.match.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.match.params.id).then(() => {
      this.props.history.push("/");
    });
  }

  render() {
    if (!this.props.post) {
      return <div>Loading...</div>;
    }

    const { title, categories, content } = this.props.post;

    return (
      <div>
        <Link to="/">Back to list</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete post
        </button>

        <h3>{title}</h3>
        <h6>Categories: {categories}</h6>
        <p>{content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post
  };
}

export default connect(
  mapStateToProps,
  { readPost, deletePost }
)(withRouter(Blog));
