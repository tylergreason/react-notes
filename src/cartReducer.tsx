import { INote } from './Common/Interfaces';

interface ActionInterface  {
    type: string,
    item?: INote
}

function updateStorage(cart: any) {
  localStorage.setItem('cart', JSON.stringify(cart));
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
    default: 
      throw new Error('Unhandled action '  + action.type);
  }
}