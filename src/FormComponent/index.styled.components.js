import styled from 'styled-components';
import Card from 'antd/lib/card';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

const Container = styled.div`
    display: grid;
    justify-content: space-between;
    grid-template-columns: calc(70% - 10px) calc(30% - 10px);
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    margin-left: 20px;
    overflow: auto;
`;

const FieldsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: calc(100% - 64px);
    background-color: #f5f7fa;
    border-radius: 10px;
    padding: 32px;
`;

const SectionCard = styled(Card)`
    border-radius: 10px;
    margin-top: 32px;
    background: white !important;
    box-shadow: 0 0 10px 0 rgba(31, 41, 51, 0.1);

    :first-child {
        margin-top: 0;
    }

    & .ant-card-head {
        font-size: 20px;
        font-weight: bold;
        padding: 16px 16px 0 16px;
    }
    & .ant-card-body {
        border-top: 1px solid #e4e7eb;
        margin-top: 10px;
        padding: 0px 16px 32px 16px;
    }
`;

const RightAlign = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;

const Form = styled.form``;

export {
    Form,
    Wrapper,
    Container,
    RightAlign,
    SectionCard,
    FieldsContainer,
}