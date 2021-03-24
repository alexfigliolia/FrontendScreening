import * as React from 'react'
import { formData } from '@data'
import { FieldsList } from './fields'
import { Tag, Env, Header, Steps, Step, Info, Title, Bottom, Previous, Next } from './styles'

interface StepProps {
  isActive: boolean,
  total: number,
  current: number,
  title: string,
  fields: any,
  setActiveStep: (step: number) => void,
  stepsLength: number
}

const Form: React.FunctionComponent = () => {  
  return (
    <Tag method="POST">
      <Env>
        <StepsList />
      </Env>
    </Tag>
  )
}

const StepsList: React.FunctionComponent = () => {
  const [activeStep, setActiveStep] = React.useState(0)

  return (
    <Steps>
      { formData.map(({name, fields}, key) => (
          <StepItem 
            key={key} 
            isActive={activeStep === key}
            total={formData.length}
            current={key}
            title={name}
            fields={fields}
            setActiveStep={setActiveStep}
            stepsLength={formData.length}
          />
        ))
      }
    </Steps>
  )
}

const StepItem: React.FunctionComponent<StepProps> = ({ isActive, total, current, title, fields, setActiveStep, stepsLength }) => {

  return (
    <Step isActive={isActive}>
      <Header>
        <Info>step {current + 1} of {total}</Info>
        <Title>{title}</Title>
        <FieldsList 
          list={fields}
        />
      </Header>
      <Bottom>
        { current > 0 && <Previous type="button" onClick={() => { setActiveStep(current - 1)}}>Previous</Previous> }
        { current < stepsLength - 1 && <Next type="button" onClick={() => { setActiveStep(current + 1)}}>Next</Next> }
        { current === stepsLength - 1 && <Next type="button">Submit</Next> }
      </Bottom>
    </Step>
  )
}

export default Form