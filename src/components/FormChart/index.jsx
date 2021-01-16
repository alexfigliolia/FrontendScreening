import React from "react";
import {
  Wrapper,
  ChartContainer,
  ProgressChart,
  ChartInfo,
  Title,
  TitleInfo,
} from "./index.styled.components";

const FormCompletionChart = (props) => {
  const { data } = props;
  const { total, filled } = data;

  const percent = (total && filled) ? (Math.round((filled / total) * 100)) : 0;
  const strokeColor =
    percent === 100 ? "#5ad8a6" : percent > 50 ? "#5c8ff9" : "#ff9d4d";
  return (
    <Wrapper>
      <ChartContainer>
        <ProgressChart
          type="circle"
          percent={percent}
          strokeWidth={4}
          trailColor="#e4e7eb"
          strokeColor={strokeColor}
        />
        <ChartInfo color={strokeColor}>
          <Title> {percent}% </Title>
          <TitleInfo> Form Completed </TitleInfo>
        </ChartInfo>
      </ChartContainer>
    </Wrapper>
  );
};

export default FormCompletionChart;
