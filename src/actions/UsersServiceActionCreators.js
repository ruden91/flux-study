import AppDispatcher from '../Dispatcher';

let UsersServiceActionCreators = {
  loadUsers (users) {
    AppDispatcher.dispatch({
      type: 'USERS_LOADED',
      users
    });
  }
}

export default UsersServiceActionCreators;