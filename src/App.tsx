import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout"

import { ThemeProvider } from  'styled-components'

//Importando os temas
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";


//Importando as paginas
import Dashboard from "./pages/Dashboard";
import List from "./pages/List";
import SignIn from "./pages/SignIn";

const App: React.FC = () => {
    return(
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Layout>
                <Dashboard/>
            </Layout>
        </ThemeProvider>
    )
}

export default App