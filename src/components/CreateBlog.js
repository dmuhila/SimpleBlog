import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { createPost } from "../actions/BlogActions";

class CreateBlog extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit(props) {
    // props from form (they are fields!)
    this.props
      .createPost(props) // is a promise!
      .then(() => {
        this.props.history.push("/");
      });
  }

  renderInputField(field) {
    const {
      meta: { touched, error }
    } = field;
    const inputGroupClassName = `form-group ${
      touched && error ? "has-danger" : ""
    }`;
    return (
      <div className={inputGroupClassName}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  renderTextField(field) {
    const {
      meta: { touched, error }
    } = field;
    const inputGroupClassName = `form-group ${
      touched && error ? "has-danger" : ""
    }`;
    return (
      <div className={inputGroupClassName}>
        <label>{field.label}</label>
        <textarea className="form-control" {...field.input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Title" name="title" component={this.renderInputField} />
        <Field
          label="Categories"
          name="categories"
          component={this.renderInputField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderTextField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

const validate = values => {
  let errors = {};
  if (!values.title) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter a categories!";
  }
  if (!values.content) {
    errors.content = "Enter a content!";
  }
  return errors;
};

// connect: first arg is mapStateToProps, second is mapDispatchToProps
// reduxForm: first arg is form config, second is mapStateToProps,
//            and third is mapDispatchToProps
export default reduxForm({
  validate,
  form: "PostsNewForm"
})(
  connect(
    null,
    { createPost }
  )(withRouter(CreateBlog))
);
