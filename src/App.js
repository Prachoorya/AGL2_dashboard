import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import ChartContainer from "./scenes/global/ChartContainer";
import * as aglApplications from "./apps/agl_apps";
import * as armezoApplications from "./apps/armezo_apps";
import * as nagarroApplications from "./apps/nagarro_apps";
import * as techApplications from "./apps/techefficio_apps";
import * as eyApplications from "./apps/ey_apps";
import * as clearApplications from "./apps/clearquote_apps";
import * as eccentricApplications from "./apps/eccentric_apps";
import * as happiestApplications from "./apps/happiestminds_apps";
import * as phoenixApplications from "./apps/phoenix_apps";
import * as intellizestApplications from "./apps/intellizest_apps";
import * as sensegizApplications from "./apps/sensegiz_apps";
import * as xaneApplications from "./apps/xane_apps";
import { useState, useEffect } from "react";


function App() {
  const [theme, colorMode] = useMode();
  const [selectedChartType, setSelectedChartType] = useState('barchart');
  const [selectedVendor, setSelectedVendor] = useState("agl");

  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
       <CssBaseline />
       <div className="app">
        <Sidebar setChartType={setSelectedChartType} setSelectedVendor={setSelectedVendor} />
        <main className="content">
          <Topbar selectedChartType={selectedChartType} setSelectedVendor={setSelectedVendor} />
          <Routes>
              <Route path="/:chartType/:vendor" element={<ChartContainer selectedChartType={selectedChartType} selectedVendor={selectedVendor} />} />
              
              <Route path="/applications" element={<aglApplications.ApplicationTable1 />} />
              <Route path="/applicationsfrontend" element={<aglApplications.ApplicationTable2 />} />
              <Route path="/applicationsbackend" element={<aglApplications.ApplicationTable3 />} />
              <Route path="/applicationsdepartment" element={<aglApplications.ApplicationTable4 />} />

              <Route path="/armezofrontend" element={<armezoApplications.ApplicationTable_1 />} />
              <Route path="/armezobackend" element={<armezoApplications.ApplicationTable_2 />} />
              <Route path="/armezoarea" element={<armezoApplications.ApplicationTable_3 />} />
              <Route path="/armezodepartment" element={<armezoApplications.ApplicationTable_4 />} />

              <Route path="/nagarrofrontend" element={<nagarroApplications.Application_1 />} />
              <Route path="/nagarrobackend" element={<nagarroApplications.Application_2 />} />
              <Route path="/nagarroarea" element={<nagarroApplications.Application_3 />} />
              <Route path="/nagarrodepartment" element={<nagarroApplications.Application_4 />} />

              <Route path="/techfrontend" element={<techApplications.TechApplication_1 />} />
              <Route path="/techbackend" element={<techApplications.TechApplication_2 />} />
              <Route path="/techarea" element={<techApplications.TechApplication_3 />} />
              <Route path="/techdepartment" element={<techApplications.TechApplication_4 />} />

              <Route path="/eyfrontend" element={<eyApplications.EyApplication_1 />} />
              <Route path="/eybackend" element={<eyApplications.EyApplication_2 />} />
              <Route path="/eyarea" element={<eyApplications.EyApplication_3 />} />
              <Route path="/eydepartment" element={<eyApplications.EyApplication_4 />} />

              <Route path="/cleararea" element={<clearApplications.ClearApplication_1 />} />
              <Route path="/cleardepartment" element={<clearApplications.ClearApplication_2 />} />

              <Route path="/eccentricarea" element={<eccentricApplications.EccentricApplication_1 />} />
              <Route path="/eccentricdepartment" element={<eccentricApplications.EccentricApplication_2 />} />

              <Route path="/happiestarea" element={<happiestApplications.HappiestApplication_1 />} />
              <Route path="/happiestdepartment" element={<happiestApplications.HappiestApplication_2 />} />

              <Route path="/phoenixfrontend" element={<phoenixApplications.PhoenixApplication_1 />} />
              <Route path="/phoenixbackend" element={<phoenixApplications.PhoenixApplication_2 />} />
              <Route path="/phoenixarea" element={<phoenixApplications.PhoenixApplication_3 />} />
              <Route path="/phoenixdepartment" element={<phoenixApplications.PhoenixApplication_4 />} />

              <Route path="/intellizestfrontend" element={<intellizestApplications.IntellizestApplication_1 />} />
              <Route path="/intellizestbackend" element={<intellizestApplications.IntellizestApplication_2 />} />
              <Route path="/intellizestarea" element={<intellizestApplications.IntellizestApplication_3 />} />
              <Route path="/intellizestdepartment" element={<intellizestApplications.IntellizestApplication_4 />} />

              <Route path="/sensegizfrontend" element={<sensegizApplications.SensegizApplication_1 />} />
              <Route path="/sensegizbackend" element={<sensegizApplications.SensegizApplication_2 />} />
              <Route path="/sensegizarea" element={<sensegizApplications.SensegizApplication_3 />} />
              <Route path="/sensegizdepartment" element={<sensegizApplications.SensegizApplication_4 />} />

              <Route path="/xanefrontend" element={<xaneApplications.XaneApplication_1 />} />
              <Route path="/xanebackend" element={<xaneApplications.XaneApplication_2 />} />
              <Route path="/xanearea" element={<xaneApplications.XaneApplication_3 />} />
              <Route path="/xanedepartment" element={<xaneApplications.XaneApplication_4 />} />
          </Routes>
        </main>
       </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
};

export default App;
