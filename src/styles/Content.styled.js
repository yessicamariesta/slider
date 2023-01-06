import styled from 'styled-components'

export const Section = styled.div`
  max-width: 1170px;
  width: 90vw;
  margin: 0 auto 5rem;
`

export const SectionCenter = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  max-width: 800px;
  width: 80vw;
  height: 450px;
  margin: 0 auto;
  margin-top: 4rem;
  text-align: center;

  & > button {
    position: absolute;
    display: grid;
    place-items: center;
    top: 200px;
    transform: translateY(-50%);
    width: 2rem;
    height: 2rem;
    border-color: transparent;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.grey5};
    font-size: 1.5rem;
    color: #fff;
    transition: ${({ theme }) => theme.transition};
    cursor: pointer;
  }

  & > button:hover {
    background-color: ${({ theme }) => theme.colors.primary5};
  }

  & > button:first-of-type {
    left: 0;
  }

  & > button:nth-of-type(2) {
    right: 0;
  }
`

export const SectionInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: ${({ theme }) => theme.transition};

  &.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }

  &.lastSlide {
    transform: translateX(-100%);
  }

  &.nextSlide {
    transform: translateX(100%);
  }

  & > img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid ${({ theme }) => theme.colors.grey8};
    box-shadow: ${({ theme }) => theme.shadow.dark};
    margin-bottom: 1rem;
  }

  & > h4 {
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.primary5};
    margin-bottom: 0.25rem;
  }

  & > p:first-of-type {
    text-transform: capitalize;
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.colors.grey3};
    font-size: 16px;
  }

  & > p:nth-of-type(2) {
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    line-height: 2;
    font-size: 16px;
    color: hsl(210, 22%, 49%);
  }

  & > p:nth-of-type(3) {
    font-size: 3rem;
    margin-top: 1rem;
    color: hsl(21, 62%, 45%);
  }
`
