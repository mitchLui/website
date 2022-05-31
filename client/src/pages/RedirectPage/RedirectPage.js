import React, { useEffect } from "react";
import { Container } from "../../components/Container/Container";

export function RedirectPage({ redirect }){
    
    useEffect(() => {
        window.location.assign(redirect);
    }, [redirect]);

    return (
        <Container>
            <h1>Redirecting...</h1>
        </Container>
    )
}