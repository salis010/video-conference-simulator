import React from 'react'
import styled from '@emotion/styled'

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

export const NotificationWindow = props => {
    return <Notifications>{props.notifications.map((item, i) => <P key={i}>{item}</P>)}</Notifications>
}
