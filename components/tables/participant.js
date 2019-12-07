import React from 'react'
import styled from '@emotion/styled'

const size = 30;

const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${size + 'px'};
  height: ${size + 'px'};
  position: absolute;
  left: ${props => props.left + 'px'};
  top: ${props => props.top + 'px'};
  font-size: 16px;
  color: RGB(250, 250, 250);
  background-color: RGB(150, 100, 100);
  border-radius: ${size + 'px'};
  z-index: 2;
`

export const Participant = props => {
  let left, top
  switch(props.position) {
    case 0:
      left = (props.tableSize - props.circleTableSize - size) / 2
      top = (props.tableSize - size) / 2
      break
    case 1:
      left = (props.tableSize - size) / 2
      top = (props.tableSize - props.circleTableSize - size) / 2
      break
    case 2:
      left = (props.tableSize + props.circleTableSize - size) / 2
      top = (props.tableSize - size) / 2
      break
    case 3:
      left = left = (props.tableSize - size) / 2
      top = (props.tableSize + props.circleTableSize - size) / 2
      break
    default:
      left = (props.tableSize - props.circleTableSize - size) / 2
      top = (props.tableSize - size) / 2
      break
  }
  return <User left={left} top={top}>{props.name[0]}</User>
}
