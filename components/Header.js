import styled from "styled-components"



function Header() {
    return (
        <Container>
            <img src="logo.png" alt="logo"
                height="40"
                width="40"
            ></img>
            <h2>Food POS</h2>
        </Container>
    )
}

export default Header



const Container = styled.div`
    position: fixed;
    display: inline-flex;
    align-items: center;
    height: 3.75rem;
    width: 100%;
    padding: 0.625rem;
    z-index: 1000;
    top: 0;
    box-shadow: 0px 8px 6px -6px grey;
    background-color: white;
`;