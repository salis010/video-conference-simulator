import React from 'react'
import styled from '@emotion/styled'

const size = 30
const alertsSize = 60

const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: ${props => props.left + 'px'};
  top: ${props => props.top + 'px'};
  width: ${size + 'px'};
  height: ${size + 'px'};
  font-size: 16px;
  color: RGB(250, 250, 250);
  background-color: RGB(150, 100, 100);
  border-radius: ${size + 'px'};
  z-index: 2;
`

const CameraAlert = styled.div`
  position: absolute;
  left: ${props => props.left + 'px'};
  top: ${props => props.top + 'px'};
  width: ${alertsSize + 'px'};
  height: ${alertsSize + 'px'};
  z-index: 3;
  background-image: ${props => props.hasWebcamIssue ? "url('./components/tables/camera-red.png')" : 'none'};
  background-repeat: no-repeat;
  background-position: top 8px left 10px;
`

const ConnectionAlert = styled.div`
  position: absolute;
  left: ${props => props.left + 'px'};
  top: ${props => props.top + 'px'};
  width: ${alertsSize + 'px'};
  height: ${alertsSize + 'px'};
  z-index: 3;
  background-image: ${props => props.hasConnectionIssue ? "url('./components/tables/connection-red.png')" : 'none'};
  background-repeat: no-repeat;
  background-position: top 8px left 34px;
`

export const Participant = props => {
  let left, top
  let leftAlerts, topAlerts

  switch(props.position) {
    case 0:
      left = (props.tableSize - props.circleTableSize - size) / 2
      top = (props.tableSize - size) / 2
      leftAlerts = (props.tableSize - props.circleTableSize - alertsSize) / 2
      topAlerts = (props.tableSize - alertsSize) / 2
      break
    case 1:
      left = (props.tableSize - size) / 2
      top = (props.tableSize - props.circleTableSize - size) / 2
      leftAlerts = (props.tableSize - alertsSize) / 2
      topAlerts = (props.tableSize - props.circleTableSize - alertsSize) / 2
      break
    case 2:
      left = (props.tableSize + props.circleTableSize - size) / 2
      top = (props.tableSize - size) / 2
      leftAlerts = (props.tableSize + props.circleTableSize - alertsSize) / 2
      topAlerts = (props.tableSize - alertsSize) / 2
      break
    case 3:
      left = (props.tableSize - size) / 2
      top = (props.tableSize + props.circleTableSize - size) / 2
      leftAlerts = (props.tableSize - alertsSize) / 2
      topAlerts = (props.tableSize + props.circleTableSize - alertsSize) / 2
      break
    default:
      left = (props.tableSize - props.circleTableSize - size) / 2
      top = (props.tableSize - size) / 2
      leftAlerts = (props.tableSize - props.circleTableSize - alertsSize) / 2
      topAlerts = (props.tableSize - alertsSize) / 2
      break
  }
  return (
    <React.Fragment>
      <CameraAlert
        hasWebcamIssue={props.participant.hasWebcamIssue}
        left={leftAlerts}
        top={topAlerts}
      />
      <ConnectionAlert
        hasConnectionIssue={props.participant.hasConnectionIssue}
        left={leftAlerts}
        top={topAlerts}
      />
      <User left={left} top={top}>{props.participant.name[0]}</User>
    </React.Fragment>
  )
}
