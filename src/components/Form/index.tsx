import * as React from 'react'
import { formData } from '@data'
import { Tag, Env, Header, Steps, Step, Info, Title, List, Group, Label, Text, Checkbox, Select, Option } from './styles'

interface StepProps {
  total: number,
  current: number,
  title: string,
  fields: any
}

interface FieldsProps {
  list: any
}

const Form: React.FunctionComponent = () => {  
  return (
    <Tag>
      <Env>
        <StepsList />
      </Env>
    </Tag>
  )
}

const StepsList: React.FunctionComponent = () => {
  console.info(formData)
  return (
    <Steps>
      { formData.map(({name, fields}, key) => (
          <StepItem key={key} 
            total={formData.length}
            current={key + 1}
            title={name}
            fields={fields}
          />
        ))
      }
    </Steps>
  )
}

const StepItem: React.FunctionComponent<StepProps> = ({ total, current, title, fields }) => {

  return (
    <Step>
      <Header>
        <Info>step {current} of {total}</Info>
        <Title>{title}</Title>
        <FieldsList 
          list={fields}
        />
      </Header>
    </Step>
  )
}

const FieldsList: React.FunctionComponent<FieldsProps> = ({ list }) => {

  return (
    <List>
      { list.map(({ label, id, type, definition, sourceList }, key) => (
        <Group key={key}>
          <Label htmlFor={`${id}`}>{ label }</Label>
          { getField({ id, type, placeholder: definition, sourceList})}
        </Group>
      ))}
    </List>
  )
}

const getField = ({ id, type, placeholder, sourceList }) => {

  switch(type) {
    case "text": 
      return <Text name={id} id={id} type={type} placeholder={placeholder} autoComplete="nocomplete" />

    case "checkbox": 
      return <Checkbox name={id} id={id} type={type} placeholder={placeholder} />

    case "select": 
      return (
        <Select id={id} name={id}>
          { sourceList.map(({name, code}, key) => (
            <Option value={ code }>
              { name }
            </Option>
          ))}
        </Select>
      )

    default: 
      return <Text name={id} type={type} placeholder={placeholder} autoComplete="nocomplete" />
  }
}

export default Form