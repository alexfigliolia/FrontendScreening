import * as React from 'react'
import styled from 'styled-components'

const Tag = styled.svg`
  display: block;
  height: 0;
  margin: 0;
  padding: 0;
  width: 0;
`

const Sprite: React.FunctionComponent = () => (
  <Tag>
    <symbol id="star" viewBox="0 0 20 20" fill="none">
      <path className="border" d="M9.9983 1.56627L12.2915 7.71474L12.4128 8.04001H12.76H18.264L13.5593 11.5805L13.2582 11.8071L13.3931 12.159L15.6321 17.9991L10.3 14L9.99954 13.7747L9.69942 14.0004L4.38347 17.9993L6.60727 12.1579L6.74103 11.8066L6.44064 11.5805L1.73594 8.04001H7.21999H7.56627L7.68805 7.71585L9.9983 1.56627Z" stroke="transparent"/>
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
        <path d="M9.9983 1.56627L12.2915 7.71474L12.4128 8.04001H12.76H18.264L13.5593 11.5805L13.2582 11.8071L13.3931 12.159L15.6321 17.9991L10.3 14L9.99954 13.7747L9.69942 14.0004L4.38347 17.9993L6.60727 12.1579L6.74103 11.8066L6.44064 11.5805L1.73594 8.04001H7.21999H7.56627L7.68805 7.71585L9.9983 1.56627Z" fill="white" stroke="white"/>
      </mask>
      <g mask="url(#mask0)">
        <rect className="half" width="10" height="20" fill="transparent"/>
      </g>
    </symbol>
    <symbol id="selected" viewBox="0 0 11 8" fill="none">
      <path d="M4.21427 6.07388L9.53723 0.553772L10.4627 1.44623L4.21427 7.92613L0.537231 4.1129L1.46275 3.22044L4.21427 6.07388Z" fill="white"/>
    </symbol>
    <symbol id="arrow" viewBox="0 0 8 6" fill="none">
      <path d="M7 5.31824L7.7955 4.52274L4.02275 0.749995L0.25 4.52274L1.0455 5.31824L4.02275 2.34098L7 5.31824Z" fill="#969696"/>
    </symbol>
  </Tag>
)

export default Sprite