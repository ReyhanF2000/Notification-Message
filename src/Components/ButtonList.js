import React from 'react'
import styled from 'styled-components'
import ButtonItem from './ButtonItem'

const Wrapper = styled.div`
display:flex;
height:50px;
position:absolute;
bottom:30px;
width:96%;
background-color:white;
border-radius:5px;
justify-content:center;
padding:10px 0px;
align-items: center;
`
export default function ButtonList({ Data, onClick }) {
    const Items = Data.map(item => {
        return <ButtonItem
            text={item.text}
            id={item.id}
            color={item.colorButton}
            disable={item.isDisabled}
            onClickButton={onClick}
        />
    })
    return (
        <Wrapper>
            {Items}
        </Wrapper>
    )
}