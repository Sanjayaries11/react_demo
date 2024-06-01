
import './App.css';
import Header from './Header.1';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './searchItem';





function App(){
  const [items,setItems] = useState(JSON.parse(localStorage.getItem('todo_list'))
    // [
    //   {
    //     id: 1,
    //     checked: true,
    //     item: "practice coding"
    //   },
    //   {
    //     id: 2,
    //     checked: false,
    //     item: "play cricket"
    //   },
    //   {
    //     id: 3,
    //     checked: false,
    //     item: "Read about AI"
    //   }
    // ]
  );
     
    const [newItem, setNewItem]=useState('')
    const [search,setSearch]=useState('')
    

    const addItem =(item) =>{
      const id =items.length ? items[items.length-1].id+1 : 1;
      const addNewItem = {id,checked:false,item}
      const listItem = [...items,addNewItem]
      setItems(listItem)
        localStorage.setItem("todo_list" ,JSON.stringify(listItem)) 


    }
    const handleSubmit = (e) =>{
      e.preventDefault();
      if(!newItem) return
      console.log("newItem")
      addItem(newItem)
      setNewItem('')

    }

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
       <AddItem 
       newItem={newItem}
       setNewItem={setNewItem}
       handleSubmit={handleSubmit}
       />
      <SearchItem
      search={search}
      setSearch={setSearch}
      />

      <Content
        items = {items.filter(item =>(item.item).toLowerCase().includes(search.toLowerCase()))}
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
