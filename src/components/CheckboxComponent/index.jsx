import React from "react";
import {
    Col,
    Row,
    ColText,
    EachOption,
    EachOptionTitle,
} from "./index.styled.components";
import CheckboxComponent from "./Checkbox";

const CheckboxElement = (props) => {
    const { id, label, value, handleChange } = props;
    return (
        <Col>
            <ColText> {label} </ColText>
            <Row>
                <EachOption
                    isActive={value}
                    onClick={() => handleChange(id, true)}
                >
                    <CheckboxComponent active={value} />
                    <EachOptionTitle> Yes </EachOptionTitle>
                </EachOption>
                <EachOption
                    isActive={!value}
                    onClick={() => handleChange(id, false)}
                >
                    <CheckboxComponent active={!value} />
                    <EachOptionTitle> No </EachOptionTitle>
                </EachOption>
            </Row>
        </Col>
    );
};

export default CheckboxElement;
