// import { useState } from 'react';
// import './App.css'
// import Modal from './Modal';

// function App() {

//   // 데이터 바인딩
//   let post = '강남제육맛집';

//   const [title, setTitle] = useState([
//     '남자코트추천',
//     '강남우동맛집',
//     '자바스터디'
//   ]);

//   const [createDate, setCreateDate] = useState([
//     '2025-5-1',
//     '2025-6-1',
//     '2025-7-1',
//   ]);

//   // 디테일 배열 선언
//   const [details, setDetails] = useState([
//     "심플한 디자인의 코트로 가을에 잘 어울림",
// "강남 우동의 찐 맛집! 먹어보진 않았음",
// "자바 스터디는 말 만하고 못함"
//   ]);

//   // 좋아요 누름 숫자를 보관할 스테이트
//   const [like, setLike] = useState([0, 0, 0]);

//   // 좋아요 처리 함수
//   // function addLikes(num){
//   //   setLike(like[num]+1)
//   // }

//   function changeTitle() {
//     const newTitle = [...title];
//     newTitle[0] = '여자코드추천';
//     setTitle(newTitle);
//   }

//   // 모달페이지가 보이게/안보이게 작업하기위한 스테이트
//   const [modal, setModal] = useState(false);

//   // 직전 선택한 인덱스를 저장할 스테이트
//   const [currentIndex, setCurrentIndex] = useState(null);

//   // 제목 클릭 시 모달 보이기
//   function handleTitle(index) {
//     // 조건 : 같은 제목을 클릭하면 나타나고 사라짐
//     // 다른 제목을 클릭하면 그냥 보여야 하고..
//     if (!modal) {
//       //1. 현재 모달이 닫혀있으면 연다.
//       setModal(true);
//       setCurrentIndex(index);
//     } else if (currentIndex === index) {
//       // 2. 같은 타이틀이 선택된 경우
//       setModal(false);
//     } else {
//       setCurrentIndex(index);
//     }
//   }



//   return (
//     <div className='App'>
//       <div className='black-bg'>
//         React + Vite로 만드는 블로그
//       </div>
//       {/* <h4 style={{color: 'red', fontSize: '20px'}}>{post}</h4> */}

//       {/* 타이틀 정렬하기 */}
//       <button onClick={() => {
//         const sortedTitle = [...title].sort()
//         setTitle(sortedTitle);
//       }}>글 정렬하기</button>

//       <div className='list'>
//         <div>
//           <h4 onClick={() => {
//             setModal(!modal)
//           }}>{title[0]}
//             <span onClick={() => {
//               const newLikes = [...like]
//               newLikes[0]++
//               setLike(newLikes)
//             }}>👍
//             </span>{like[0]}

//             {/* 변경단추 클릭하면 '남자코트추천 -> 여자코트추천 */}
//             <button onClick={changeTitle}>변경</button>
//           </h4>
//           <p>작성일 : {createDate[0]}</p>
//         </div>
//         <div>
//           <h4>{title[1]}<span onClick={() => {
//             const newLikes = [...like]
//             newLikes[1]++
//             setLike(newLikes)
//           }}>👍</span>{like[1]}</h4>
//           <p>작성일 : {createDate[1]}</p>
//         </div>
//         <div>
//           <h4>{title[2]}<span onClick={() => {
//             const newLikes = [...like]
//             newLikes[2]++
//             setLike(newLikes)
//           }}>👍</span>{like[2]}</h4>
//           <p>작성일 : {createDate[2]}</p>
//         </div>
//         {title.map((item, index) => {
//           return (
//             <div key={index}>
//               <h4 onClick={() => handleTitle(index)}>
//                 {title[index]}
//                 <span onClick={() => {
//                   const newLikes = [...like]
//                   newLikes[index]++
//                   setLike(newLikes)
//                 }}>👍
//                 </span>{like[index]}
//               </h4>
//               <p>작성일 : {createDate[index]}</p>
//             </div>
//           )
//         })}
//       </div>

