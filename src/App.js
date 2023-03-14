

import Header from './Header';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';
import { useEffect,useRef } from 'react';

function App() {
  

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('To-doList')) || []);
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  // for loading items from default state
  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     checked: true,
  //     item: "item1"
  //   },
  //   {
  //     id: 2,
  //     checked: false,
  //     item: "item2"
  //   },
  //   {
  //     id: 3,
  //     checked: true,
  //     item: "item3"
  //   }
  // ]);



  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('To-doList', JSON.stringify(newItems));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length -1].id + 1 : 1;
    const myNewItem = { id, checked: false,item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }
  
  const handleCheck = (id) =>{
    const listItems = items.map((item) => item.id === id ? { ...item,
       checked: !item.checked } : item);
       setAndSaveItems(listItems);
  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!newItem) return;
    // console.log(newItem);
    //addItem
    addItem(newItem);
    setNewItem('');
    // console.log(newItem);

  }
  

  return (
    <div className="App">
      
      <Header title="To-Do List" />
      
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
       items={items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
  
      <Footer length={items.length} />
    </div>
  );
}


export default App;
