import {Canvas} from '@react-three/fiber';
import styled from 'styled-components';
import InitialPage from './InitialPage';
import Cube from '../components/Cube3D';
export default function Home() {
	return (
		<Main>
			<InitialPage />
			<Canvas
				camera={{
					fov: 64,
					position: [2.3, 1.5, 2.3],
				}}
			>
				<Cube />
			</Canvas>

		</Main>
	);
}

const Main = styled.main`
	background: ${({theme}) => theme.colors.background};
`;
