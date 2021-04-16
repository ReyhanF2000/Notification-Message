import React from 'react'
import styled from 'styled-components'
import CardItem from './CardItem'

const Wrapper = styled.ul`
display:flex;
flex-direction:column;
height:auto;
width:96%;
background-color:white;
border-radius:5px;
justify-content:center;
padding:10px 10px;
align-items: center;
`
function CardList({ Data, onClick }) {
    const cardResult = Data.map(card => {
        return <CardItem
            id={card.id}
            text={card.text}
            iconShape={card.icon}
            colorIcon={card.colorCard}
            handleClose={onClick}
        />
    })
    return (
        <Wrapper>
            {cardResult}
        </Wrapper>
    )
}
export default CardList