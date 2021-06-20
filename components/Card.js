import styled from "styled-components"
import Image from 'next/image'

function Card({name, image}) {
    return (
        <Container>
            <Img>
            <Image src={image} alt={name}
                layout="fill"
                objectFit="cover"
                quality={50}
                />
            </Img>
            <h1>{name}</h1>
        </Container>
    )
}

export default Card

const Container = styled.section`
    cursor: pointer;
    flex-direction: column;
    background-color: white;
    height: 300px;
    box-shadow: 0px 4px 14px -3px grey;
    border-radius: 10px;
    padding: 10px;
    
    
    > h1 {
        font-size: 1.25rem;
        margin-left: 1rem;
        margin-top: 1rem;
    }

    :hover {
        box-shadow: 0px 4px 20px -3px lightskyblue;
    }
`;

const Img = styled.div`
    align-items: center;
    display: flex;
    height: 230px;
    position: relative; //this had to be added to make the img to obey object-fit cover
    border-radius: 10px;

`;