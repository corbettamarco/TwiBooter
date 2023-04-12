import { AppShell, SaasProvider } from "@saas-ui/react";
import {
  NavGroup,
  Sidebar,
  SidebarSection,
  SidebarToggleButton,
} from "@saas-ui/sidebar";
import { useState } from "react";
import { ClipList } from "./components/ClipList";
import FiltersBar from "./components/FiltersBar";
import { ClipType } from "./types/ClipType";

export const App = () => {
  const [clips,setClips] = useState<ClipType[]>([] as ClipType[]);

  return(
  <SaasProvider>
    <AppShell
      sidebar={
        <Sidebar p="0" h="100%" minH="100vh" backgroundColor={"black"} borderRightWidth={"0"}>
          <SidebarSection aria-label="Main">
            <NavGroup p=".5rem">
              <FiltersBar clips={clips} setClips={setClips}/>
            </NavGroup>
          </SidebarSection>
          <SidebarToggleButton  bgColor={"purple.300"} ml=".2rem"/>
        </Sidebar>
      }
      children={<ClipList clips={clips}/>}
    />
  </SaasProvider>
  );
};
