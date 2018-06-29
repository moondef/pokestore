import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../store/actions'

import { Layout, Button } from '../atoms'
import { color } from '../theme'

class Card extends Component {
  state = { count: 0 }

  componentDidMount() {
    const el = this.props.store.find(e => e.name === this.props.name)
    if (el) this.setState({ count: el.count })
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleAddToCart = () => {
    this.props.addToCart({ name: this.props.name, price: this.props.price })
    this.increment()
  }

  render() {
    return (
      <CardWrapper width={15} flow="column" padding={1} align="center" >
        <Title>{this.props.name}</Title>
        <Image src={this.props.image} />
        <span>Price: {this.props.price}$</span>
        <br />
        <div>
          Type: {this.props.type.map((e, i) => <Type key={`type-${e}-${i}`}>{e}</Type>)}
        </div>
        <br />
        <span>Species: {this.props.species}</span>
        <br />


        <div>
          Abilities: <br /> <br /> {this.props.abilities.map((e, i) => <Type key={`ability-${e}-${i}`}>{e.naming}</Type>)}
        </div>

        <Buy>
          <Button onClick={this.handleAddToCart}>+</Button> |
          <span>{this.state.count}</span>
        </Buy>
      </CardWrapper>
    )
  }
}

const mapStateToProps = store => ({
  store
})

const mapDispatchToProps = dispatch => ({
  addToCart: (payload) => dispatch({ type: ADD_TO_CART, payload }),
  removeFromCart: (pokemon) => dispatch({ type: REMOVE_FROM_CART, pokemon })
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)

const CardWrapper = styled(Layout)`
  font-size: 0.9rem;
  text-align: center;
  border-radius: 5px;
  border: 2px solid ${color.primary};
  margin: 0.6rem;

  @media screen and (max-width: 485px) {
    width: 100%;
  }
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
  display: flex;
  width: 100%;
  margin: 0.5rem;
  border-radius: 3px;
  border: 1px solid #0000FF;
  padding: 0.1rem;
  font-size: 0.85rem;
  cursor: pointer;
`

const Buy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`
