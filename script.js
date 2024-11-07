
//Added these three files to be updated
const victoriasBlog = ["index.html", "style.css", "script.js"];
localStorage.setItem('blog data', JSON.stringify(victoriasBlog));

const myData = JSON.parse(localStorage.getItem('blog data'));

//to update new post
const newPost = ["new-post.html"];
localStorage.setItem('New post blog post form', JSON.stringify(newPost));

    const newPostData = JSON.parse(localStorage.getItem('New blog post form'));

    function validationCheck () {
        var title = document.getElementsByName('title')[0].value;
        var content = document.getElementsByName('content')[0].value;
    //to stop the form from submitting im placing an alert
        if (title === '' && content === '') {
            alert('Missing fields');
            return false;
        }
        return true;
    
    }

// to update post

const post = ["post.html"];
localStorage.setItem('View and edit post', JSON.stringify(post));

const postViewEdit = JSON.parse(localStorage.getItem('View and edit post'));

//delete button: was unsure what the question meant by "post ID", was pretty lost

const deleteButton = document.getElementById(deleteButton)

deleteButton.addEventListener("click, function()") {
    localStorage.removeItem(deleteButton);
}
