import React from 'react'
import styled from '@emotion/styled'

const arr = [1, 2, 3, 4, 5, 6]
const arr2 = arr.slice(-3)

const Notifications = styled.div`
  width: 500px;
  height: 76px;
  padding-left: 10px;
  border: 2px solid RGB(100, 100, 150);
  border-radius: 4px;
`

const P = styled.p`
  height: 20px;
  margin: 5px;
`

export const NotificationWindow = props =>
    <Notifications>{arr2.map((item, i) => <P key={i}>{item}</P>)}</Notifications>
