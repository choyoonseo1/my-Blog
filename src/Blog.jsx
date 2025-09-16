// import { useState } from "react";

// function Blog(props){
//   // 타이틀 저장 용 스테이트 선언
//   const [newTitle, setNewTitle] = useState('')
//   // 내용 저장 용 스테이트 선언
//   const [newContent, setNewContent] = useState('')

//   // 제목 클릭 시 모달 보이기
//   function handleTitle(index){
//     // 조건 : 같은 제목을 클릭하면 나타나고 사라짐
//     // 다른 제목을 클릭하면 그냥 보여야 하고..
//     if(! props.modal) {
//       //1. 현재 모달이 닫혀있으면 연다.
//       props.setModal(true);
//       props.setCurrentIndex(index);
//     } else if(props.currentIndex === index){
//       // 2. 같은 타이틀이 선택된 경우
//       props.setModal(false);
//     } else {
//       props.setCurrentIndex(index);
//     }
//   } 

//   // 오늘 날짜를 생성해 주는 함수
//   function getCurrentDate(){
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = String(today.getMonth() + 1).padStart(2, '0')
//     const day = String(today.getDate()).padStart(2, '0')
//     return `${year}-${month}-${day}`
//   }


//   // 글 등록 함수 만들기
//   function addPost(){
//     // 두 개의 입력상자가 비어있는지 확인
//     if(newTitle.trim() === ''){
//       alert('제목이 비어있어요')
//       return
//     }

//     if(newContent.trim() === ''){
//       alert('내용이 비어있어요')
//       return
//     }
//     // 타이틀과 내용을 각 배열에 추가
//     props.setTitle([newTitle, ...props.title])
//     props.setDetails([newContent, ...props.details])

//     // 오늘 날짜 생성 후 날짜 배열에도 추가
//     props.setCreateDate([getCurrentDate(), ...props.createDate])

//     // 좋아요 배열에도 추가
//     props.setLike([0, ...props.like])

//     setNewTitle('')
//     setNewContent('')
//   }

//   return(
//     <>
//       {/* 타이틀 정렬하기 */}
//       <button onClick={()=>{
//         const sortedTitle = [... props.title].sort()
//         props.setTitle(sortedTitle);
//       }}>글 정렬하기</button>

//       <div className='list'>
//         {props.title.map((item, index)=>{
//           return(
//             <div key={index}>
//               <h4 onClick={()=> handleTitle(index)}>
//                     {props.title[index]}
                
//                 <span onClick={(e)=>{
//                   {/* 이벤트 버블링 전이 막기 */}
//                   e.stopPropagation()
//                   const newLikes = [... props.like]
//                   newLikes[index]++
//                   props.setLike(newLikes)
//                   }}>👍
//                 </span>{props.like[index]} 
//                 {/* 삭제 이미지 넣기 */}
//                 &nbsp;
//                 <span onClick={()=>{deletePost}}>❌</span>
//               </h4>      
//               <p>작성일 : {props.createDate[index]}</p>
//             </div>  
//           )
//         })}           
//       </div>
//       <input 
//         onChange={(event)=>{setNewTitle(event.target.value)}}
//         value={newTitle}
//         type="text" placeholder="글 제목을 입력하세요" />
//       <br />
//       <input 
//         onChange={(e)=>{setNewContent(e.target.value)}}
//         value={newContent}
//         type="text" placeholder="내용을 입력하세요"/>
//       <button onClick={addPost}>등록하기</button>
//     </>
//   )
// }

// export default Blog;

import { useState } from "react";

function Blog(props){
  // 타이틀/내용 입력 스테이트
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  // 제목 클릭 시 모달 토글/전환
  function handleTitle(index){
    if (!props.modal) {
      // 1) 닫혀있으면 연다 + 인덱스 설정
      props.setModal(true);
      props.setCurrentIndex(index);
    } else if (props.currentIndex === index) {
      // 2) 같은 제목을 다시 클릭 → 닫기
      props.setModal(false);
    } else {
      // 3) 다른 제목 클릭 → 열린 상태에서 내용만 전환
      props.setCurrentIndex(index);
    }
  }

  // 오늘 날짜 "YYYY-MM-DD"
  function getCurrentDate(){
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // 글 등록
  function addPost(){
    if (newTitle.trim() === ''){
      alert('제목이 비어있어요');
      return;
    }
    if (newContent.trim() === ''){
      alert('내용이 비어있어요');
      return;
    }

    // 타이틀/내용/날짜/좋아요 각각 맨 앞에 추가
    props.setTitle([newTitle, ...props.title]);
    props.setDetails([newContent, ...props.details]);
    props.setCreateDate([getCurrentDate(), ...props.createDate]);
    props.setLike([0, ...props.like]);

    setNewTitle('');
    setNewContent('');
  }

  // 게시글 삭제
  function deletePost(index){
    // 전달된 색인 값 제외 배열 생성
    props.setTitle(prev => prev.filter((_, i) => i !== index));
    props.setDetails(prev => prev.filter((_, i) => i !== index));
    props.setCreateDate(prev => prev.filter((_, i) => i !== index));
    props.setLike(prev => prev.filter((_, i) => i !== index));

    // 열려 있는 모달이 삭제된 글을 가리키고 있으면 닫거나 인덱스 조정
    if (props.modal && props.currentIndex === index) {
      props.setModal(false);
    } else if (props.modal && props.currentIndex > index) {
      // 앞에서 하나 빠졌으니 인덱스 한 칸 당김
      props.setCurrentIndex(props.currentIndex - 1);
    }
  }

  return(
    <>
      {/* 타이틀 정렬하기 (기존 동작 유지) */}
      <button onClick={() => {
        const sortedTitle = [...props.title].sort();
        props.setTitle(sortedTitle);
  
      }}>
        글 정렬하기
      </button>

      <div className='list'>
        {props.title.map((item, index) => {
          return (
            <div key={index}>
              <h4 onClick={() => handleTitle(index)}>
                {props.title[index]}

                {/* 좋아요 */}
                <span
                  onClick={(e) => {
                    e.stopPropagation(); 
                    const newLikes = [...props.like];
                    newLikes[index]++;
                    props.setLike(newLikes);
                  }}
                  style={{ cursor: 'pointer', marginLeft: 8 }}
                >
                  👍
                </span>
                {props.like[index]}

                {/* 삭제 버튼 */}
                &nbsp;
                <span
                  onClick={(e) => {
                    e.stopPropagation(); // 모달 열림 방지
                    deletePost(index);   // ✅ 실제 삭제 호출
                  }}
                  style={{ cursor: 'pointer', marginLeft: 6 }}
                >
                  ❌
                </span>
              </h4>
              <p>작성일 : {props.createDate[index]}</p>
            </div>
          );
        })}
      </div>

      {/* 입력 폼 */}
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type="text"
        placeholder="글 제목을 입력하세요"
      />
      <br />
      <input
        onChange={(e) => setNewContent(e.target.value)}
        value={newContent}
        type="text"
        placeholder="내용을 입력하세요"
      />
      <button onClick={addPost}>등록하기</button>
    </>
  );
}

export default Blog;
