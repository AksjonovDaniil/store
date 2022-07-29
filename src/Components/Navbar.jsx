import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCart} from "@material-ui/icons"
import { Badge } from '@material-ui/core'
import {Link} from "react-router-dom"

const Container = styled.div`
    height:80px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Language = styled.span`
    font-style: 16px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border:0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border:none;
`
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Center = styled.div`
    flex:1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    font-size:38px;
    text-decoration: none;
`
const MenuItem = styled.div`
    font-size: 16px;
    cursor:pointer;
    margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <Search style={{color:"gray", fontSize:16,}}/>
                </SearchContainer>
            </Left>
            <Center>
                    <Link style={{color:"black", textDecoration: 'none'}} to="/"><Logo>ScandiWEB Store</Logo></Link>
            </Center>
            <Right>
               <MenuItem><Link style={{color:"black", textDecoration: 'none'}} to="/register">REGISTER</Link></MenuItem>
               <MenuItem><Link style={{color:"black", textDecoration: 'none'}} to="/login">SIGN IN</Link></MenuItem>
               <MenuItem>
                    <Badge badgeContent={4} color="primary">                      
                            <Link to="/cart"><Logo><ShoppingCart/></Logo></Link>             
                    </Badge>
               </MenuItem>
            </Right>           
        </Wrapper>       
    </Container>
  )
}

export default Navbar