import React, { useState } from 'react'
import styled from 'styled-components'
import ButtonList from './ButtonList'
import CardList from './CardList'

const DataButton = [
    { text: 'Error', id: '1', colorCard: 'red', colorButton: 'red', isDisabled: false, icon: 'faExclamationCircle' },
    { text: 'Warning', id: '2', colorCard: 'Orange', colorButton: 'Orange', isDisabled: false, icon: 'faExclamationCircle' },
    { text: 'Success', id: '3', colorCard: 'green', colorButton: 'green', isDisabled: false, icon: 'faCheck' },
    { text: 'Info', id: '4', colorCard: '#16A5E1', colorButton: '#16A5E1', isDisabled: false, icon: 'faExclamationCircle' },
]

const Wrapper = styled.div`
display:flex;
flex-direction:column;
width:30vw;
height:70vh;
margin:50px auto;
background-color:#f4f4f4;
border:1px solid #f4f4f4;
padding:10px;
position:relative;
`
export default function Root() {
    const [cards, setCards] = useState([])
    const [fill, setFill] = useState(false)

    const handleClick = (id) => {
        let item = DataButton.find(item => item.id === id)
        item = {
            ...item,
            isDisabled: true,
            colorButton: '#f4f4f4'
        }
        DataButton.splice(id - 1, 1, { ...item })
        const copyCards = [...cards]
        copyCards.push({ ...item })
        setFill(true)
        setCards(copyCards)
    }

    const handleClose = (id) => {
        let item = cards.find(item => item.id === id)
        let index = cards.findIndex(item => item.id === id)
        const copyCards = [...cards]
        let fillCard = copyCards.length === 1 ? false : true
        if (!fillCard) { setFill(false) }
        copyCards.splice(index, 1)
        setCards(copyCards)
        item = {
            ...item,
            isDisabled: false,
            colorButton: item.colorCard
        }
        DataButton.splice(id - 1, 1, { ...item })
    }

    return (
        <Wrapper>
            <ButtonList
                Data={DataButton}
                onClick={handleClick}
            />
            {fill && <CardList
                Data={cards}
                onClick={handleClose}
            />
            }
        </Wrapper>
    )
}