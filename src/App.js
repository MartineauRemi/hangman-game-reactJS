import React, { Component } from 'react';
import './App.css';
import Key from './Key'

const KEYS = 'AZERTYUIOPQSDFGHJKLMWXCVBN'
class App extends Component{
    state = {
        keys: this.generateKeys(),
        usedKeys: [],
    }

    generateKeys(){
        const result = []
        for(var i = 0; i < KEYS.length; i++){
            result.push(KEYS[i])
        }
        return result
    }

    getFeedbackForKey(letter){
        const {usedKeys} = this.state
        return usedKeys.includes(letter) ? 'hidden' : 'visible'
    }

    handleKeyClicked = index => {
        const {usedKeys, keys} = this.state
        usedKeys.push(keys[index])
        this.setState({
            usedKeys: usedKeys
        })
    }

    render(){
        const {keys} = this.state
        return (
            <div className='keyboard'>
               {keys.map((letter, index) => (
                   <Key className='key' index={index} letter={letter} feedback={this.getFeedbackForKey(letter)} onClick={this.handleKeyClicked}/>
                ))}
            </div>
        )
    }
}

export default App;
