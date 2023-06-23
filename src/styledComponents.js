import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const LeftContainer = styled.div`
  background-color: #ffc533;
  width: 45%;
  height: 80vh;
  padding: 10px;
`

export const FormElement = styled.form`
  background-color: #0f172a;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  height: 80vh;
`

export const Heading = styled.h1`
  background-color: #ffbf1f;
  font-family: 'Roboto';
  color: #1e293b;
  font-weight: 500;
  font-size: 25px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 30px;
`

export const Title = styled.h1`
  font-family: 'Roboto';
  color: #ffc533;
  font-weight: 500;
  font-size: 25px;
  margin-top: 30px;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
`
export const InputElement = styled.input`
  margin-right: 10px;
  font-size: 15px;
  padding: 8px 10px;
  width: 300px;
  outline: none;
`

export const AddButton = styled.button`
  background-color: #ffc533;
  border: none;
  outline: none;
  font-family: 'Roboto';
  color: #272c47;
  font-size: 15px;
  padding: 9px 20px;
  border-radius: 3px;
`

export const WordsContainer = styled.ul`
  margin-top: 30px;
`

export const WordItem = styled.li`
  list-style-type: none;
  margin-bottom: 10px;
`

export const Paragraph = styled.p`
  color: #0f172a;
  font-size: 20px;
  font-weight: 500;
`

export const EmptyImage = styled.img`
  width: 100%;
  padding: 30px;
`
