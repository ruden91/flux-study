import React, { Component } from 'react';

import UsersStore from '../stores/UsersStore';
import UsersActionCreator from '../actions/UsersActionCreator';
export default class Users extends Component {
  state = UsersStore.getState();

  handleChange = () => {
    this.setState(UsersStore.getState());
  }

  componentDidMount () {
    UsersStore.addChangeListener(this.handleChange);
    UsersActionCreator.loadUser();
  }

  renderUsers () {
    return this.state.users.map(user => (<li>{user}</li>));
  }

  render() {
    const { loaded } = this.state;

    if (!loaded) {
      return <div>loading</div>
    }    

    return (
      <ul>{ this.renderUsers() }</ul>
    )
  }
}