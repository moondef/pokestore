import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

export const Layout = styled.div`
  display: flex;
  flex-direction: ${(p) => p.flow};
  flex-wrap: ${(p) => p.wrap};
  padding: ${(p) => `${p.padding}rem`};
  ${(p) => p.width && css`
    width: ${p.width}rem
  `};
  ${(p) => p.justify && css`
    justify-content: ${p.justify}
  `};
  ${(p) => p.align && css`
    justify-content: ${p.align}
  `};
`

Layout.propTypes = {
  flow: PropTypes.oneOf(['column', 'row']).isRequired,
  wrap: PropTypes.oneOf(['wrap', 'nowrap']),
  padding: PropTypes.number,
  width: PropTypes.number,
  justify: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'space-between', 'space-around']),
  align: PropTypes.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'baseline']),
}

Layout.defaultProps = {
  wrap: 'nowrap',
  padding: 0,
  gap: 0,
  width: 0,
  justify: undefined,
  align: 'stretch'
}
