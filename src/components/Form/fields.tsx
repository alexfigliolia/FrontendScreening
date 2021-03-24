import * as React from 'react'
import { List, Group, Label, Text, Checkbox, Select, Option } from './styles'

interface FieldsProps {
  list: any
}

export const FieldsList: React.FunctionComponent<FieldsProps> = ({ list }) => {

  return (
    <List>
      { list.map((item, index) => getGroup(item, index) )}
    </List>
  )
}

const getGroup = (item, index) => {
  const [isHidden, setIsHidden] = React.useState(item.dependencies ? true : false)
  
  React.useEffect(() => {
    if(item.dependencies !== undefined) {
      item.dependencies.forEach(({key, validation}) => {
        const target = document.querySelector<HTMLInputElement>(`#${key}`)

        target?.addEventListener("change", () => {
          if(target.type === "checkbox") {
            setIsHidden(!validation(target.checked))
          } else {
            setIsHidden(!validation(target.value))
          }
        })
      })
    }
  }, [])

  return (
    <Group key={index} isHidden={isHidden}>
      { getField(item)}
      <Label htmlFor={`${item.key}`}>{ item.label }</Label>
    </Group>
  )
}

const getField = ({ key, type, definition: placeholder, sourceList, mask, dependencies }) => {
  switch(type) {
    case "text": 
      return <Text name={key} id={key} type={type} placeholder={placeholder} autoComplete="nocomplete" pattern={mask} required={(!dependencies)} />

    case "checkbox": 
      return <Checkbox name={key} id={key} type={type} placeholder={placeholder} required={(!dependencies)} />

    case "select": 
      return (
        <Select id={key} name={key} defaultValue={sourceList[0].code} required={(!dependencies)}>
          { sourceList.map(({name, code}, index) => (
            <Option key={index} value={ code }>
              { name }
            </Option>
          ))}
        </Select>
      )

    default: 
      return <Text id={key} name={key} type={type} placeholder={placeholder} pattern={mask} autoComplete="nocomplete" />
  }
}