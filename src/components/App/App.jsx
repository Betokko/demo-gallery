import { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Card from '../Card/Card'
import './App.css';
import api from '../../api/api'

function App() {
  const [searchQuery, setSearchQuery] = useState('Amsterdam')
  const [cards, setCards] = useState([])

  const handleFormSubmit = (evt) => {
    evt.preventDefault()
    handleRequest()
  }

  const handleInputChange = (value) => {
    setSearchQuery(value)
  }

  const handleRequest = () => {
    api.search({
      query: searchQuery
    })
      .then(res => {
        const cards = res.results.map(item => {
          return {
            id: item.id,
            src: item.urls.regular,
            title: item.description,
            author: item.user.name,
          }
        })
        setCards(cards)
      })
  }

  console.log(cards);

  return (
    <div className="app">
      <div className="app__content">
        <h1>{searchQuery}</h1>
        <form className="app__search" onSubmit={handleFormSubmit}>
          <Input 
            placeholder={'search free high-resolution photo'} 
            handleChange={handleInputChange}
          />
          <Button title={'Search'}/>
        </form>
        <div className='app__cards'>
          {cards.map((item) => (
            <Card 
              key={item.id}
              {...item}
            />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
