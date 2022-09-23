import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {changeName, changeAge} from '../store'

function Cart(){
 let state = useSelector((state) => state)
 let dispatch = useDispatch()

return(
<div>
<h6>{state.user.name} {state.user.age}의 장바구니</h6>
<button onClick={()=>{
    dispatch(changeAge())
}}>뾰롱</button>

<Table>
  <thead>
    <tr>
      <th>상품번호</th>
      <th>상품명</th>
      <th>수량</th>
      <th>개수 선택</th>
    </tr>
  </thead>

  <tbody>
    {
        state.baguni.map((a,i)=>{
            return(
                <tr>
      <td>{state.baguni[i].id}</td>
      <td>{state.baguni[i].name}</td>
      <td>{state.baguni[i].count}</td>
      <td>
        <button onClick={()=>{
           dispatch( changeName())
        }}>+</button>
      </td>
    </tr>
            )
        })
    }
  </tbody>
</Table> 
    </div>
    )
}

export default Cart;