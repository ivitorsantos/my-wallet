import React, {PropsWithChildren} from "react";
import { Grid } from "./style"

import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return(

        <Grid>
            <MainHeader/>
            <Aside/>
            <Content>
                {children}
            </Content>
        </Grid>
    )
}

export default Layout