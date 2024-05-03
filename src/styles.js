import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const Content = styled.div`
    background-color: #2d2d2d;
    width: 50%;
    min-height: 350px;
    
    border-radius: 10px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

`

export const Column = styled.div`
    display: flex;
    flex-direction: Column;
    justify-content: space-between;
    align-items: center;

`