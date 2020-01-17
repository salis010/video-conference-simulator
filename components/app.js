import React from 'react'
import styled from '@emotion/styled'
import { Tables } from './tables/index'
import { NotificationWindow } from './notification-window/index'

const H1 = styled.h1`
	margin: 10px;
	color: RGB(100, 100, 100);
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const App = () =>
	<Wrapper>
		<H1>Video Conference Simulator</H1>
		<NotificationWindow />
		<Tables />
	</Wrapper>
