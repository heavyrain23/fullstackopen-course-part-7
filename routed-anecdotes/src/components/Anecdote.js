import React from 'react'


const Anecdote = ({anecdote}) => {
    return (
        <div>
           <p>{anecdote.content}</p> 
           <p>votes:{anecdote.votes}</p>
           <p>author:{anecdote.author}</p>
           <p>For more info see: {anecdote.info}</p>
        </div>
    )
}

export default Anecdote;