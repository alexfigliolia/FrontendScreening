import styled from "styled-components";
import Progress from "antd/lib/progress";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: calc(100% - 60px);
  margin-left: 30px;
  justify-content: center;
  align-items: flex-start;
  font-family: Lato;
`;

const ChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7fa;
  height: 262px;
  width: 262px;
  border-radius: 8px;
  position: relative;
  position: fixed;
`;

const ChartInfo = styled.div`
  position: absolute;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 156px;
  width: 156px;
  margin-left: 2px;
  border-radius: 78px;
  background-color: #309b42;
`;

const Title = styled.p`
  margin: 0;
  font-size: 36px;
  color: white;
  font-weight: bold;
`;

const TitleInfo = styled.p`
  margin: 0;
  font-size: 12px;
  color: white;
`;

const ProgressChart = styled(Progress)`
  width: 202px;
  height: 202px;
  div {
    width: 100% !important;
    height: 100% !important;
  }
  transition: 0.5s;
  & .ant-progress-text {
    display: none;
  }
`;

export { Wrapper, ChartContainer, ProgressChart, ChartInfo, Title, TitleInfo };
