import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'nowrap')};
  align-items: ${(props) => props.align || 'center'};
  justify-content: ${(props) => props.justify || 'center'};
`;
