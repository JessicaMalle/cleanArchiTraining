import {ReactNode} from "react";
import NavBar from "@foodsapp/components/NavBar/NavBar.tsx";
import {Container, Heading, Box} from "@chakra-ui/react";

const GAP = "2.1rem";

function PageWrapper({title, children}: {title: string, children: ReactNode}): ReactNode {
	return (
		<Box
			display="grid"
			gridTemplateRows="80px 1fr"
			height="100vh"
			overflow="hidden"
		>
			<NavBar />
			<Box
				overflow="auto"
				padding={GAP}
			>
				<Container
					position="relative"
					bg="rgba(255, 182, 193, 0.9)"
					backdropFilter="blur(6px)"
					borderRadius="12px"
					paddingY={`calc(${GAP} * 2)`}
					width="100%"
					minHeight={`calc(100% - ${GAP})`}
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
			</Box>
		</Box>
	)
}

export default PageWrapper;
