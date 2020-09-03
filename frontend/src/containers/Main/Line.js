import React from 'react';
import {TypographyStyled, Box} from './style'

export default function Line(props) {

    return (
        <>
            <Box key={props.index} bg={props.status > 1 ? 	'rgba(0,128,0,0.2)' : 'rgba(0,0,255,.2)'}>
                {props.qtd ? 
                <TypographyStyled>{props.qtd} links found - {props.url}</TypographyStyled>
                :
                <TypographyStyled>in line - {props.url}</TypographyStyled>
                }
            </Box>
        </>
    );
}

