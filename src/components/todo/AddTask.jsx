import "./AddTask.scss"

const AddTask = () => {

return <div className="addTask">
         <form className="addTask__form">
         <label className="addTask__label">Enter your tasks here</label>
         <input type="text"  className="addTask__input"/> 
         <button className="addTask__button">Add</button>     
         </form>
      </div>

}
export default AddTask;