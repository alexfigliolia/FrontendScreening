import styled, { css } from 'styled-components'
import { Center } from '@components/Layout/utils'
import { rem } from '@utils/tools'

interface GroupField {
  readonly isHidden: boolean
}

interface StepItem {
  readonly isActive: boolean
}

export const Tag = styled.form`
  
`

export const Env = styled(Center)`
  display: flex;
  justify-content: center;
`


export const Header = styled.div``

export const Steps = styled.ul`
  margin: 0;
  padding: 0;
`

export const Step = styled.li<StepItem>`
  list-style: none;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${rem(40)};
  box-shadow: 0 ${rem(2)} ${rem(5)} 0 rgba(0, 0, 0, .1);
  display: none;
  margin: 0 0 ${rem(32)};
  max-width: ${rem(400)};
  overflow: hidden;
  padding: ${rem(30)} ${rem(30)} ${rem(90)};
  position: relative;

  ${props => props.isActive && css`
    display: block;
  `}
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

export const Bottom = styled.div`
  background-color: ${props => props.theme.colors.blue};
  bottom: 0;
  display: flex;
  height: ${rem(80)};
  justify-content: space-between;
  padding: ${rem(20)} ${rem(30)};
  position: absolute;
  left: 0;
  width: 100%;
`

export const Previous = styled.button`
  background: transparent;
  border: 0 none;
  border-radius: ${rem(20)};
  color: white;
  cursor: pointer;
  font-size: ${rem(14)};
  height: ${rem(40)};
  outline: none;
  padding: 0;
  position: absolute;
  left: ${rem(30)};
  width: auto;
  user-select: none;
`

export const Next = styled.button`
  background-color: ${props => props.theme.colors.green};
  border: 0 none;
  border-radius: ${rem(20)};
  color: white;
  cursor: pointer;
  font-size: ${rem(14)};
  height: ${rem(40)};
  outline: none;
  padding: 0 ${rem(15)};
  position: absolute;
  transition: ${props => props.theme.transition};
  right: ${rem(30)};
  width: ${rem(110)};
  user-select: none;

  &:hover {
    background-color: ${props => props.theme.colors.lightgreen};
  }
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 ${rem(-15)};
  padding: 0;
  width: calc(100% + ${rem(30)});
`

export const Group = styled.li<GroupField>`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  flex: 1 1 ${rem(300)};
  margin: ${rem(15)};

  ${props => props.isHidden && css`
    display: none;
  `}
`

export const Label = styled.label`
  color: ${props => props.theme.colors.offblack};
  cursor: pointer;
  display: block;
  font-size: ${rem(16)};
  font-weight: 600;
  margin: 0;
  order: -1;
  user-select: none;
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

export const Checkbox = styled.input`
  align-self: center;
  margin: 0 ${rem(5)} 0 0;

  & + ${Label} {
    order: initial;
    font-size: ${rem(14)};
  }
`

export const Select = styled.select`
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
`

export const Option = styled.option``