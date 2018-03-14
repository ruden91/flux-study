import UsersServiceActionCreators from '../actions/UsersServiceActionCreators';

let ApiUtils = {
  loadUsers () {
    setTimeout(() => {
      let response = ['박', '김', '오', '홍', '김', '성'];
      console.log('data retrieved')
      UsersServiceActionCreators.loadUsers(response);
    }, 350)
  }
}

export default ApiUtils;