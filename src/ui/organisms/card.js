import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { Layout, Button } from '../atoms'
import { color } from '../theme'

export const Card = ({ id, name, price, image, type, species, abilities }) => (
  <CardWrapper width={15} flow="column" padding={1} align="center" >
    <Title>{name}</Title>
    <Image src={image} />
    <span>Price: {price}$</span>
    <br />
    <div>
      Type: {type.map((e, i) => <Type key={`type-${e}-${i}`}>{e}</Type>)}
    </div>
    <br />
    <span>Species: {species}</span>
    <br />
    <div>
      Abilities: <br /> <br /> {abilities.map((e, i) => <Type key={`ability-${e}-${i}`}>{e.naming}</Type>)}
    </div>

    <Buy>
      <Button>+</Button>
    </Buy>
  </CardWrapper>
)

const CardWrapper = styled(Layout)`
  font-size: 0.9rem;
  text-align: center;
  border-radius: 5px;
  border: 2px solid ${color.primary};
  margin: 0.6rem;
`

const Title = styled.h2`
  color: ${color.primary};
  padding: 0;
  margin: 0;
`

const Image = styled.img`
  width: 100px;
  margin: 0 auto;
  padding: 0.6rem;
`

const Type = styled.span`
  margin: 0.5rem;
  border-radius: 3px;
  border: 1px solid #0000FF;
  padding: 0.1rem;
  font-size: 0.85rem;
  cursor: pointer;
`

const Buy = styled.div`
  margin: 1rem;
`;
