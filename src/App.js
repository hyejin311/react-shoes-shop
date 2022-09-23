import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import Cart from './routes/Cart';
import Detail from './routes/Detail.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import {QueryClient, QueryClientProvider , useQuery} from '@tanstack/react-query';

function App() {

  let obj= {name : 'kim'};
  JSON.stringify(obj);
  localStorage.setItem('data',JSON.stringify(obj));

  let [shoes,setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/" onClick={()=>{navigate('/')}}> 해피 Shoe-day </Navbar.Brand>
          <Nav className="me-auto">
            <button className='linkBtn' onClick={()=>{navigate('/shoes')}}>상품</button>
            <button className='linkBtn' onClick={()=>{navigate('/detail')}}>상품소개</button>
            <button className='linkBtn' onClick={()=>{navigate('/event')}}>이벤트</button>
            <button className='linkBtn' onClick={()=>{navigate('/notice')}}>공지사항</button>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
      <Route path="/" element={<div className='main-bg' style={{marginTop:'100px'}}></div>} />

      <Route path='/shoes' element={
      <div className='container'>
              <div className='row'>
                {shoes.map((a,i)=>{
                  return <Prod shoes={shoes[i]} i={i} />
                })}
              </div>
              <button onClick={()=>{ 
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((결과)=>{ 
                  console.log(결과.data)
              
                  let combine=[...shoes, ...결과.data];
                  setShoes(combine);
                })
               }}
               >더보기</button>

            </div>
            }>
      </Route>
      
          <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

          <Route path="/event" element={<Event />}>
            <Route path="1" element={<p>첫 구매 시 양말 1set 무료</p>} />
            <Route path="2" element={<p>매달 10개의 리뷰를 랜덤으로 추첨해 선물을 드려요!</p>} />
          </Route>

          <Route path="/cart" element={<Cart />} />

          <Route path="*" element={<h3>없는 페이지입니다.</h3>}/>
        </Routes>
            </div>
  );
}

function Event(){
  return(
    <div>
      <h3>오늘의 이벤트</h3>
      <Outlet></Outlet>
    </div>
  )
}

function Prod(props) {
  return (
    <div className='col-md-4 shoespic'>
      <img src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"} alt="shoes" width="80%" />
      <h3 className='shoesname'>
        {props.shoes.title}</h3>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;