import { useState } from "react";
import "./AddTask.scss"

const AddTask = () => {
      const [list,setList] = useState([])
      const [input, setInput]= useState("")
      const onClick = () => {
            setList((prev) => [
                  ...prev,
                  {
                        task: input,
                        complete: false,
                      },
                  ])
            setInput("")
      }
     
      
      

return <div className="addTask">
         <form className="addTask__form">
         <label className="addTask__label"> 
         Enter your tasks here
         </label>
         <input type="text" className="addTask__input" onChange={(e)=> setInput(e.target.value)}/> 
         <button className="addTask__button" type="button" onClick={() => {onClick()}}>
            Add
         </button>     
         </form>
      

         <ul>
            {list.map((task) => {
                  return(<>
                  <p> {task.task} </p>
                  </>)
            })}
         </ul>

         
      </div>

}
export default AddTask;