import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts/ThemeContext";

export const AppRoutes = () => {
    const { toogleTheme } = useAppThemeContext();
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Button onClick={toogleTheme} variant="contained" color="primary">Mudar tema</Button>} />
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    )
}