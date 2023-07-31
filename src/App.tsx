import { SearchIcon } from "@chakra-ui/icons";
import { AppShell } from "@saas-ui/react";
import {
  NavGroup,
  Sidebar,
  SidebarSection,
  SidebarToggleButton,
} from "@saas-ui/sidebar";
import { ClipList } from "./components/ClipList";
import FiltersBar from "./components/FiltersBar";
import { useSearch } from "./hooks/useSearch";
import { useDisclosure } from "@chakra-ui/react";

export const App = () => {
  const { isLoading, clips, onSubmit } = useSearch();
  const {isOpen, onClose, onOpen}=useDisclosure()

  return (
    <AppShell
      sidebar={
        <Sidebar
          p="0"
          h="100%"
          minH="100vh"
          backgroundColor={"gray.800"}
          borderRightWidth={"0"}
          isOpen={isOpen}
          
        >
          <SidebarSection aria-label="Main">
            <NavGroup p=".5rem">
              <FiltersBar onSubmit={onSubmit} />
            </NavGroup>
          </SidebarSection>

          <SidebarToggleButton
            _hover={{ bgColor: "purple.100" }}
            bgColor={"yellow.400"}
            icon={<SearchIcon />}
            size={"lg"}
            fontWeight={"bold"}
            fontSize={'1.5rem'}
            className={!isOpen ? "beacon" : ""}
            ml={'.7rem'}
            onClick={isOpen ? onClose : onOpen} 
          />
        </Sidebar>
      }
      children={<ClipList isLoading={isLoading} clips={clips} />}
    />
  );
};
