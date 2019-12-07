import React from 'react'
import styled from '@emotion/styled'
import { JoinButton } from '../join-button/index'
import { Participant } from './participant'

const tableSize = 250
const circleTableSize = 110

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Table = styled.div`
  position: relative;
  width: ${tableSize + 'px'};
  height: ${tableSize + 'px'};
  margin: 40px;
  background-color: ${props => props.backgroundColor};
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
  color: RGB(240, 240, 240);
  background-color: RGB(100, 100, 150);
  width: 75px;
  height: 30px;
  border-radius: 4px;
`

const CircleTable = styled.div`
  position: absolute;
  width: ${circleTableSize + 'px'};
  height: ${circleTableSize + 'px'};
  left: ${((tableSize - circleTableSize) / 2) + 'px'};
  top: ${((tableSize - circleTableSize) / 2) + 'px'};
  background-color: RGB(180, 180, 180);
  border-radius: 9999px;
  z-index: 1;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: ${tableSize + 'px'};
  bottom: 15px;
`

export const Tables = (props) =>
  <Wrapper>
    {props.tables.map(table =>
      <Table key={table.id} backgroundColor={table.backgroundColor}>
        <TitleWrapper>
          <TableTitle>{table.name}</TableTitle>
        </TitleWrapper>
        <CircleTable />
        {table.participants.map((participant, index) =>
          <Participant key={index} position={index} name={participant} tableSize={tableSize} circleTableSize={circleTableSize}/>)}
        <ButtonWrapper>
          <JoinButton id={table.id} joined={table.joined}/>
        </ButtonWrapper>
      </Table>
    )}
  </Wrapper>
