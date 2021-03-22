import styled from 'styled-components'
import { Center } from '@components/Layout/utils'
import { rem } from '@utils/tools'

export const Tag = styled.form`
  
`

export const Env = styled(Center)`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${rem(40)};
  min-height: 60vh;
  padding: ${rem(50)};
  max-width: ${rem(800)};
`


export const Header = styled.div``

export const Steps = styled.ul`
  margin: 0;
  padding: 0;
`

export const Step = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const Info = styled.small`
  color: ${props => props.theme.colors.blue};
  display: block;
  margin-bottom: ${rem(10)};
`

export const Title = styled.h2`
  color: ${props => props.theme.colors.offblack};
  font-size: ${rem(26)};
  font-weight: 700;
  margin: 0;
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 ${rem(-15)};
  padding: 0;
  width: calc(100% + ${rem(30)});
`

export const Group = styled.li`
  list-style: none;
  flex: 1 1 ${rem(300)};
  margin: ${rem(15)};
`

export const Label = styled.label`
  color: ${props => props.theme.colors.offblack};
  display: block;
  font-size: ${rem(16)};
  font-weight: 600;
  margin: 0;
`

export const Text = styled.input`
  border: 0 none;
  border-radius: 0;
  border-bottom: ${rem(1)} solid ${props => props.theme.colors.darkgray};
  font-size: ${rem(16)};
  font-weight: 400;
  line-height: ${rem(16)};
  height: ${rem(40)};
  padding: ${rem(18)} 0 ${rem(6)};
  outline: none;
  transition: ${props => props.theme.transition};
  width: 100%;

  &:focus {
    border-color: ${props => props.theme.colors.blue}
  }
`

export const Checkbox = styled.input``

export const Select = styled.select``

export const Option = styled.option``