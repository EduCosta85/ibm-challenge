import styled from 'styled-components'
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

export const LinearProgressStyled = styled(LinearProgress)`
color: black;
border: 1px solid black;
width: 100%;
`
export const Wrapper = styled.div`
width: 95%;
display: flex;
justify-content: flex-end;
align-items: center;
`
export const TypographyStyled = styled(Typography)`
padding: 5px;
color: ${props => props.cor};
white-space: nowrap;
overflow: hidden;
width: 95vw;
`