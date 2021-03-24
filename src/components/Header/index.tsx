import * as React from 'react'
import { Tag, Env, Logo } from './styles'

const Header: React.FunctionComponent = () => {

  return (
    <Tag>
      <Env>
        <Logo src="images/logo.png" alt="Carta Healthcare" />
      </Env>
    </Tag>
  )
}

export default Header