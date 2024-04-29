import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import StateContext from './context'

const root = document.getElementById('root')
createRoot(root).render(
	<StrictMode>
		<StateContext>
			<App />
		</StateContext>
	</StrictMode>,
)
