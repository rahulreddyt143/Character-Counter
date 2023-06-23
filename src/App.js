import {Component} from 'react'
import {v4} from 'uuid'

import './App.css'
import {
  BgContainer,
  LeftContainer,
  FormElement,
  Heading,
  Title,
  InputContainer,
  InputElement,
  AddButton,
  WordsContainer,
  WordItem,
  EmptyImage,
  Paragraph,
} from './styledComponents'

class App extends Component {
  state = {wordsList: [], inputText: ''}

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  onClickAdd = event => {
    event.preventDefault()
    const {inputText} = this.state
    const newObject = {
      id: v4(),
      string: inputText,
      length: inputText.length,
    }
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, newObject],
      inputText: '',
    }))
  }

  render() {
    const {wordsList, inputText} = this.state
    return (
      <BgContainer>
        <LeftContainer>
          <Heading>Count the characters like a Boss...</Heading>
          {wordsList.length === 0 ? (
            <EmptyImage
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <WordsContainer>
              {wordsList.map(eachWord => (
                <WordItem key={eachWord.id}>
                  <Paragraph>{`${eachWord.string} : ${eachWord.length}`}</Paragraph>
                </WordItem>
              ))}
            </WordsContainer>
          )}
        </LeftContainer>
        <FormElement onSubmit={this.onClickAdd}>
          <Title>Character Counter</Title>
          <InputContainer>
            <InputElement
              placeholder="Enter the Characters here"
              type="text"
              onChange={this.onChangeInput}
              value={inputText}
            />
            <AddButton type="submit" onClick={this.onClickAdd}>
              Add
            </AddButton>
          </InputContainer>
        </FormElement>
      </BgContainer>
    )
  }
}

export default App
