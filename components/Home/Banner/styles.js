import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BannerSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  margin-bottom: 305px;
  background: ${({ theme }) => theme.background};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at center, transparent 20%, ${({ theme }) => theme.background}90%),
                linear-gradient(45deg, ${({ theme }) => theme.accent}10, transparent 70%),
                linear-gradient(-45deg, ${({ theme }) => theme.secondary}10, transparent 70%);
    pointer-events: none;
    z-index: 1;
    animation: prismatic-shift 8s ease-in-out infinite;
  }

  @keyframes prismatic-shift {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
  }

  & canvas {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    margin-bottom: 90px;
  `};
`;

export const VideoContainer = styled.div`
  height: 100%;
  width: 100%;

  & video {
    object-fit: cover;
  }
`;

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -93px;
  left: -20px;
  font-size: 420px;
  font-size: 26.25rem;
  pointer-events: none;
  line-height: 0.6714285714;
  background: ${({ theme }) => theme.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px ${({ theme }) => theme.accent}40;
  animation: holographic 3s ease-in-out infinite alternate;

  @keyframes holographic {
    0% {
      filter: hue-rotate(0deg) brightness(1);
      text-shadow: 0 0 30px ${({ theme }) => theme.accent}40;
    }
    50% {
      filter: hue-rotate(90deg) brightness(1.2);
      text-shadow: 0 0 50px ${({ theme }) => theme.secondary}60;
    }
    100% {
      filter: hue-rotate(180deg) brightness(1.1);
      text-shadow: 0 0 40px ${({ theme }) => theme.accent}50;
    }
  }

  & span {
    display: block;
    will-change: transform;
    background: ${({ theme }) => theme.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  ${({ theme }) => theme.breakpoints.small`
    left: -10px;
    bottom: -63px;
    font-size: 280px;
    font-size: 17.5rem;
    line-height: .6821428571;
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    left: -6px;
    bottom: -36px;
    max-width: calc(100% + 6px);
    font-size: 160px;
    font-size: 10rem;
    line-height: .68125;
    overflow: hidden;
  `};
`;
