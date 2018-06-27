import React from 'react'
import styled from 'styled-components'

import { getTotal } from './getTotal'
import { color } from '../../ui/theme'

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
