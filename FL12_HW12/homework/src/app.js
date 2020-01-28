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
    const zero = 0;

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

    if (list.length) {
        for (let i = 0; i < list.length; i++) {

            if (list[i].terms.length) {
                const li = document.createElement('li');
                const pTerm = document.createElement('p');
                pTerm.innerHTML = list[i].terms[zero].term;
                const pDef = document.createElement('p');
                pDef.innerHTML = list[i].terms[zero].def;
                if (list[i].check) {
                    pTerm.className = 'done';
                    pDef.className = 'done';
                }
                pTerm.addEventListener('click', () => markDone(i));
                pDef.addEventListener('click', () => markDone(i));

                const btnEdit = document.createElement('button');
                btnEdit.className = 'btn-save';
                btnEdit.innerHTML = 'edit';
                btnEdit.addEventListener('click', function () {
                    window.location.hash = `modify/id:${i}`
                });

                const btnRemove = document.createElement('button');
                btnRemove.className = 'btn-cancel';
                btnRemove.innerHTML = 'remove';
                btnRemove.addEventListener('click', () => remove(i));
                li.appendChild(pTerm);
                li.appendChild(pDef);
                li.appendChild(btnEdit);
                li.appendChild(btnRemove);
                ul.appendChild(li);
            }
        }
    }

    rootNode.appendChild(ul);
}
rendMain();


function rendAddNew() {
    rootNode.innerHTML = '';

    const div = document.createElement('div');
    div.className = 'block-add-new';
    const inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('placeholder', 'Name');
    inputName.className = 'term-name';
    div.appendChild(inputName);

    const btnAdd = document.createElement('button');
    const btnEdit = document.createElement('button');
    const btnCancel = document.createElement('button');

    btnAdd.className = 'btn-add';
    btnAdd.innerHTML = 'cancel';
    btnAdd.innerHTML = 'Add terms';
    div.appendChild(btnAdd);
    btnAdd.addEventListener('click', () => {
        if (!inputName.value) {
            alert('Pleace enter the name')
        } else {
            let set = {
                'mame': inputName.value,
                terms: []
            }
            rendNewTerm(set);
        }

    });

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

function rendNewTerm(set) {

    console.log(set);

    rootNode.innerHTML = '';

    const div = document.createElement('div');
    div.className = 'block-add-new';
    const inputTerm = document.createElement('input');
    inputTerm.setAttribute('type', 'text');
    inputTerm.setAttribute('placeholder', 'Enter term');
    const inputDef = document.createElement('input');
    inputDef.setAttribute('type', 'text');
    inputDef.setAttribute('placeholder', 'Enter definition');
    const btnEdit = document.createElement('button');
    const btnCancel = document.createElement('button');
    inputTerm.className = 'term';
    div.appendChild(inputTerm);
    inputDef.className = 'definition';
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
    btnEdit.addEventListener('click', () => {
        pushToLocal(set);
    });
    rootNode.appendChild(div);
}

function pushToLocal(set) {
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
        set.terms.push(newItem);
        console.log(set);

        list.push(set);
        localStorage.setItem('list', JSON.stringify(list));
        window.location.hash = '';
    }
}

function modify(el) {
    console.log(list);
    console.log(el);
    const zero = 0;

    rootNode.innerHTML = '';

    const div = document.createElement('div');
    div.className = 'block-add-new';
    const inputTerm = document.createElement('input');
    inputTerm.setAttribute('type', 'text');
    const inputDef = document.createElement('input');
    inputTerm.setAttribute('type', 'text');
    const btnEdit = document.createElement('button');
    const btnCancel = document.createElement('button');

    inputTerm.className = 'term';
    inputTerm.value = list[el].terms[zero].term;
    div.appendChild(inputTerm);

    inputDef.className = 'definition';
    inputDef.value = list[el].terms[zero].def;
    div.appendChild(inputDef);

    btnEdit.className = 'btn-save';
    btnEdit.innerHTML = 'Save changes';
    btnEdit.addEventListener('click', function () {
        list[el].terms[zero].term = inputTerm.value;
        list[el].terms[zero].def = inputDef.value;
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