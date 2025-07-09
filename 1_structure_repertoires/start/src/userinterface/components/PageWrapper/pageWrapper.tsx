import {ReactNode} from "react";
import NavBar from "@foodsapp/components/NavBar/NavBar.tsx";
import {Container, Heading} from "@chakra-ui/react";

const GAP = "2.1rem";

function PageWrapper({title, children}: {title: string, children: ReactNode}): ReactNode {
	return (
		<>
			<NavBar />
			<Container
				position="relative"
				bg="rgba(255, 182, 193, 0.9)"
				backdropFilter="blur(6px)"
				borderRadius="12px"
				margin={GAP}
				paddingY={`calc(${GAP} * 2)`}
				width={`calc(100% - ${GAP} * 2)`}
				minHeight={`calc(100vh - ${GAP} * 2)`}
				maxWidth="auto"
			>
				<Heading
					fontSize="4rem"
					color="black"
					textAlign="center"
					fontWeight="300"
					data-testid="title-page"
				>
					{title}
				</Heading>
				{children}
			</Container>
		</>
	)
}

export default PageWrapper;
