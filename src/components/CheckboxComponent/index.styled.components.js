import styled from 'styled-components';

const Col = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 100%;
`;

const ColText = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 8px;
`;

const Row = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
`;

const MarginTop = styled.span`
  margin-top: 32px;
`;

const EachOption = styled.div`
  cursor: pointer;
  display: flex;
  height: 48px;
  width: 150px;
  margin-right: 16px;
  align-items: center;
  padding: 0 16px;
  border-radius: 5px;
  border: 1px solid
    ${(props) => (props.isActive ? "#309b42" : "#cbcbcb")};
`;

const EachOptionTitle = styled.p`
  margin: 0;
  color: #1f2933;
  margin-left: 10px;
  font-size: 16px;
`;

export {
    Col,
    Row,
    ColText,
    EachOption,
    MarginTop,
    EachOptionTitle,
}