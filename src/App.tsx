import { AppShell, SaasProvider } from "@saas-ui/react";
import {
  NavGroup,
  Sidebar,
  SidebarSection,
  SidebarToggleButton,
} from "@saas-ui/sidebar";
import FiltersBar from "./components/FiltersBar";
export const App = () => (
  <SaasProvider>
    <AppShell
      sidebar={
        <Sidebar h="100vh" backgroundColor={"black"}>
          <SidebarSection aria-label="Main">
            <NavGroup p=".5rem">
              <FiltersBar />
            </NavGroup>
          </SidebarSection>
          <SidebarToggleButton  bgColor={"purple.300"} ml=".2rem"/>
        </Sidebar>
      }
      children={undefined}
    />
  </SaasProvider>
);
