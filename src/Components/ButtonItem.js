import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
width:23%;
margin:0px 12px;
height:70%;
border:none;
border-radius:3px;
color:white;
font-weight:bold;
`
export default function ButtonItem({ text, id, disable, color, onClickButton }) {
    return (
        <Button
            key={id}
            style={{ background: color }}
            onClick={() => onClickButton(id)}
            disabled={disable}
        >
            {text}
        </Button>
    )
}