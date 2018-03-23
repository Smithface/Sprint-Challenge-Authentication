import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';

class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <ul>
        {this.props.users.map((joke, i) => {
          return (
            <div key={i}>
              <li>{joke.setup}</li>
              <div>{joke.punchline}</div>
            </div>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, { getUsers })(Users);
