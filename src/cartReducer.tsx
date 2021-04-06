interface ActionInterface  {
    type: string,
    item?: string
}

// a pure function that returns the new cart state depending on the action string
export default function cartReducer(cart: any, action: ActionInterface) {
  switch (action.type) {
    case "empty": 
      return [];
    case "add": 
      return [...cart, action.item]
    default: 
      throw new Error('Unhandled action '  + action.type);
  }
}