import React from 'react'
import styled from 'styled-components'

import { color } from '../../ui/theme'

const getTotal = cart => cart.reduce(((prev, curr) => prev + curr.price * curr.count), 0)

export const Total = ({ cart }) => (
  <TotalWrapper>
    Total: {getTotal(cart)}$
  </TotalWrapper>
)

const TotalWrapper = styled.div`
  padding: 1rem;
  margin: 1rem;
  border: 1px solid ${color.primary};
`
