import React, { Component } from 'react';
import './App.css';
import Key from './Key'
import EndOfGame from './EndOfGame'

const KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const WORD = 'PINEAPPLE'
const NB_CHANCES = 10
const LOSE_MSG = '🙈🙉🙊 YOU LOSE 🙊🙉🙈'
const WIN_MSG = '🎈🎊🎉 YOU WIN 🎉🎊🎈'

class App extends Component{
    state = {
        word: this.getArrayFromString(WORD),
        keys: this.getArrayFromString(KEYS),
        usedKeys: [],
        chances: NB_CHANCES,
        rightGuesses: 0,
    }

    getArrayFromString(str){
        const result = []
        for(var i = 0; i < str.length; i++){
            result.push(str[i])
        }
        return result
    }

    getFeedbackForKey(letter){
        const {usedKeys} = this.state
        return usedKeys.includes(letter) ? 'hidden' : 'visible'
    }

    getLetterForSecret(letter){
        const {usedKeys} = this.state
        return usedKeys.includes(letter)? letter : '_'
    }

    handleKeyClicked = index => {
        const {usedKeys, keys, word, chances, rightGuesses} = this.state
        if(chances > 0 && !usedKeys.includes(keys[index])){
            usedKeys.push(keys[index])
            if(word.includes(keys[index])){
                var occurrences = 0
                for(var i = 0; i < word.length; i++){
                    occurrences += (word[i] === keys[index])? 1 : 0
                }
                this.setState({
                    usedKeys: usedKeys,
                    rightGuesses: rightGuesses + occurrences,
                })
            }else{
                this.setState({
                    usedKeys: usedKeys,
                    chances: chances - 1,
                })
            }
        }
    }

    handleReplayClicked = () => {
        this.setState({
            word: this.getArrayFromString(WORD),
            keys: this.getArrayFromString(KEYS),
            usedKeys: [],
            chances: NB_CHANCES,
            rightGuesses: 0,
        })
    }

    render(){
        const {keys, word, chances, rightGuesses} = this.state
        return (
            <div className='board'>
                <div className='guessCount'>{chances >= 0? chances : 0} / {NB_CHANCES}</div>
                <div className='word'>
                    {word.map((letter, index) => (
                        <Key index={index} type='secret' letter={this.getLetterForSecret(letter)} feedback='visible' onClick={this.handleKeyClicked}/>
                    ))}
                </div>

                {((chances === 0 && <EndOfGame message={LOSE_MSG} onClick={this.handleReplayClicked}/>) ||
                 (rightGuesses === word.length && <EndOfGame message={WIN_MSG} onClick={this.handleReplayClicked}/>)||
                 <div className='keyboard'>{keys.map((letter, index) => (<Key index={index} type='key' letter={letter} feedback={this.getFeedbackForKey(letter)} onClick={this.handleKeyClicked}/>))}
                        
            </div>)}
            </div>
        )
    }
}

export default App;
