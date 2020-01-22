const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here


function createTree(structure, parent) {
  const ul = document.createElement('ul');

  for (let i = 0; i < structure.length; i++) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const icon = document.createElement('i');
    const span = document.createElement('span');
    icon.className = 'material-icons';

    p.addEventListener('click', openClose);

    if (structure[i].folder) {
      icon.innerHTML = 'folder';
      p.appendChild(icon);
      p.innerHTML += structure[i].title;
      li.appendChild(p);
      ul.appendChild(li);

    } else {
      icon.innerHTML = 'insert_drive_file'
      span.appendChild(icon);
      span.className = 'file';
      span.innerHTML += structure[i].title;
      li.appendChild(span);
      ul.appendChild(li);

    }

    if (structure[i].children) {

      createTree(structure[i].children, li);

    } else if (structure[i].folder && !structure[i].children) {

      const pEmpty = document.createElement('span');
      pEmpty.innerHTML = 'Folder is empty';
      li.appendChild(pEmpty);
      pEmpty.style.display = 'none';
      pEmpty.className = 'empty';
    }

    parent.appendChild(ul);
  }
}


function openClose() {
  const element = this.nextElementSibling;

  if (element.style.display === 'block') {
    element.style.display = 'none';
    this.firstChild.innerText = 'folder';

  } else {
    element.style.display = 'block';
    this.firstChild.innerText = 'folder_open';
  }
}

createTree(structure, rootNode);
