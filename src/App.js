import React, { Component } from 'react';
import './App.css';
import Key from './Key'

const KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const WORD = 'PINEAPPLE'
class App extends Component{
    state = {
        word: this.getArrayFromString(WORD),
        keys: this.getArrayFromString(KEYS),
        usedKeys: [],
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
        const {usedKeys, keys} = this.state
        usedKeys.push(keys[index])
        this.setState({
            usedKeys: usedKeys
        })
    }

    render(){
        const {keys, word} = this.state
        return (
            <div className='board'>
                <div className='word'>
                    {word.map((letter, index) => (
                        <Key index={index} type='secret' letter={this.getLetterForSecret(letter)} feedback='visible' onClick={this.handleKeyClicked}/>
                    ))}
                </div>
                <div className='keyboard'>
                    {keys.map((letter, index) => (
                        <Key index={index} type='key' letter={letter} feedback={this.getFeedbackForKey(letter)} onClick={this.handleKeyClicked}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default App;
