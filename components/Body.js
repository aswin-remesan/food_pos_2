import Navbar from "./Navbar"
import Grid from "./Grid"
import Cart from "./Cart"
import styled from "styled-components"



function Body() {
    return (
        <Container>
            <Navbar />
            <Grid />
            <Cart />
        </Container>
    )
}

export default Body


const Container = styled.div`
    /* margin-top: 3.75rem; */
    /* display: grid; */

    /* position: relative; */
    overflow: hidden;
    /* grid-template-columns: 1fr 1fr; */
    /* justify-content: space-between; */
    
`;