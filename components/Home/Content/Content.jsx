import React from 'react';
import AnimateOnScreen from '../../AnimateOnScreen';
import { ContentSection, TextWrapper, Text } from './styles';

const Content = () => {
  return (
    <AnimateOnScreen>
      <ContentSection>
        <TextWrapper>
          <Text>
            Innovation isn't just about technology—
            <br />
            it's about transcending limitations. We harness the infinite potential of AI 
            to create experiences that blur the lines between reality and imagination. 
            Every pixel, every algorithm, crafted with precision.
          </Text>
        </TextWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default Content;
