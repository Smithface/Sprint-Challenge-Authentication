import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../actions';
import './jokes.css';

class Jokes extends Component {
  componentDidMount() {
    this.props.getJokes();
  }

  render() {
    return (
      <ul>
        {this.props.jokes.map((joke, i) => {
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
    jokes: state.jokes
  };
};

export default connect(mapStateToProps, { getJokes })(Jokes);
