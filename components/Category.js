import styled from "styled-components"
import Image from 'next/image'
import MAINS from "../public/icons/Mains"



function Category({id, page, icon}) {
    return (
        <a href={page}>
            <Container>
                
                <Image 
                    src={icon}
                    width={30}
                    height={30}
                    >
                </Image>
                <P>{id}</P>
                
            </Container>
        </a>
    )
}

export default Category

const Container = styled.div`
    cursor: pointer;
    width: 100%;
    border-radius: 0.3125rem;
    padding: 1.25rem;
    display: inline-flex;
    align-items: center;
    
    

    :hover {
        background-color: lightskyblue;
        opacity: 0.8;
        color: white;
    }
    
`;


const Icon = styled.div`

   :hover {
       fill: white;
   }
   
   /* @media (max-width:770px) {
        padding-right: 0px;
    } */
`;



const P = styled.div`
    padding-left: 0.5rem;
    padding-right: 2.4375rem;
    

    @media (max-width:770px) {
        display: none;
    }
    
`;