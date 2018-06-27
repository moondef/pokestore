import styled from 'styled-components'
import { color } from '../theme'

export const Button = styled.button`
  display: flex;
  cursor: pointer;

  border-radius: 3px;
  border: 1px solid ${color.primary};
  background-color: ${color.primary};
  color: ${color.background};

  outline: none !important;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 2rem;
  padding: 0 0.5rem;
  justify-content: center;
`
