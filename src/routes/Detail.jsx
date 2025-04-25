import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { addItem } from "../store";
import { useDispatch } from "react-redux";

let YellowBtn = styled.button`
    background : ${props => props.bg};
    color : ${props => props.bg == 'blue' ? 'white' : 'black'};
    padding : 10px;
`
let NewBtn = styled.button(YellowBtn)

function Detail(props) {
    let [count, setCount] = useState(0)
    let { id } = useParams(); //현재 url주소에 입력한 숫자를 가져옴 
    let [alert, setAlert] = useState(true)
    let [num, setNum] = useState('')
    let [탭, 탭변경] = useState(0)
    let [fade2, setFade2] = useState('')
    let dispatch = useDispatch()

    useEffect(() => {
        setFade2('end')
        return () => {
            setFade2('')
        }   
    }, [])  


    useEffect(() => {
        if (isNaN(num) == true) {
            alert('그러지마세요')
        }
    }, [num])

    useEffect(() => {
        let a = setTimeout(() => {
            setAlert(false)
        }, 2000)
        return () => {

            clearTimeout(a)
        }
    }, [count])
    return (
        <div className={`container start ${fade2}`}>
            {
                alert == true
                    ? <div className="alert alert-warning">
                        2초이내 구매시 할인
                    </div>
                    : null
            }
            {/* 재랜더링 카운트가 하나씩 증가 */}
            {count}
            <button onClick={() => { setCount(count++) }}>버튼</button>
            <YellowBtn bg="blue">버튼</YellowBtn>
            <YellowBtn bg="orange">버튼</YellowBtn>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <input onChange={(e) => { setNum(e.target.value) }} />
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}원</p>
                    <button className="btn btn-danger" onClick={()=>{
                            dispatch(addItem({id : 1, name : 'Red Knit', count : 1}))
                        }}
                    >주문하기</button>
                </div>
            </div>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home" onClick={() => {
                        탭변경(0)
                    }}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={() => {
                        탭변경(1)
                    }}
                    >버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={() => {
                        탭변경(2)
                    }}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            {/* state에 따라서 UI가 어떻게 보일지 작성 */}
            <TabContent 탭={탭}></TabContent>

        </div>
    )
}

function TabContent({ 탭 }) {

    let [fade, setFade] = useState('')

    useEffect(() => {
        let a = setTimeout(()=>{  setFade('end')  }, 100)
        
        return ()=>{
            clearTimeout(a)
            setFade('')
        }
    }, [탭])
    // useEffect(() => { // 탭이 바뀔때마다 실행됨


    return (<div className={`start ${fade}`}>
        {[<div>내용1</div>, <div>내용2</div>, <div>내용1</div>][탭]}
    </div>)
}
// test
export default Detail;