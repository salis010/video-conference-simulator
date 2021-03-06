import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { JoinButton } from '../join-button/index'
import { Participant } from './participant'

const tableSize = 250
const circleTableSize = 110

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Table = styled.div`
  position: relative;
  width: ${tableSize + 'px'};
  height: ${tableSize + 'px'};
  margin: 20px;
  background-color: ${props => props.backgroundColor};
  border: ${props => props.joined ? "3px solid RGB(100, 100, 150)" : "none"};
  border-radius: 4px;
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0 10px 0;
`

const TableTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  font-weight: bold;
  color: RGB(100, 100, 150);
  width: 75px;
  height: 30px;
  border-radius: 4px;
`

const CircleTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: ${circleTableSize + 'px'};
  height: ${circleTableSize + 'px'};
  left: ${((tableSize - circleTableSize) / 2) + 'px'};
  top: ${((tableSize - circleTableSize) / 2) + 'px'};
  background-color: RGB(180, 180, 180);
  border-radius: 9999px;
  background-image: ${props => props.isBroadcasting ? "url('./components/tables/camera.png')" : 'none'};
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: ${tableSize + 'px'};
  bottom: 15px;
`

export class Tables extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.socket.on('mocked-activity', data => {
      this.props.onUpdateTables(data.tables)
      this.props.onUpdateNotifications(data.notifications)
    })
  }

  render() {
    return (
      <Wrapper>
        {this.props.tables.map(table =>
          <Table
            key={table.id}
            backgroundColor={table.backgroundColor}
            joined={table.joined}
          >
            <TitleWrapper>
              <TableTitle>{table.name}</TableTitle>
            </TitleWrapper>
            <CircleTable isBroadcasting={this.props.tables[table.id].isBroadcasting}/>
            {table.participants.map((participant, index) =>
              <Participant
                key={index}
                position={index}
                participant={participant}
                tableSize={tableSize}
                circleTableSize={circleTableSize}/>)}
            <ButtonWrapper>
              <JoinButton id={table.id} joined={table.joined}/>
            </ButtonWrapper>
          </Table>
        )}
      </Wrapper>
    )
  }
}
