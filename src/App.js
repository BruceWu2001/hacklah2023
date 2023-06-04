import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom"
import Home from "./scenes/home/Home"
import Topbar from "./global/Topbar"
import Upload from"./scenes/upload/Upload"
import DisplayArgument from "./scenes/displayArgument/DisplayArgument";

function App() {
    const [theme, colorMode] = useMode();

  return ( <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div className="app" display="flex" flex-direction="column">
        <main className="content">
                <Topbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/upload" element={<Upload/>}/>
                    <Route name="displayArgument" path="/displayArgument/:id" element={<DisplayArgument/>} />
                </Routes>
        </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
