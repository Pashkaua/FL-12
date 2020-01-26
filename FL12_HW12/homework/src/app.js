const rootNode = document.getElementById('root');

window.onload = hashChane;
window.onhashchange = hashChane;

function hashChane() {

    if (window.location.hash === '#' || window.location.hash === '') {
        rendMain();
    }
    if (window.location.hash === '#/add_new') {
        rendAddNew();
    }
    if (window.location.hash.includes('modify')) {
        const hash = window.location.hash.match(/[0-9]+/g);
        modify(+hash);
    }
}


let list = [];


function rendMain() {
    rootNode.innerHTML = '';

    let currentList = JSON.parse(localStorage.getItem('list'));
    if (currentList) {
        list = currentList;
    }

    const btn = document.createElement('button');
    btn.innerHTML = 'Add New';
    btn.className = 'btn-new';
    btn.addEventListener('click', function () {
        window.location.hash = '/add_new';
    });

    rootNode.appendChild(btn);

    const ul = document.createElement('ul');

    if (list && list.length) {
        for (let i = 0; i < list.length; i++) {

            const li = document.createElement('li');
            const pTerm = document.createElement('p');
            pTerm.innerHTML = list[i].term;
            const pDef = document.createElement('p');
            pDef.innerHTML = list[i].def;
            if (list[i].check) {
                pTerm.className = 'done';
                pDef.className = 'done';
            }
            li.appendChild(pTerm);
            li.appendChild(pDef);
            pTerm.addEventListener('click', () => markDone(i));
            pDef.addEventListener('click', () => markDone(i));

            const btnEdit = document.createElement('button');
            btnEdit.className = 'btn-save';
            btnEdit.innerHTML = 'edit';
            btnEdit.addEventListener('click', function () {
                window.location.hash = `modify/id:${i}`
            });
            li.appendChild(btnEdit);

            const btnRemove = document.createElement('button');
            btnRemove.className = 'btn-cancel';
            btnRemove.innerHTML = 'remove';
            btnRemove.addEventListener('click', () => remove(i));
            li.appendChild(btnRemove);
            ul.appendChild(li);
        }
    }

    rootNode.appendChild(ul);
}
rendMain();


function rendAddNew() {
    rootNode.innerHTML = '';

    const div = document.createElement('div');
    div.className = 'block-add-new';
    const inputTerm = document.createElement('input');
    const inputDef = document.createElement('input');
    const btnEdit = document.createElement('button');
    const btnCancel = document.createElement('button');
    inputTerm.className = 'term';
    inputTerm.setAttribute('placeholder', 'Enter term');
    div.appendChild(inputTerm);
    inputDef.className = 'definition';
    inputDef.setAttribute('placeholder', 'Enter definition');
    div.appendChild(inputDef);
    btnEdit.className = 'btn-save';
    btnEdit.innerHTML = 'Save changes';
    div.appendChild(btnEdit);
    btnCancel.className = 'btn-cancel';
    btnCancel.innerHTML = 'cancel';
    btnCancel.addEventListener('click', function () {
        window.location.hash = '';
    });
    div.appendChild(btnCancel);
    btnEdit.addEventListener('click', pushToLocal);
    rootNode.appendChild(div);
}

function pushToLocal() {
    const term = document.querySelector('.term').value;
    const def = document.querySelector('.definition').value;

    const zero = 0;

    if (!term || !def) {
        alert('Plese enter new task')
    } else {
        let newItem = {
            'term': term,
            'def': def,
            'check': false
        };

        for (let i = 0; i < list.length; i++) {

            if (list[i].check) {
                list.splice(i, zero, newItem);

                localStorage.setItem('list', JSON.stringify(list));
                window.location.hash = '';

                return;
            }
        }

        list.push(newItem);
        localStorage.setItem('list', JSON.stringify(list));
        window.location.hash = '';
    }
}

function modify(el) {
    rootNode.innerHTML = '';

    const div = document.createElement('div');
    div.className = 'block-add-new';
    const inputTerm = document.createElement('input');
    const inputDef = document.createElement('input');
    const btnEdit = document.createElement('button');
    const btnCancel = document.createElement('button');

    inputTerm.className = 'term';
    inputTerm.value = list[el].term;
    div.appendChild(inputTerm);

    inputDef.className = 'definition';
    inputDef.value = list[el].def;
    div.appendChild(inputDef);

    btnEdit.className = 'btn-save';
    btnEdit.innerHTML = 'Save changes';
    btnEdit.addEventListener('click', function () {
        list[el].term = inputTerm.value;
        list[el].def = inputDef.value;
        localStorage.setItem('list', JSON.stringify(list));
        window.location.hash = '';
    });

    div.appendChild(btnEdit);
    btnCancel.className = 'btn-cancel';
    btnCancel.innerHTML = 'cancel';
    btnCancel.addEventListener('click', function () {
        window.location.hash = '';

    });
    div.appendChild(btnCancel);
    rootNode.appendChild(div);
}

function remove(el) {
    list.splice(el, 1);
    localStorage.setItem('list', JSON.stringify(list));
    rendMain();
}

function markDone(el) {
    list[el].check = true;
    list.push(list[el]);
    list.splice(el, 1);
    localStorage.setItem('list', JSON.stringify(list));
    rendMain();
}
