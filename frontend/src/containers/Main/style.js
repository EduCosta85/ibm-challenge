import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';

export const TypographyStyled = styled(Typography)`
padding: 5px;
color: ${props => props.cor};
white-space: nowrap;
overflow: hidden;
width: 95vw;
`

export const Box = styled.div`
border-radius: 2px;
margin-top: 5px;
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
border: 1pt solid rgba(91, 228, 186,0.1);
background: ${props => props.bg};
`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center
`