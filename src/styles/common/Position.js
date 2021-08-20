import styled from 'styled-components';

export const AbsolutePosition = styled.div`
  position: absolute;
  top: ${(props) => props.top || 'none'};
  bottom: ${(props) => props.bottom || 'none'};
  left: ${(props) => props.left || 'none'};
  right: ${(props) => props.right || 'none'};
  transform: ${(props) =>
    props.left === '50%' ? 'translateX(-50%)' : 'none'};
`;
