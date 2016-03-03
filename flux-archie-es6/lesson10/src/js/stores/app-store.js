import {dispatch, register} from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';
import CartAPI from '../api/CartAPI';

const CHANGE_EVENT = 'change'

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange(){
    this.emit( CHANGE_EVENT )
  },

  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback )
  },

  removeChangeListener( callback ){
    this.removeListener( CHANGE_EVENT, callback )
  },

  getCart(){
<<<<<<< HEAD
    return CartAPI.cartItems;
  },

  getCatalog(){
    return CartAPI.getCatalog();
  },

  getCartTotals(){
    return CartAPI.cartTotals();
=======
    return _cartItems;
  },

  getCatalog(){
    return _catalog.map(item => {
      return Object.assign( {}, item, _cartItems.find( cItem => cItem.id === item.id))
    })
  },

  getCartTotals(){
    return _cartTotals();
>>>>>>> 4f07f9a1d43d08e182344920f55051b3e46d5c41
  },

  dispatcherIndex: register( function( action ){
    switch(action.actionType){
      case AppConstants.ADD_ITEM:
<<<<<<< HEAD
                CartAPI.addItem( action.item );
                break;
      case AppConstants.REMOVE_ITEM:
          CartAPI.removeItem( action.item );
          break;

      case AppConstants.INCREASE_ITEM:
          CartAPI.increaseItem( action.item );
          break;

      case AppConstants.DECREASE_ITEM:
          CartAPI.decreaseItem( action.item );
=======
                _addItem( action.item );
                break;
      case AppConstants.REMOVE_ITEM:
          _removeItem( action.item );
          break;

      case AppConstants.INCREASE_ITEM:
          _increaseItem( action.item );
          break;

      case AppConstants.DECREASE_ITEM:
          _decreaseItem( action.item );
>>>>>>> 4f07f9a1d43d08e182344920f55051b3e46d5c41
          break;
    }

    AppStore.emitChange();

  })
});

<<<<<<< HEAD
export default AppStore;
=======
export default AppStore
>>>>>>> 4f07f9a1d43d08e182344920f55051b3e46d5c41
