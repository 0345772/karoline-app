import React, {Component} from 'react';
import AppHeader from '../appHeader';
import SearchPanel from '../searchPanel';
import PostStatusFilter from '../postStatusFilter';
import PostList from '../postList';
import PostAddForm from '../postAddForm';
import './app.css';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {label:"Я дуже люблю свою Кароліночку!", important: false, like: false, id: "1"},
        {label:"Кароліночка - найкраща!", important: true, like: false, id: "2"},
        {label:"Наша Каролуся - дуже розумничка!", important: false, like: false, id: "3"}      
      ] 
    }

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);

    this.maxId = 4;
  } 


  deleteItem = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)]
      return {
        data: newArr
      }
    })
  } 

  addItem(body) {   
      const newItem = { 
        label: body,
        important: false,
        id: this.maxId++
      } 
      this.setState(({data}) => {
     
        const newArr = [...data, newItem];
        return {
          data: newArr
        }
      })  
  }

  onToggleImportant(id) {
   this.setState(({data}) => {
     const index = data.findIndex(elem => elem.id === id);

     const old = data[index];
     const newItem = {...old, important: !old.important};

     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

     return {
      data: newArr
     }
   })
  }

  onToggleLiked(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);

      const old = data[index];
      const newItem = {...old, like: !old.like};

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      
      return {
        data: newArr
      }
    })
  }
  
  render() {
    const {data} = this.state;
    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;
    // const visiblePosts = this.searchPost(data, term)
    return (
      <div className="app">
          <AppHeader
          liked={liked}
          allPosts={allPosts}/>
        <div className="search-panel d-flex">
          <SearchPanel
            onUpdateserch={this.onUpdateSerch}/>
          <PostStatusFilter/>
        </div>
          <PostList 
          posts={this.state.data}
          onDelete={ this.deleteItem }
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}/>
          <PostAddForm
            onAdd={this.addItem}/>
      </div>
      )
  }  
}
