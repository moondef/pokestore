import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { Container } from '../atoms'

import { color } from '../theme'

export const Header = () => (
  <HeaderWrapper>
    <Link to="/">HOME</Link>
    <Link to="/cart">CART</Link>
  </HeaderWrapper>
)

const HeaderWrapper = styled(Container)`
  align-items: stretch;
  background-color: ${color.background};
  border-bottom: 1px solid ${color.primary};
  display: flex;
  flex-shrink: 0;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
`
