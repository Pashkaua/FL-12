
window.onload = () => {
    getUsersList();
}
window.onhashchange = () => {
    const id = window.location.hash.match(/[0-9]/g).join('');
    getContent(id);
};

let block = document.querySelector('#userList');
let spinner = document.querySelector('#spinner');

function getUsersList() {

    block.innerHTML = '';

    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(json => {
            const block = document.querySelector('#userList');
            const h1 = document.createElement('h1');
            h1.className = 'my-4';
            h1.innerHTML = 'List of Users';
            block.appendChild(h1);
            json.forEach(el => {

                const divGroup = document.createElement('div');
                divGroup.className = 'input-group mt-3';

                const image = document.createElement('img');
                image.alt = 'dog';
                image.className = 'img';
                getRandomDog(image);
                divGroup.appendChild(image);

                const inp = document.createElement('input');
                inp.type = 'text';
                inp.readOnly = true;

                inp.className = 'form-control';
                inp.value = el.name;
                inp.addEventListener('click', () => window.location.hash = `/${el.id}`);
                inp.addEventListener('blur', () => inp.readOnly = true);
                inp.addEventListener('input', () => edit(inp.value, el.id));

                divGroup.appendChild(inp);

                const divGroupAppend = document.createElement('div');
                divGroupAppend.className = 'input-group-append';

                const btnEdit = document.createElement('button');
                btnEdit.type = 'button';
                btnEdit.className = 'btn btn-success';
                btnEdit.innerHTML = 'Edit';

                btnEdit.addEventListener('click', () => {
                    inp.readOnly = false;
                    inp.focus()
                })

                const btnDel = document.createElement('button');
                btnDel.type = 'button';
                btnDel.className = 'btn btn-danger';
                btnDel.innerHTML = 'DEL';

                btnDel.addEventListener('click', () => deleteUser(el.id, divGroup));

                divGroupAppend.appendChild(btnEdit);
                divGroupAppend.appendChild(btnDel);
                divGroup.appendChild(divGroupAppend);

                block.appendChild(divGroup);
            });
        }
        ).catch(error => console.error(error));
    spinner.style.display = 'none';
}

function edit(data, id) {
    // console.log(data);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            name: data
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    // .then(response => response.json())
    // .then(json => console.log(json))
    // .catch(error => console.error(error));
}



function deleteUser(userId, div) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`, {
        method: 'DELETE'
    })

    const list = document.querySelector('#userList');
    list.removeChild(div);
}



function getContent(id) {
    spinner.style.display = 'block';

    block.innerHTML = '';
    const listPosts = document.createElement('div');
    listPosts.class = "list-group";
    const listPostsHeader = document.createElement('h3');
    listPostsHeader.className = 'my-4 text-primary';
    listPostsHeader.innerHTML = 'User posts:'
    listPosts.appendChild(listPostsHeader);

    const listComents = document.createElement('div');
    listComents.class = "list-group";
    const listComentsHeader = document.createElement('h3');
    listComentsHeader.className = 'my-4 text-primary';
    listComentsHeader.innerHTML = 'User cometnts:'
    listComents.appendChild(listComentsHeader);

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(response => response.json())
        .then(json => {
            json.forEach((el) => {
                listPosts.innerHTML += createItems(el);
            })
        }).catch(error => {
            throw (error);
        })
    block.appendChild(listPosts);

    fetch(`https://jsonplaceholder.typicode.com/posts?postId=${id}`)
        .then(response => response.json())
        .then(json => {
            json.forEach((el) => {
                listComents.innerHTML += createItems(el);
            })
        }).catch(error => {
            throw (error);
        })
    block.appendChild(listComents);
}


function createItems(el) {
    spinner.style.display = 'none';

    return (
        `<a href="#" class="list-group-item list-group-item-action flex-column align-items-start    my-2">
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1 head">${el.title}</h5>
    </div>
    <p class="mb-1 text">${el.body}</p>
    </a>`
    )
}



async function getRandomDog(img) {
    console.log(img);
    await fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            if (data.url.includes('.mp4')) {
                getRandomDog();
            }
            else {
                // dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
                console.log(data.url);
                img.src = data.url;

            }
        });
}
