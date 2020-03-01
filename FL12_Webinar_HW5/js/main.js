
window.onload = () => {
  getUsersList();
}
window.onhashchange = () => {
  const hash = window.location.hash;
  const id = hash.match(/[0-9]/g).join('');

  if (hash.includes('user')) {
    getContent(id);
  }
  if (!hash) {
    getUsersList();
  }
};

const block = document.querySelector('#userList');
const spinner = document.querySelector('#spinner');


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
        inp.addEventListener('click', () => window.location.hash = `/user/${el.id}`);
        divGroup.appendChild(inp);

        const divGroupAppend = document.createElement('div');
        divGroupAppend.className = 'input-group-append';

        const btnEdit = document.createElement('button');
        btnEdit.type = 'button';
        btnEdit.className = 'btn btn-success';
        btnEdit.innerHTML = 'Edit';

        btnEdit.addEventListener('click', () => {
          createEdit(el);
          window.location.hash = `/edit/${el.id}`;
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

  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(response => response.json())
    .then(json => {
      json.forEach((el) => {
        const listBlock = document.createElement('div');
        const element = createItems(el.title, el.body);

        listBlock.className = 'list-block';
        listBlock.innerHTML += `<h3 class="my-4 text-primary">post:</h3>
        ${element}
        <h3 class="my-4 text-primary">comments:</h3>`

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${el.id}`)
          .then(response => response.json())
          .then(json => {
            json.forEach((el) => {
              listBlock.innerHTML += createItems(el.name, el.body);
            })
          }).catch(error => {
            throw (error);
          })
        listPosts.appendChild(listBlock);
      })
    }).catch(error => {
      throw (error);
    })
  block.appendChild(listPosts);
}


function createItems(name, body) {
  spinner.style.display = 'none';

  return (
    `<a class="list-group-item list-group-item-action flex-column align-items-start my-2">
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1 head">${name}</h5>
    </div>
    <p class="mb-1 text">${body}</p>
    </a>`
  )
}

function getRandomDog(img) {
  fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
      if (data.url.includes('.mp4')) {
        getRandomDog(img);
      }
      else {
        img.src = data.url;
      }
    });
}

function createEdit(user) {
  let form = `<form id='form'>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="name">Name</label>
      <input type="text" class="form-control is-valid" id="name" placeholder="First name" value="${user.name}" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="username">Username</label>
      <input type="text" class="form-control is-valid" id="username" placeholder="Last name" value="${user.username}" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="email">Email</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupPrepend3">@</span>
        </div>
        <input type="text" class="form-control is-valid" id="email" placeholder="email" value="${user.email}" required> 
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="city">City</label>
      <input type="text" class="form-control is-valid" id="city" placeholder="City" 
      value="${user.address.city}"required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="suite">Suite</label>
      <input type="text" class="form-control is-valid" id="suite" placeholder="Suite" 
      value="${user.address.suite}"required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="street">Street</label>
      <input type="text" class="form-control is-valid" id="street" placeholder="Street"
      value="${user.address.street}" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="zip">Zipcode</label>
      <input type="text" class="form-control is-valid" id="zip" placeholder="Zipcode" 
      value="${user.address.zipcode}"required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="lat">Geo lat</label>
      <input type="text" class="form-control is-valid" id="lat" placeholder="Geo lat" 
      value="${user.address.geo.lat}"required>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="lng">Geo lng</label>
      <input type="text" class="form-control is-valid" id="lng" placeholder="Geo lng"
      value="${user.address.geo.lng}" required>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
  </div>
  <div class="form-row">
  <div class="col-md-6 mb-3">
    <label for="phone">Phone</label>
    <input type="text" class="form-control is-valid" id="phone" placeholder="phone" 
    value="${user.phone}"required>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-6 mb-3">
    <label for="website">Website</label>
    <input type="text" class="form-control is-valid" id="website" placeholder="Website"
    value="${user.website}" required>
    <div class="invalid-feedback">
      Please provide a valid state.
    </div>
  </div>
</div>
<div class="form-row">
    <div class="col-md-4 mb-3">
        <label for="companyName">Company name</label>
        <input type="text" class="form-control is-valid" id="companyName" placeholder="Company name" 
        value="${user.company.name}"required>
        <div class="invalid-feedback">
            Please provide a valid city.
        </div>
    </div>
    <div class="col-md-4 mb-3">
        <label for="catchPhrase">Catch Phraset</label>
        <input type="text" class="form-control is-valid" id="catchPhrase" placeholder="Catch Phrase" 
        value="${user.company.catchPhrase}"required>
        <div class="invalid-feedback">
            Please provide a valid city.
        </div>
    </div>
<div class="col-md-4 mb-3">
        <label for="bs">BS</label>
        <input type="text" class="form-control is-valid" id="bs" placeholder="BS"
        value="${user.company.bs}" required>
        <div class="invalid-feedback">
            Please provide a valid state.
        </div>
    </div>
</div>
</div>


  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input is-valid" type="checkbox" value="" id="invalidCheck3" required>
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>`

  block.innerHTML = form;
  const editForm = document.getElementById('form');
  editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    saveChanges(user.id);
  });
}

function saveChanges(userId) {
  spinner.style.display = 'block';

  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    method: 'PATCH',
    body: JSON.stringify({
      name: document.querySelector('#name').value,
      username: document.querySelector('#username').value,
      email: document.querySelector('#email').value,
      address: {
        street: document.querySelector('#street').value,
        suite: document.querySelector('#suite').value,
        city: document.querySelector('#city').value,
        zipcode: document.querySelector('#zip').value,
        geo: {
          lat: document.querySelector('#lat').value,
          lng: document.querySelector('#lng').value
        }
      },
      phone: document.querySelector('#phone').value,
      website: document.querySelector('#website').value,
      company: {
        name: document.querySelector('#companyName').value,
        catchPhrase: document.querySelector('#catchPhrase').value,
        bs: document.querySelector('#bs').value
      }
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(() => window.location.href = window.location.href.replace(/#.*$/, ''))
    .catch(error => console.log(error));
}
