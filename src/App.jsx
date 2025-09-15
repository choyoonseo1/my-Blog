import { useState } from 'react';
import './App.css'
import Modal from './Modal';

// 함수 선언 (HTML덩어리 div, 하나의 component)
function App() {

  // 데이터 바인딩(연결)
  let post = '강남제육맛집';
  // 중요, hook (변수 변경)
  // const[a, b] = [2, 3];
  // title이라는 변수에 '남자코트추천'이라는 변수 선언
  const [title, setTitle] = useState([
    '남자코트추천',
    '강남우동맛집',
    '자바스터디'
  ]);

  const [createDate, setCreateDate] = useState([
    '2025-05-01',
    '2025-06-01',
    '2025-07-01'
  ]);

  // 좋아요 누른 숫자를 보관할 state
  // setLike는 증감할 때 사용한다.
  // 값이 번하면 무조건 useState[초기값]
  const [like, setLike] = useState([0, 0, 0]);

  // 좋아요 처리 함수
  function addLikes() {
    setLike(like + 1)
  }

  function changeTitle() {
    const newTitle = [...title];
    newTitle[0] = '여자코트추천';
    setTitle(newTitle);
  }

  // 모달 페이지가 보이게/안보이게 작업하기 위한 state
  const [modal, setModal] = useState(false);


  // HTML 코드
  return (
    // 모든 component는 하나로 묶어줘야한다. <> = div태그의 역할
    // css를 가리키는 classname
    <div className='app'>
      <div className='black-bg'>
        React + Vite로 만드는 블로그
      </div>
      {/* <h4 style={{ color: 'red', fontSize: '20px' }}>{post}</h4> */}

      {/* title 정렬하기 */}
      <button onClick={() => {
        const sortedTitle = [...title].sort()
        setTitle(sortedTitle);

      }}>글 정렬 하기</button>

      <div className='list'>
        <h4 onClick={() => {
          setModal(!modal)
        }}>{title[0]}
          <span onClick={() => {
            const newLikes = [...like]
            newLikes[0]++
            setLike(newLikes)
          }}>👍
          </span>{like[0]}

          {/* 변경 단추 클릭하면 '남자코트추천 -> 여자코트추천' */}
          <button onClick={changeTitle}>변경</button>
        </h4>
        <p>작성일 : {createDate[0]}</p>
      </div>
      <div className='list'>
        <h4>{title[1]}<span onClick={() => {
          const newLikes = [...like]
          newLikes[1]++
          setLike(newLikes)
        }}>👍</span>{like[1]}</h4>
        <p>작성일 : {createDate[1]}</p>
      </div>
      <div className='list'>
        <h4>{title[2]}<span onClick={() => {
          const newLikes = [...like]
          newLikes[2]++
          setLike(newLikes)
        }}>👍</span>{like[2]}</h4>
        <p>작성일 : {createDate[2]}</p>
      </div>
      {/* 상세페이지 나타날 곳 */}
      {modal ? <Modal /> : null}
    </div>

  )
}


export default App
