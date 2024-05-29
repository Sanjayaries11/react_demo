
import './App.css';
import Header from './Header.1';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';



//inserting header here//
function App(){
  const [items,setItems] = useState(
    [
      {
        id: 1,
        checked: true,
        item: "practice coding"
      },
      {
        id: 2,
        checked: false,
        item: "play cricket"
      },
      {
        id: 3,
        checked: false,
        item: "Read about AI"
      }
    ]);
    
    const handleCheck = (id) =>{
        const listItems = items.map((item) => 
        item.id===id ? {...item, checked: !item.checked} : item)
        setItems(listItems)
        localStorage.setItem("todo_list" ,JSON.stringify(listItems))  
    }

    const handleDelete =(id) =>{
      const listItems = items.filter((item) =>
      item.id!==id)
      setItems(listItems)
      localStorage.setItem("todo_list", JSON.stringify(listItems))
    }
  return(
    <div className="App">
      <Header title="My First APP" />  
      <Content
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      /> 
      <Footer 
       length = {items.length}
      />           
    </div>
  )
}

export default App;
