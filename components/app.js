import React from 'react'
import { Tables } from './tables/index'
import { NotificationWindow } from './notification-window/index'

export const App = () =>
	<React.Fragment>
		<h1>Video Conference Simulator</h1>
		<NotificationWindow />
		<Tables />
	</React.Fragment>
