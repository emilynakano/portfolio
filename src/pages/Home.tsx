import styled from 'styled-components';
export default function Home() {
	return (
		<Container>
			<h1>I DO WHAT WHAT I LOVE AND I LOVE WHAT I DO</h1>
			<ScrollDown>
				<h1>Scroll Down</h1>
			</ScrollDown>
		</Container>
	);
}

const Container = styled.main`
	position: relative;
 	width: 100vw;
  height: 100vh;
	background: ${({theme}) => theme.colors.background};

	display: flex;
	align-items: center;
	justify-content: center;

	h1 {
		max-width: 700px;
		font-weight: bold;
		font-size: 3em;
		color: ${({theme}) => theme.colors.primary};
		text-align: center;
	}
`;

const ScrollDown = styled.div`
	position: absolute;
	bottom: 10px;
	h1 {
		font-size: 1.5em;
	}
`;
