import React, { Children } from 'react';

import { Container, TittleContainer, Controllers } from './style';


interface iContentHeaderProps {
    title: string;
    children: React.ReactNode;
}


const ContentHeader: React.FC<iContentHeaderProps> = ({title, children}) => {

    return (
        <Container>
            <TittleContainer>
                <h2>{title}</h2>
            </TittleContainer>
            <Controllers>
                {children}
            </Controllers>
        </Container>
    )
}

export default ContentHeader