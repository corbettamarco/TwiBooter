import { AppShell, SaasProvider } from "@saas-ui/react";
import {
  NavGroup,
  Sidebar,
  SidebarSection,
  SidebarToggleButton,
} from "@saas-ui/sidebar";
import FiltersBar from "./components/FiltersBar";
import { ClipList } from "./components/ClipList";
import { useState } from "react";
import { ClipType } from "./types/ClipType";

export const App = () => {
  const [clips,setClips] = useState<ClipType[]>([]);

  return(
  <SaasProvider>
    <AppShell
      sidebar={
        <Sidebar h="100vh" backgroundColor={"black"}>
          <SidebarSection aria-label="Main">
            <NavGroup p=".5rem">
              <FiltersBar clips={clips} setClips={()=>setClips}/>
            </NavGroup>
          </SidebarSection>
          <SidebarToggleButton  bgColor={"purple.300"} ml=".2rem"/>
        </Sidebar>
      }
      children={<ClipList/>}
    />
  </SaasProvider>
  );
};
