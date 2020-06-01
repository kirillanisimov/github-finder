import React, { Component, Fragment } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      company,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <Fragment>
        <Link to='/'>Back To Search</Link>
        Hireable: {""}
        {hireable ? (
          <i className='fas fa-check' />
        ) : (
          <i className='fas fa-times-circle' />
        )}
        <div>
          <div>
            <img src={avatar_url} alt='' style={{ width: "150px" }} />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {/* Bio section */}
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            {/* Link to GitHub profile */}
            <a href={html_url}>Visit GitHub Profile</a>
            {/* Username, company, and website */}
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>Followers: {followers}</div>
          <div>Following: {following}</div>
          <div>Public Repos: {public_repos}</div>
          <div>Public Gists: {public_gists}</div>
        </div>
      </Fragment>
    );
  }
}

export default User;
