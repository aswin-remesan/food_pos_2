import styled from "styled-components"



function Cart() {
    return (
        <Container>
            <h1>sdfsdfs</h1>
        </Container>
    )
}

export default Cart


const Container = styled.div`
    width: 26rem;
    height: 93.7%;
    background-color: white;
    position: fixed;
    overflow-x: hidden;
    overflow-y: scroll;
    border-bottom-left-radius: 10px;
    margin-top: 3.75rem;

    top: 0;
    right: 0;
    box-shadow: -4px 0px 14px -3px grey;


    > h1 {
        color: white;
    }

    @media (max-width:1054px) {
        display: none;
    }
`;


