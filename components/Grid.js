import styled from "styled-components"
import Card from "./Card";

const cards = [
    {
      name: "Lasagna",
      image: "/img/Mains/lasagna.jpg",
    },
    {
      name: "Mac & Cheese",
      image: "/img/Mains/mac_cheese.jpg",
    },
    {
      name:"Macaroni",
      image: "/img/Mains/macaroni.jpg",
    },
    {
      name: "Noodle",
      image: "/img/Mains/noodle.jpg",
    },
    {
      name: "Pizza",
      image: "/img/Mains/pizza.jpg",
    },
    {
      name: "Rice Dish",
      image: "/img/Mains/rice_dish.jpg",
    },
    {
      name: "Sushi",
      image: "/img/Mains/sushi.jpg",
    },
  ];

  





function Grid() {
    return (
        <Container>
        <Cards>
            {cards.map((card) => (
              <Card
                key={card.image}
                image={card.image}
                name={card.name}
                />
            ))}
        </Cards>
      </Container>
    )
}

export default Grid


const Cards = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    row-gap: 3rem;
    padding: 1.25rem;
    background-color: whitesmoke;
    min-height: 100vh;


    @media (max-width: 10545px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }
    @media (max-width: 770px) {
      grid-template-columns: 1fr;
    } 


`;


const Container = styled.div`
    margin-top: 3.75rem;
    margin-left: 13rem;
    padding-right: 39rem; //i really dont like this
    width: 100%;
    @media (max-width:770px) {
        margin-left: 3.75rem;
    }

    @media (max-width:1054px) {
        padding-right: 0;
    }
  /* margin-left: 150px; */
  /* display: flex */
`;