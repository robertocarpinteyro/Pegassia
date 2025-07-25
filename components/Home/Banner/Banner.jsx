import React from 'react';
import { motion } from 'framer-motion';
import useWindowSize from '../../../hooks/useWindowSize';
import { BannerSection, BannerTitle, VideoContainer } from './styles';

const titleAnimation = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemTitleAnimation = {
  initial: { y: '100vh' },
  animate: {
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const Banner = () => {
  const windowSize = useWindowSize();

  return (
    <BannerSection style={{ height: windowSize.height }}>
      <VideoContainer>
        <video
          src="/videos/banner.mp4"
          height="100%"
          width="100%"
          loop
          autoPlay
          muted
          playsInline
          preload="metadata"
          webkit-playsinline="true"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
        />
      </VideoContainer>
      <BannerTitle
        variants={titleAnimation}
        initial="initial"
        animate="animate"
      >
        <motion.span variants={itemTitleAnimation}>AI</motion.span>
        <motion.span variants={itemTitleAnimation}>EVOLUTION</motion.span>
      </BannerTitle>
    </BannerSection>
  );
};

export default React.memo(Banner);
