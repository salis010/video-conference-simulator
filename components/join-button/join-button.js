import React from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
  font-weight: bold;
  width: 100px;
  height: 30px;
  color: RGB(240, 240, 240);
  background-color: ${props => props.disabled ? 'RGB(160, 160, 160)' : 'RGB(100, 100, 150)' };
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`

export const JoinButton = props =>
  <Button
    disabled={props.isDisabled}
    onClick={props.onClick}
  >
    {props.joined ? 'Leave' : 'Join'}
  </Button>
