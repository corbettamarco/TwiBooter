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

export const App = () => {
const { isLoading, clips, onSubmit } = useSearch()

  return(
  
    <AppShell
      sidebar={
        <Sidebar p="0" h="100%" minH="100vh" backgroundColor={"gray.800"} borderRightWidth={"0"}>
          <SidebarSection aria-label="Main">
            <NavGroup p=".5rem">
              <FiltersBar onSubmit={onSubmit} />
            </NavGroup>
          </SidebarSection>
          <SidebarToggleButton _hover={{bgColor: "purple.100"}}  bgColor={"purple.300"} ml=".2rem"/>
        </Sidebar>
      }
      children={<ClipList isLoading={isLoading} clips={clips}/>}
    />
  );
};
