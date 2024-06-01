// Style your elements here
import styled from 'styled-components'

export const UnLockContainer = styled.div`
  background-image: linear-gradient(to bottom, #161617, #0b0c1e, #3c2940);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ImageAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  width: 70px;
`
export const Text = styled.p`
  font-size: 22px;
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 400;
  margin-top: 40px;
`
export const Button = styled.button`
  background-color: #06b6d4;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  margin-top: 68px;
  height: 36px;
  width: 79px;
  cursor: pointer;
`
