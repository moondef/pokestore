import React, { Fragment, Component } from 'react'
import styled from 'styled-components'
import { Header, Container } from '../../ui'
import Card from '../../ui/organisms/card'
import { rootUrl } from '../../api'

export class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    fetch(rootUrl)
      .then(res => res.json())
      .then(data => {
        const cards = data.data.map(e => <Card {...e} key={e.id} />)
        this.setState({ cards })
      })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <CardsWrapper>
          {this.state.cards}
        </CardsWrapper>
      </Fragment>
    )
  }
}

const CardsWrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
