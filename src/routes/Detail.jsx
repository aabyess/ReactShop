import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
    background : ${props => props.bg};
    color : ${props => props.bg == 'blue' ? 'white' : 'black'};
    padding : 10px;
`

let NewBtn = styled.button(YellowBtn)

function Detail(props) {

    let { id } = useParams(); //현재 url주소에 입력한 숫자를 가져옴 

    return (
        <div className="container">
                <YellowBtn bg="blue">버튼</YellowBtn>
                <YellowBtn bg="orange">버튼</YellowBtn>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;