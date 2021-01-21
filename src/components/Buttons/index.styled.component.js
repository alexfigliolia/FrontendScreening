import styled from "styled-components";
import Spin from "antd/lib/spin";
import darken from "polished/lib/color/darken";

const Loader = styled(Spin)`
  margin-top: 5px !important;
  margin-left: 10px !important;
`;

const Button = styled.button`
  ${(props) => {
    const { marginTop, disabled } = props;
    const bgColor = disabled ? "#9aa5b1" : "#309b42";
    return `
            display: flex;
            align-items: center;
            color: white;
            align-self: flex-start;
            margin-top: ${marginTop};
            padding: 0 16px;
            background-color: ${bgColor};
            outline: none;
            text-decoration: none;
            border: none;
            font-size: 16px;
            font-weight: 700;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
            text-transform: capitalize;
            justify-content: center;
            height: 48px;
            min-width: 150px;

            & div span * {
                background-color: black;
            }

            :hover {
                background: ${darken(0.1, bgColor)};
                box-shadow: 0px 2px 5px -1px ${bgColor};
            }

        `;
  }}
`;

export { Loader, Button };
