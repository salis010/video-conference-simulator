import React from 'react'
import { ChatWindow } from './chat-window'
import { Tables } from './tables/index'

export const App = () =>
	<React.Fragment>
		<h1>Video Conference Simulator</h1>
		<Tables />
		<ChatWindow />
	</React.Fragment>
