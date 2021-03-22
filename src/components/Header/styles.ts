import styled from 'styled-components'
import { Center } from '@components/Layout/utils'
import { rem } from '@utils/tools'

export const Tag = styled.header`
  background-color: ${props => props.theme.colors.white};
  position: absolute;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
`

export const Env = styled(Center)`
  padding: ${rem(16)};
`

export const Logo = styled.img`
  display: block;
  max-width: ${rem(145)};
`