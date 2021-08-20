import React from 'react';
import { MimasButton, ScrollButton } from 'styles/common/Buttons';
import { Flex } from 'styles/common/Flex';
import { AbsolutePosition } from 'styles/common/Position';
import {
  Background,
  TitleBlock,
  TitleBlockHeading,
  TitleBlockText
} from './Header.elements';

export default function Header() {
  return (
    <Background>
      <TitleBlock>
        <TitleBlockHeading>Cocktails menu</TitleBlockHeading>
        <TitleBlockText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quia
          mollitia rerum nesciunt aut? Ratione at ad quidem? Delectus explicabo
          similique voluptates saepe eos porro at, quo quidem? Vel, maiores.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam eos
          perferendis, numquam ratione autem sapiente laboriosam ab nostrum?
          Tempora pariatur dolorum culpa voluptatem delectus reiciendis eum
          amet animi ab error.
        </TitleBlockText>
        <Flex justify='flex-end'>
          <MimasButton>
            <span>Go to menu</span>
          </MimasButton>
        </Flex>
      </TitleBlock>
      <AbsolutePosition bottom='20px' left='50%'>
        <ScrollButton />
      </AbsolutePosition>
    </Background>
  );
}
