import AppDispatcher from '../Dispatcher';
import ApiUtils from '../utils/ApiUtils';

let UsersActionCreator = {
  loadUser () {
    AppDispatcher.dispatch({
      type: 'LOAD_USER'
    });

    ApiUtils.loadUsers();
  }
}

export default UsersActionCreator;