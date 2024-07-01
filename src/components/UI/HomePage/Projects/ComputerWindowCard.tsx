"use client";
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from 'next/link';

const StyledCard = styled(Card)({
  backgroundColor: '#d9e9d0',
  borderRadius: '12px',
  padding: '7px 5px',
  position: 'relative',
  overflow: 'hidden', // Ensure the image stays within the card
});

const NoPaddingCardContent = styled(CardContent)({
  padding: 0,
  '&:last-child': {
    paddingBottom: 0,
  },
});

const ImageContainer = styled('div')({
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
  overflow: 'hidden', // Hide overflow to contain the image zoom effect
});

const StyledImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
  objectFit: 'cover',
  transition: 'transform 0.3s ease-in-out', // Add transition for smooth animation
  '&:hover': {
    transform: 'scale(1.05)', // Scale image on hover
  },
});

const CirclesContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '6px',
  marginBottom: '3px',
  marginLeft: '8px',
});

const Circle = styled('div')({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: '#A5BD98',
});

const CustomLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

const ExtraInfoBox = styled(Box)({
  backgroundColor: '#d9e9d0',
  borderRadius: '12px',
  padding: '10px',
  marginTop: '5px',
});

const ComputerWindowCard = ({ imageSrc, showProjectInfo } : any) => {
  
  return (
    <StyledCard>
      <NoPaddingCardContent>
        <CirclesContainer>
          <Circle />
          <Circle />
          <Circle />
        </CirclesContainer>
        <ImageContainer>
          <StyledImage src={imageSrc} alt="Computer Window" />
        </ImageContainer>
      </NoPaddingCardContent>
      {showProjectInfo && (
        <ExtraInfoBox>
          <CustomLink href={`projects/${showProjectInfo._id}`}>
            <Box>
              <Typography variant="h6">{showProjectInfo?.title}</Typography>
              <Typography variant="body1">Case study</Typography>
            </Box>
            <OpenInNewIcon />
          </CustomLink>
        </ExtraInfoBox>
      )}
    </StyledCard>
  );
};

export default ComputerWindowCard;
