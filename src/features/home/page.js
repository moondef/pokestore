import React from 'react'
import { Header, Button, Card } from '../../ui'

export const HomePage = () => (
  <React.Fragment>
    <Header />
    <Card id="1" name="Bulbasaur" price="30" image="https://img.pokemondb.net/artwork/bulbasaur.jpg"
      type={["grass", "poison"]} species="Seed Pokemon"
      abilities={[{ naming: "Overgrow", hidden: false }, { naming: "Chlorophyll", hidden: true }]} />
  </React.Fragment>
)
