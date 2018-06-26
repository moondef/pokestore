import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions'

export const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCart(state, action.payload)
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
