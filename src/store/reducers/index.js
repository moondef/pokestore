import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../actions'

export const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action.payload)
    case REMOVE_FROM_CART:
      return removeFromCart(state, action.payload)
    case CLEAR_CART:
      return []
    default:
      return state
  }
}

// utils for ADD_TO_CART
const addToCart = (cart, pokemon) => {
  if (inCart(cart, pokemon)) {
    cart.find(item => item.name === pokemon.name).count += 1;
  } else {
    cart.push(pokemon)
  }

  return cart
}

const inCart = (cart, pokemon) => cart.some(item => item['name'] === pokemon.name)

// utils for REMOVE_FROM_CART
const removeFromCart = (cart, pokemon) => {
  const index = cart.indexOf(cart.find(item => item.name === pokemon.name))
  cart.splice(index, index + 1)
  return cart
}
