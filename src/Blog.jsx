// Blog.jsx
export default function Blog({
  title,
  createDate,
  details,      
  like,
  onSort,
  onChangeFirstTitle,
  onAddLike,
  onTitleClick,
}) {
  return (
    <div className="list">
      <button onClick={onSort}>글 정렬하기</button>

      {title.map((item, index) => (
        <div key={index}>
          <h4 onClick={() => onTitleClick(index)}>
            {title[index]}
            <span
              onClick={(e) => {
                e.stopPropagation();
                onAddLike(index);
              }}
            >
              👍
            </span>
            {like[index]}
            {index === 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation(); 
                  onChangeFirstTitle();
                }}
              >
                변경
              </button>
            )}
          </h4>
          <p>작성일 : {createDate[index]}</p>
        </div>
      ))}
    </div>
  );
}