//       {/* 상세페이지 나타날 곳 */}
//       {modal ? <Modal
//         color="lightblue"
//         title={title}
//         currentIndex={currentIndex}
//         createDate={createDate}
//         details={details}
//       /> : null}
//     </div>
//   )
// }

// export default App

import { useState } from 'react';
import './App.css'
import Modal from './Modal';

function App() {

  // 데이터 바인딩
  let post = '강남제육맛집';

  const [title, setTitle] = useState([
    '남자코트추천',
    '강남우동맛집',
    '자바스터디'
  ]);

  const [createDate, setCreateDate] = useState([
    '2025-5-1',
    '2025-6-1',
    '2025-7-1',
  ]);

  // 디테일 배열 선언
  const [details, setDetails] = useState([
    "심플한 디자인의 코트로 가을에 잘 어울림",
    "강남 우동의 찐 맛집! 먹어보진 않았음",
    "자바 스터디는 말 만하고 못함"
  ]);

  // 좋아요 누름 숫자를 보관할 스테이트
  const [like, setLike] = useState([0, 0, 0]);

  // 좋아요 처리 함수
  function addLikes(num){
    const newLikes = [...like];
    newLikes[num] += 1;
    setLike(newLikes);
  }

  function changeTitle() {
    const newTitle = [...title];
    newTitle[0] = '여자코트추천';
    setTitle(newTitle);
  }

  // 모달페이지가 보이게/안보이게 작업하기위한 스테이트
  const [modal, setModal] = useState(false);

  // 직전 선택한 인덱스를 저장할 스테이트
  const [currentIndex, setCurrentIndex] = useState(null);

  // 제목 클릭 시 모달 보이기
  function handleTitle(index) {
    // 조건 : 같은 제목을 클릭하면 나타나고 사라짐
    // 다른 제목을 클릭하면 그냥 보여야 하고..
    if (!modal) {
      //1. 현재 모달이 닫혀있으면 연다.
      setModal(true);
      setCurrentIndex(index);
    } else if (currentIndex === index) {
      // 2. 같은 타이틀이 선택된 경우
      setModal(false);
    } else {
      setCurrentIndex(index);
    }
  }

  return (
    <div className='App'>
      <div className='black-bg'>
        React + Vite로 만드는 블로그
      </div>
      {/* <h4 style={{color: 'red', fontSize: '20px'}}>{post}</h4> */}

      {/* 타이틀 정렬하기 (세 배열 + details + like 동기 정렬) */}
      <button
        onClick={() => {
          const indices = title.map((_, i) => i).sort((a, b) =>
            title[a].localeCompare(title[b], 'ko')
          );
          const sortedTitle   = indices.map(i => title[i]);
          const sortedDate    = indices.map(i => createDate[i]);
          const sortedDetails = indices.map(i => details[i]);
          const sortedLike    = indices.map(i => like[i]);

          setTitle(sortedTitle);
          setCreateDate(sortedDate);
          setDetails(sortedDetails);
          setLike(sortedLike);

          if (currentIndex !== null) {
            const newIdx = indices.indexOf(currentIndex);
            setCurrentIndex(newIdx);
          }
        }}
      >
        글 정렬하기
      </button>

      <div className='list'>
        {title.map((item, index) => {
          return (
            <div key={index}>
              <h4 onClick={() => handleTitle(index)}>
                {title[index]}
                <span
                  onClick={(e) => {
                    e.stopPropagation(); // 좋아요 클릭 시 모달 토글 방지
                    addLikes(index);
                  }}
                >
                  👍
                </span>
                {like[index]}
                {/* 변경단추 클릭하면 '남자코트추천 -> 여자코트추천' */}
                {index === 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // 버튼 클릭 시 모달 토글 방지
                      changeTitle();
                    }}
                  >
                    변경
                  </button>
                )}
              </h4>
              <p>작성일 : {createDate[index]}</p>
            </div>
          )
        })}
      </div>

      {/* 상세페이지 나타날 곳 */}
      {modal ? (
        <Modal
          color="lightblue"
          title={title}
          currentIndex={currentIndex}
          createDate={createDate}
          details={details}
        />
      ) : null}
    </div>
  )
}

export default App
