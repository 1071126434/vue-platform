import { loadUserInfo, loadUserToken } from '../assets/js/cache'
const state = {
  userInfo: loadUserInfo(),
  userToken: loadUserToken(),
  // userAccountId: null,
  errorTimeList: null
}
export default state
