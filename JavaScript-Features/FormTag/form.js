const commentForm = document.querySelector('#commentForm');
const ul = document.querySelector('ul');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();

  	/* 변수 및 함수 수정 */
    const userName = commentForm.elements.username;
    console.dir(commentForm);
    console.dir(userName);
    const userComment = commentForm.elements.comment;
    newComment(userName.value, userComment.value);

    /* 입력필드 초기화 */
    userName.value = '';
    userComment.value = '';
}
)

/* 댓글 생성 함수 */
function newComment(userName, userComment) {
    /* li 태그와, 컨텐츠를 강조해줄 b 태그 생성 */
    const newComment = document.createElement('li');
    const bTag = document.createElement('b');

    bTag.append(userName);
    newComment.append(bTag);
    newComment.append(` : ${userComment}`);

    ul.append(newComment);
}