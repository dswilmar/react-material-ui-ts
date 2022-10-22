import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import { darkTheme, lightTheme } from "./shared/themes";

const App = () => {
  return (
    <AppThemeProvider>    
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>  
  );
}

export default App;
