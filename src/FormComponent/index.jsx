import React from 'react';
import {
    Form,
    Wrapper,
    Container,
    RightAlign,
    SectionCard,
    FieldsContainer,
} from './index.styled.components';
import { form } from '../utils/data';
import FormCompletionChart from '../components/FormChart';
import { InitialsCapital } from '../utils/utility.functions';
import OutlinedTextField from '../components/OutlinedTextfield';
import CheckboxElement from '../components/CheckboxComponent';
import PrimaryButton from '../components/Buttons';
import MaterialDropdown from '../components/MaterilUIDropdown';

const FormComponent = () => {
    const [formSections] = React.useState(Object.keys(form));
    const [progress, setProgress] = React.useState({ total: 0, filled: 0 });
    const [state, setState] = React.useState({});

    React.useEffect(() => {
        const allStates = {};
        const states = formSections.map(item => {
            form[item].map(elem => {
                allStates[elem.id] = elem.type === "text" ? "" : elem.type === "checkbox" ? false : null;
            })
        });
        setState(prev => ({
            ...prev,
            ...allStates
        }))

    }, [])

    React.useEffect(() => {
        updateProgress()
    }, [state])

    const handleChange = (id, value) => {
        setState(prev => ({
            ...prev,
            [id]: value
        }))
        // setTimeout(() => {
        //     updateProgress();
        // }, 300)
    }

    const updateProgress = () => {
        const allStates = Object.keys(state);
        let completed = 0;
        [...allStates].map(item => {
            if (state[item]) {
                completed += 1;
            }
        })
        setProgress({
            total: allStates.length,
            filled: completed
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted");
    }

    return (
        <Wrapper>
            <Container>
                <FieldsContainer>
                    <Form onSubmit={handleSubmit}>
                        {
                            formSections.map(section => {
                                const sectionContent = form[section];
                                return (
                                    <SectionCard title={InitialsCapital(section)} bordered={false}>
                                        {
                                            sectionContent.map(formElem => {
                                                if (formElem.type === "text"
                                                    || formElem.type === "checkbox"
                                                    || formElem.type === "select"
                                                    || formElem.type === "number") {
                                                    let showElement = true;
                                                    const hasDependencies = formElem.dependencies
                                                        && Object.keys(formElem.dependencies);
                                                    if (hasDependencies) {
                                                        showElement = [...hasDependencies].filter(eachDep => {
                                                            if (typeof formElem.dependencies[eachDep] !== "function") {
                                                                if (state[eachDep]) {
                                                                    return true;
                                                                }
                                                            } else {
                                                                const func = formElem.dependencies[eachDep]
                                                                const toShow = func(state[eachDep]);
                                                                return toShow;
                                                            }
                                                        }).length === hasDependencies.length;
                                                    }
                                                    if (showElement) {
                                                        if (formElem.type === "text") {
                                                            const errorExists = (formElem.mask && state[formElem.id])
                                                                ? !(formElem.mask.test(state[formElem.id]))
                                                                : false;
                                                            return (
                                                                <OutlinedTextField
                                                                    required={true}
                                                                    id={formElem.id}
                                                                    onChange={handleChange}
                                                                    label={formElem.label}
                                                                    placeholder={formElem.definition}
                                                                    error={errorExists}
                                                                />
                                                            )
                                                        } else if (formElem.type === "checkbox") {
                                                            return (
                                                                <CheckboxElement
                                                                    id={formElem.id}
                                                                    label={formElem.label}
                                                                    value={state[formElem.id]}
                                                                    handleChange={handleChange}
                                                                />
                                                            )
                                                        } else if (formElem.type === "select") {
                                                            return (
                                                                <MaterialDropdown
                                                                    id={formElem.id}
                                                                    value={state[formElem.id]}
                                                                    height="56px"
                                                                    title={formElem.label}
                                                                    filterOptions={formElem.sourceList}
                                                                    onOptionClick={handleChange}
                                                                    loading={false}
                                                                />
                                                            )
                                                        } else if (formElem.type === "number") {
                                                            const errorExists = (formElem.mask && state[formElem.id])
                                                                ? !(formElem.mask.test(state[formElem.id]))
                                                                : false;
                                                            return (
                                                                <OutlinedTextField
                                                                    type="number"
                                                                    required={true}
                                                                    id={formElem.id}
                                                                    onChange={handleChange}
                                                                    label={formElem.label}
                                                                    placeholder={formElem.definition}
                                                                    error={errorExists}
                                                                />
                                                            )
                                                        }
                                                    }

                                                } else {
                                                    return <React.Fragment />
                                                }
                                            })
                                        }
                                    </SectionCard>
                                )
                            })
                        }
                        <RightAlign>
                            <PrimaryButton type="submit" label="Submit" marginTop={"32px"} />
                        </RightAlign>
                    </Form>
                </FieldsContainer>
                <FormCompletionChart data={progress} />
            </Container>
        </Wrapper>
    )
}

export default FormComponent;