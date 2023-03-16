import styled from 'styled-components';
import InitialPage from './InitialPage';
export default function Home() {
	return (
		<Main>
			<InitialPage />
		</Main>
	);
}

const Main = styled.main`
	background: ${({theme}) => theme.colors.background};
`;
