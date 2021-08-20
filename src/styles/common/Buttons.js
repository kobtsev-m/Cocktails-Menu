import styled, { keyframes } from 'styled-components';

const SimpleButton = styled.button`
  position: relative;
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.openSans};
  background: ${(props) => props.bg || props.theme.colors.light};
  color: ${(props) => props.fg || props.theme.colors.white};
  border: none;
  padding: 1.5rem 3rem;
  margin: 0;
  pointer-events: auto;
  cursor: pointer;
  &::before,
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const MimasButton = styled(SimpleButton)`
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 0.5rem;
  overflow: hidden;
  &::before {
    content: '';
    left: -10%;
    width: 120%;
    background: ${({ theme }) => theme.colors.black};
    transform: skew(30deg);
    transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
  }
  &:hover::before {
    transform: translate3d(100%, 0, 0);
  }
  span {
    position: relative;
    mix-blend-mode: difference;
  }
`;

const scrollAnimation = keyframes`
  0% {
    opacity: 0;
    height: 6px;
  }
  40% {
    opacity: 1;
    height: 10px;
  }
  80% {
    transform: translate(0, 20px);
    height: 10px;
    opacity: 0;
  }
  100% {
    height: 3px;
    opacity: 0;
  }
`;

const pulseAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
`;

const SrollButtonWrapper = styled.button`
  position: relative;
  width: 30px;
  height: 50px;
  background: transparent;
  border: 3px solid ${({ theme }) => theme.colors.white};
  border-radius: 50px;
  margin: 0 0 15px 15px;
  &::before {
    content: '';
    position: absolute;
    bottom: 30px;
    left: 50%;
    width: 6px;
    height: 6px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px -5px 3px 1px ${({ theme }) => theme.colors.white};
    border-radius: 100%;
    margin-left: -3px;
    animation: ${scrollAnimation} 2s infinite;
  }
`;

const ScrollButtonChevrons = styled.div`
  padding: 6px 0 0 0;
  margin-left: -3px;
  margin-top: 48px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScrollButtonChevron = styled.div`
  margin-top: -4px;
  position: relative;
  border: solid ${({ theme }) => theme.colors.white};
  border-width: 0 3px 3px 0;
  display: inline-block;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  &:nth-child(odd) {
    animation: ${pulseAnimation} 500ms ease infinite alternate;
  }
  &:nth-child(even) {
    animation: ${pulseAnimation} 500ms ease infinite alternate 250ms;
  }
`;

export const ScrollButton = () => (
  <SrollButtonWrapper>
    <ScrollButtonChevrons>
      <ScrollButtonChevron />
      <ScrollButtonChevron />
    </ScrollButtonChevrons>
  </SrollButtonWrapper>
);
