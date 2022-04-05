const TodoList = ({todos, handleTodo}) => {

     return (

          <ul>
               {todos.map((todos) => {

                    return (    
                    <div className="Display">
                         <li>{todos}</li>
                         <button onClick={() => handleTodo(todos)}> Completar Tarefa</button>
                    </div>
                    )

               })}
          </ul>

     )

}

export default TodoList