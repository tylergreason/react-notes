import { INote } from './Common/Interfaces';

interface ActionInterface  {
    type: string,
    item?: INote
}

function updateStorage(cart: INote[]) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function sortCart(cart: INote[]) {
  return cart.sort((a, b) => +a.id -  +b.id);
}

// a pure function that returns the new cart state depending on the action string
export default function cartReducer(cart: any, action: ActionInterface) {
switch (action.type) {
  case "empty":
    updateStorage([]); 
    return [];
  case "add": {
    const newCart = [...cart, action.item]
    updateStorage(newCart);
    return newCart;
    }
  case "delete": {
    const newCart = cart.filter((ele: INote) => ele.id !== action.item?.id);
    updateStorage(newCart);
    return newCart;
  }
  case "edit": {
    const newCart = cart.filter((ele: INote) => ele.id !== action.item?.id);
    newCart.push(action.item);
    return sortCart(newCart);
  }
    default: 
      throw new Error('Unhandled action '  + action.type);
  }
}