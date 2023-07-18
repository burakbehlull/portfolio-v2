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

interface colorTypes {
    purple?: any;
    lg?:any;
    bold?:any;
}

export const Button = styled.button<colorTypes>`
    //props: purple, lg , bold
    background-color: ${(props) => props.purple ? "#6c55e0" : "#333"};
    color: #f1ecec;
    border-radius: 6px;
    cursor: pointer;
    padding: ${(props) => props.lg ? ".5rem 2rem;" : ".3rem 1rem"};
    font-size: ${(props) => props.lg ? "1.1rem" : ".9rem"};
    font-weight: ${(props) => props.bold ? "500" : "400"};

    &:hover{
        box-shadow: 0 5px 35px 0px rgb(0 0 0 / 13%);
        background-color: ${(props) => props.purple ? "#715bdf" : "#292828"};
    }
`


