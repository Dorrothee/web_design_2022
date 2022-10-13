
const random = (length = 7) => {
    return Math.random().toString(16).substr(2, length);
};


async function addComment(body) {
    let user = document.createElement('div');
    let Comments = document.querySelector('.posts');

    let CommentInfo = `
    <div class="posts_box">
        <h3>
            User ${random(7)}
        </h3>
        <p> ${body} </p>
    </div>`;
    user.innerHTML = CommentInfo;
    Comments.append(user);
}
let response = fetch('https://dummyjson.com/posts?skip=4&limit=5').then(res => res.json()).then(json => parse(json.posts))
console.log(response);
async function parse(data) {
    for(let i = 0; i < data.length; i++){
        let body = await data[i].body;
        console.log(body)
        await addComment(body)
    };
}