import styled from 'styled-components'


export const ToolTip = styled.button`

font-family: 'Jost', sans-serif;
position: relative;
z-index: 1;

&:hover::before {
    content: '${(props) => props.content}';
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    color: black;
    padding: 5px;
    border-radius: 5px;
    white-space: nowrap;
}
`


