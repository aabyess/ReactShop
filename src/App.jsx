import { useState } from 'react';
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.jsx';
import Event from './routes/Event.jsx';
import axios from 'axios';
import Cart from './routes/Cart.jsx';


function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div className='App'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate(-1) }} href="#home">Home</Nav.Link>
              <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Link to="/">홈</Link><br />
      <Link to="/detail">상세페이지</Link> */}
      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'></div>
            <div className="container">
              <div className="row">
                {
                  shoes.map((a, i) => {
                    return (
                      <Card shoes={shoes[i]} i={i}></Card>
                    )
                  })
                }
                {/* <Card shoes={shoes[0]} i={1}></Card>
                    <Card shoes={shoes[1]} i={2}></Card>
                    <Card shoes={shoes[2]} i={3}></Card> */}
              </div>
            </div>
            

            <button onClick={() => {
              /* ajax를 이용해서 서버에서 데이터를 가져옴 */
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((결과) => {
                  /* 버튼을 클릭하면 shoes 데이터를 추가함 */
                  console.log(결과.data)
                  let copy = [...shoes, ...결과.data];
                  setShoes(copy);
                  /* Array 같은 데이터는 복사본을 만들어줘라 */
                  /* 괄호를 벗겨주는 기능 '...' */
                })

              axios.post('/qwer', { name: 'kim' })
                /* 서버로 데이터전송하는 POST요청 */


                .catch(() => {
                  console.log('실패함 ㅅㄱ') /* 실패 했을때 예외처리*/
                })
            }}>버튼</button>
          </>
        } />

        {/* <Route path='/detail' element={<Detail shoes={shoes} />} /> */}
        <Route path='/detail/:id' element={
          <Detail shoes={shoes} />}
        />
        <Route path="/cart" element={
          <Cart />}
        />

        {/* 상세페이지 */}
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<div>위치정보임</div>} />
        </Route>
        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
        <Route path='*' element={<div>없는페이지요</div>} />
      </Routes>

    </div>

  )
}
function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}



function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}



export default App
