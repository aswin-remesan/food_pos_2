import styled from "styled-components"
import Category from "./Category"

function Navbar() {
    return (
        <Container>
            <Category id={"MAINS"} page={"/mains"} icon={"/icons/mains.svg"}/>
            <Category id={"STARTERS"} page={"/starters"} icon={"/icons/starters.svg"}/>
            <Category id={"COCKTAILS"} page={"/cocktails"} icon={"/icons/cocktails.svg"}/>
            <Category id={"DESSERT"} page={"/dessert"} icon={"/icons/dessert.svg"}/>
            <Category id={"SNACKS"} page={"/snacks"} icon={"/icons/snacks.svg"}/>
        </Container>
    )
}

export default Navbar


const Container = styled.div`     
    display: flex;
    flex-direction: column;
    height: 93.7%;
    max-width: 13rem;
    overflow-x: hidden;
    overflow-y: scroll;
    border-bottom-right-radius: 10px;
    box-shadow: 0px 4px 14px -3px;
    background-color: white;
    position: fixed;
    z-index: 1;

    margin-top: 3.75rem;
    

    ::-webkit-scrollbar {
        display: none;
    }
`;
