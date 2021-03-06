import { ActionBooks } from '../books/booksActions';
import { ActionType } from '../login/loginActions';
import * as trainingActions from '../training/trainingActions';

const loaderReducers = (state = false, { type }) => {
  switch (type) {
    case ActionBooks.BOOKS_REQUEST:
    case ActionType.LOGIN_REQUEST:
    case ActionType.REFRESH_USER_REQUEST:
    case ActionType.REGISTRATION_REQUEST:
    case ActionType.SET_GOOGLE_TOKEN:
    case trainingActions.ActionType.TRAINING_REQUEST:
    case trainingActions.ActionType.TRAINING_POST_REQUEST:
      // case ActionBooks.BOOK_UPDATE_START:
      return true;
    case ActionBooks.BOOKS_SUCCESS:
    case ActionType.LOGIN_SUCCESS:
    case ActionType.LOGIN_ERROR:
    case ActionType.REFRESH_USER_SUCCESS:
    case ActionType.REFRESH_USER_ERROR:
    case ActionType.REGISTRATION_SUCCESS:
    case ActionType.REGISTRATION_ERROR:
    case trainingActions.ActionType.GET_TRAINING:
    case ActionBooks.BOOKS_ERROR:
      // case ActionBooks.BOOK_UPDATE:
      return false;
    default:
      return state;
  }
};

export default loaderReducers;
