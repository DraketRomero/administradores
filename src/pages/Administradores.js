import React from 'react';
import Navbar from './../components/index/Navbar';
import styled from "styled-components";
import ListView from '../components/index/ListView';
import AdministradoresView from './../components/Administradores/AdministradoresView';

const Administradores = () => {
    return (
        <ContenedorMain>
            <Navbar />
            <ListView />
            <AdministradoresView />
 

        </ContenedorMain>
    )

}

const ContenedorMain = styled.div`
display: grid;
font-family: Montserrat;
`;
export default Administradores;