export const getTotal = cart => cart.reduce(((prev, curr) => prev + curr.price * curr.count), 0);
