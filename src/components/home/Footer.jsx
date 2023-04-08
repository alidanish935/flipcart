import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const Container = styled(Box)`
display:flex;
justify-content:space-between;
background-color: #002B5B; 
`
const LeftBox = styled(Box)`
display:flex;
flex-direction:column;
margin:40px 0 0 60px;
& > p {
    color:white;
    font-size:13px;
}
`
const Box1 = styled(Box)`
margin: 0 0 15px 0;
`
const Footer = () => {
  return (
    <Container>
        <LeftBox>
            <Box1>ABOUT</Box1>
            <Typography>Contact Us</Typography>
            <Typography>About Us</Typography>
            <Typography>Careers</Typography>
            <Typography>Flipkart Stories</Typography>
            <Typography>Press</Typography>
            <Typography>Flipkart Wholesale</Typography>
            <Typography>Corporate Information</Typography>
        </LeftBox>
        <LeftBox>
            <Box1>HELP</Box1>
            <Typography>Payments</Typography>
            <Typography>Shipping</Typography>
            <Typography>Cancellation & Returns</Typography>
            <Typography>FAQ</Typography>
            <Typography>Report</Typography>
            <Typography>Infringement</Typography>
        </LeftBox>
        <LeftBox>
            <Box1>CONSUMER POLICY</Box1>
            <Typography>Return Policy</Typography>
            <Typography>Terms Of Use</Typography>
            <Typography>Security</Typography>
            <Typography>Privacy</Typography>
            <Typography>Sitemap</Typography>
            <Typography>Grievance Redressal</Typography>
            <Typography>EPR Compliance</Typography>
        </LeftBox>
        <LeftBox>
            <Box1>SOCIAL</Box1>
            <Typography>Facebook</Typography>
            <Typography>Twitter</Typography>
            <Typography>YouTube</Typography>
           
        </LeftBox>
        {/* <LeftBox>
            <Typography>MAIL US</Typography>
            <Typography>Flipkart Internet Private Limited,

Buildings Alyssa, Begonia &

Clove Embassy Tech Village,

Outer Ring Road, Devarabeesanahalli Village,

Bengaluru, 560103,

Karnataka, India</Typography>
            <Typography>About Us</Typography>
            <Typography>Careers</Typography>
            <Typography>Flipkart Stories</Typography>
            <Typography>Press</Typography>
            <Typography>Flipkart Wholesale</Typography>
            <Typography>Corporate Information</Typography>
        </LeftBox> */}
        
        <Box></Box>
    </Container>
  )
}

export default Footer