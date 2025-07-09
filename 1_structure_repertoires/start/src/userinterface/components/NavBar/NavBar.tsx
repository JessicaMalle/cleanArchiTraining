import {ReactNode} from "react";
import {NavBarViewModel} from "./NavBarViewModel";
import {Flex, Button, Box} from "@chakra-ui/react";

function NavBar(): ReactNode {
	const {navigate} = NavBarViewModel();
	return (
		<Box
			as="nav"
			position="sticky"
			top="0"
			zIndex="1"
			bg="rgba(255, 255, 255, 0.8)"
			backdropFilter="blur(6px)"
			boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1)"
			padding="1rem"
			height="80px" // Fixed height for navbar
			display="flex"
			alignItems="center"
		>
			<Flex justify="center" gap="2rem">
				<Button
					colorScheme="pink"
					variant="solid"
					size="lg"
					onClick={() => navigate('/')}
				>
					🏠 HOME
				</Button>
				<Button
					colorScheme="pink"
					variant="solid"
					size="lg"
					onClick={() => navigate('/edit')}
				>
					⊕ ADD FOOD
				</Button>
			</Flex>
		</Box>
	)
}

export default NavBar;
