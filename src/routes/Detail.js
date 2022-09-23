import { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import { useParams } from "react-router-dom";

function Detail(props){
  let {id}= useParams();
  let [탭, 탭변경] = useState(2)

  // useEffect(()=>{
  //  let a= setTimeout(() => {
  //     setAlert(false);
  //   }, 2000)

  //   return()=>{
  //     clearTimeout(a);
  //   }
  //   },[count])

return(
<div className="container">
<div className="row">
  <div className="col-md-6">
    <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="메인사진" width="100%" />
  </div>

  <div className="col-md-6">
    <h4 className="pt-5">
      {props.shoes[id].title}</h4>
    <p>{props.shoes[id].content}</p>
    <p>{props.shoes[id].price}점</p>
    <button className="btn btn-danger">구매하기</button>
  </div>
</div>

<Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link onClick={()=>{탭변경(1)}} eventKey="link1">버튼1</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link onClick={()=>{탭변경(2)}} eventKey="link2">버튼2</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link onClick={()=>{탭변경(3)}} eventKey="link3">버튼3</Nav.Link>
      </Nav.Item>

    </Nav>
    <SeeTab 탭={탭} />
</div>
)
}

function SeeTab({탭}){

  let [fade,setFade]= useState('')
  
  useEffect(()=>{
    setFade('end');
  },[탭])
  
  return <div className={'start' + fade}>
  {[<div>내용0</div>, <div>내용1</div>,<div>내용2</div>][탭]}
  </div>
}

export default Detail;