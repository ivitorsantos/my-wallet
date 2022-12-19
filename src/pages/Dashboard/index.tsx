import React from 'react';

import { Container } from './style';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';


const options = [
    {value: 'Vitor', label: 'Vitor'},
    {value: 'Gabriel', label: 'Gabriel'},
    {value: 'Santos', label: 'Santos'},

]


const Dashboard: React.FC = () => {
    return(
        <Container>
            <ContentHeader title='Dashboard'>
                <SelectInput options ={options}/>
            </ContentHeader>
        </Container>
    )
}

export default Dashboard