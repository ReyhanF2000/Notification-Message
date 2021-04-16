import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faWindowClose, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

const Card = styled.li`
display:flex;
flex-direction:row;
border:3px solid #e9e9e9;
height:auto;
width:96%;
list-style-type: none;
margin:7px 0;
height:60px;
line-height:58px;
font-weight:bold;
border-radius:5px;
`
const LocationIcon = styled.div`
flex: 0.1 1 auto;
padding:0px 10px;
font-size:25px;
`
const Text = styled.div`
flex: 3 1 auto;
`
function CardItem({ id, text, colorIcon, iconShape, handleClose }) {
    return (
        <Card
            key={id}
        >
            <LocationIcon>
                {iconShape === 'faCheck' ?
                    <FontAwesomeIcon
                        icon={faCheck}
                        style={{ color: colorIcon }}
                    />
                    :
                    <FontAwesomeIcon
                        icon={faExclamationCircle}
                        style={{ color: colorIcon }}
                    />
                }
            </LocationIcon>
            <Text>{text}</Text>
            <LocationIcon>
                <FontAwesomeIcon
                    icon={faWindowClose}
                    style={{ color: 'red' }}
                    onClick={() => handleClose(id)}
                />
            </LocationIcon>
        </Card>
    )
}
export default CardItem