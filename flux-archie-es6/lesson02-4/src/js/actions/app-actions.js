import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default  {
  addItem( item ){
    dispatch({
      actionType: AppConstants.ADD_ITEM
    })
  },

  removeItem( item ){
    dispatch({
      actionType: AppConstants.REMOVE_ITEM
    })
  },

  increaseItem( item ){
    dispatch({
      actionType: AppConstants.INCREASE_ITEM
    })
  },

  decreaseItem( item ){
    dispatch({
      actionType: AppConstants.DECREASE_ITEM
    })
  }

}
