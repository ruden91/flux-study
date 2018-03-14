import EventEmitter from 'events';
import AppDispatcher from '../Dispatcher';
let initialState = {
  loaded: false,
  users: []
};

let events = new EventEmitter();

let setState = (newState) => {
  Object.assign(initialState, newState);
  events.emit('CHANGE');
};

let UsersStore = {
  getState () {
    return initialState;
  },
  addChangeListener (fn) {
    events.addListener('CHANGE', fn);
  }
}

UsersStore.dispatchToken = AppDispatcher.register(action => {
  if (action.type === 'USERS_LOADED') {
    setState({
      loaded: true,
      users: action.users
    });
  }  
})

export default UsersStore;