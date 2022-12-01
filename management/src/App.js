import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';


const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '윤상복',
  'birthday': '930925',
  'gender' : '여자',
  'job' : '여대생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '여은재',
  'birthday': '450515',
  'gender' : '남자',
  'job' : '남대생'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '윤재규',
  'birthday': '900101',
  'gender' : '중성',
  'job' : '중학생'
}
]
class App extends Component {
  render() {
    return (
      <div>
        {
        customers.map(c => {
          return (
            <Customer
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        }   
      )
    }
      </div>
    )
  }
}

export default App;
