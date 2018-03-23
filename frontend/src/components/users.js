import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';
import './jokes.css';

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
              <li className="setup" onClick={() => togglePunchLine(`${i}`)}>{joke.setup}</li>
              <div id={`${i}`} className="hidden">{joke.punchline}</div>
            </div>
          );
        })}
      </ul>
    );
  }
}

const togglePunchLine = (id) => {
  document.getElementById(id).classList.toggle('hidden');
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps, { getUsers })(Users);
