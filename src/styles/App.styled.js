import styled from 'styled-components'

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;

  & > span {
    font-size: 32px;
    font-weight: 700;
    color: hsl(21, 62%, 45%);
  }

  & > h1 {
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 2px;
    color: hsl(209, 34%, 30%);
  }
`
