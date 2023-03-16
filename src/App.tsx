import {ThemeProvider} from 'styled-components';
import dark from './assets/theme/dark';
import Router from './routes';

function App() {
	return (
		<ThemeProvider theme={dark}>
			<Router />
		</ThemeProvider>
	);
}

export default App;
