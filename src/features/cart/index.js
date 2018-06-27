import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { Header, Container, Cart, Layout, Button, Total } from '../../ui'
import { REMOVE_FROM_CART, CLEAR_CART } from '../../store/actions'

class CartPage extends Component {
  state = { data: [] }

  componentDidMount() {
    const data = this.props.store.map((e, i) => (
      <CartItem flow="row" justify="center" align="space-between" padding={1} name={e.name} key={`poke-${i}-${e.name}`}>
        <ItemName>
          <span>{e.name}</span>
        </ItemName>
        <div>
          <span>{e.price}$</span>
        </div>
        <div>
          <span>{e.count}</span>
        </div>
        <Button onClick={() => {
          this.props.removeFromCart(e)
          this.setState({ data: this.state.data.filter(el => el.props.name !== e.name) }, console.log(this.state.data))
        }}>Remove</Button>
      </CartItem>)
    )

    this.setState({ data })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <CartWrapper>
          <Button onClick={() => {
            this.props.clearCart()
            this.setState({ data: [] })
          }}>Clear cart</Button>
          <Cart>
            {this.state.data}
          </Cart>
          <Total cart={this.props.store} />
        </CartWrapper>
      </Fragment>
    )
  }
}

const mapStateToProps = store => ({
  store
})

const mapDispatchToProps = dispatch => ({
  removeFromCart: payload => dispatch({ type: REMOVE_FROM_CART, payload }),
  clearCart: () => dispatch({ type: CLEAR_CART })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage)


const CartWrapper = styled(Container)`
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
`

const CartItem = styled(Layout)`
  align-items: center;
`
const ItemName = styled.div`
  max-width: 100px;
  width: 100%;
`
