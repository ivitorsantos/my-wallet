import React, {PropsWithChildren} from "react";
import { Container } from "./style"

const Content: React.FC<PropsWithChildren> = ({children}) => {
    return(

        <Container>
            {children}
        </Container>
    )
}

export default Content