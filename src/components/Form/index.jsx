import { useState } from "react"

const Form = ({addTodo}) => {

     const [userInput, setUserInput] = useState('')

     return (

          <div>
               <input type="text" placeholder="Insira sua Tarefa" value={userInput} onChange={(event) => setUserInput(event.target.value)}/>
               <button onClick={() => addTodo(userInput)} type="button" >Adicionar Tarefa</button>
          </div>

     )

}

export default Form