import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName,increase } from '../store/userSlice';

function Cart() {

    let state = useSelector((state) => state) //Redux store 가져와줌 
    console.log(state.cart[0].name)
    let dispatch =  useDispatch()

    return (
        <div>
            <h6>{state.user.name} {state.user.age}의 장바구니</h6>
            <button onClick={()=>{
                dispatch(increase(100))
            }} >버튼</button>


            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i) =>
                            <tr key={i}>
                                <th>{state.cart[i].id}</th>
                                <th>{state.cart[i].name}</th>
                                <th>{state.cart[i].count}</th>
                                <th>변경하기</th>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(changeName())
                                    }} >+</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;