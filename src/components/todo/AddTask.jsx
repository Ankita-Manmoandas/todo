import { useState } from "react";
import "./AddTask.scss"

const AddTask = () => {
      const [list,setList] = useState([])
      const [input, setInput]= useState("")
      const onClick = () => {
       const id = list.length + 1;
            setList((prev) => [
                  ...prev,
                  {
                        id: id,
                        task: input,
                        complete: false,
                      },
                  ])
            setInput("")
      }
     
      console.log(list)
      const onDelete = (id) => {
            //filter- remove the item from list arr
            const removeItem = list.filter((item)=> {
                  return item.id !== id; 

            });
            setList(removeItem)

      }
      console.log(list)
      

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
                  <button> Edit</button>
                  <button type="button" onClick={() => {onDelete(task.id)}}> Delete </button>
                  </>)
            })}
         </ul>

         
      </div>

}
export default AddTask;