import styled from 'styled-components';
export default function Home() {
	return (
		<Container>
			<h1>I DO WHAT WHAT I LOVE AND I LOVE WHAT I DO</h1>
			<div>Scroll Down</div>
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

	div {
		position: absolute;
		bottom: 0;
		color: red;
	}
`;
