import { useState } from 'react'
import './App.css'
import foods from './foods.json'
import { Row, Divider, Button, Card, Col,} from 'antd';
import AddFoodForm from '../style-guide/AddFoodForm.example'
import Search from '../style-guide/Search.example'
//import { v4 as uuidv4 } from 'uuid'


function App() {
  const [foodState, setFoodState] = useState(foods)
  const [search, setSearch] = useState('')
  const [show, setShow] = useState(true)

  function handleDelete(foodName) {
    setFoodState(foodState.filter(foods => foods.name !== foodName))
  }
  return (
    <div className="App">
      <Search search={search} setSearch={setSearch}/>

{/* // show & hide button  */}
      {show ? <Button type='button' onClick={() => setShow(false)}> Add New Food </Button>
       : <AddFoodForm setFoodState={setFoodState} />}
      {!show ? <Button type='button' onClick={() => setShow(true)}>Hide Form</Button> : ''}
      
{/* // show food list  (filter & map) */}
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodState
        .filter((food) =>{
          if(food.name.toLowerCase().match(search.toLowerCase())) {
            return food
          }
        })
        .map((food) => {
          return (
          <Col key={food.name}>
          <Card
            title={food.name}
            style={{ width: 230, height: 300, margin: 10 }}
          >
            <img src={food.image} height={60} alt="food" />
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
              <b>Total Calories: {food.calories * food.servings} </b> kcal
            </p>
            <button type='button' onClick={() => handleDelete(food.name)}>
                  Remove
                </button>
          </Card>
        </Col>
        )})}
      </Row>
      {foodState.length ? <h1>Wait for it</h1> : <h2>TOO EASY!</h2>}
    </div>
  )
}

export default App
