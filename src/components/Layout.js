import { render } from '@testing-library/react';
import React from 'react';
import { Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

export const Layout = (props) => {
    render()
    return(
        <Container>
            {props.children}
        </Container>
    );
}
