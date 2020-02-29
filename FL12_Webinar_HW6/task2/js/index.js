const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");

const $searchInp = $("#search-input");
const $searchBtn = $("#search-btn");

const list = localStorage.getItem('list');

let todos = [
  // {
  //   text: "Buy milk",
  //   done: false
  // },
  // {
  //   text: "Play with dog",
  //   done: true
  // }
];

if (list) {
  todos = JSON.parse(list);
  createList();
}


function createList() {

  $(todos).each(
    function (i, el) {
      if (el.done) {
        $doneClass = 'done';
      } else {
        $doneClass = '';
      }
      $(".list").append(
        `<li class="item">
          <span class="item-text ${$doneClass}" >${el.text}</span>
          <button class="item-remove">Remove</button>
        </li>`)
    }
  )
}


function newItem() {
  let todoItem = $input.val();
  if (!todoItem) {
    alert(`Pleace enter something`);
  } else {
    let item = {
      text: todoItem,
      done: false
    }
    todos.push(item)
    $(".list").append(
      `<li class="item">
        <span class="item-text" >${todoItem}</span>
        <button class="item-remove">Remove</button>
      </li>`)
    $input.val("");
  }
  $().saveToLocal();
}


function deleteTodoItem(e, item, index) {
  e.preventDefault();
  $(item).parent().fadeOut('slow', function () {
    $(item).parent().remove();
  });
  todos.splice(index, 1);
  $().saveToLocal();
}


function completeTodoItem() {
  $(this).toggleClass("done");
  let index = $list.children().index($(this).parent());
  todos[index].done ? todos[index].done = false : todos[index].done = true;
  $().saveToLocal();
}


function search(str) {
  $searchInp.val("");
  if (!str) {
    alert('Pleace enter something')
  } else {
    $(todos).each(function () {
      $("span:contains('" + str + "')").css("border", "1px solid red");
      setTimeout(function () {
        $("span:contains('" + str + "')").css("border", "none");
      }, 2000);
    })
  }
}


$(function () {

  $add.on('click', function (e) {
    e.preventDefault();
    newItem();
  });

  $list.on('click', '.item-remove', function (e) {
    let item = this;
    let index = $list.children().index($(item).parent());
    deleteTodoItem(e, item, index);
  })

  $searchBtn.on('click', function (e) {
    e.preventDefault();
    search($searchInp.val());
  }
  )

  $(document).on('click', ".item-text", completeTodoItem)

});


(function ($) {
  $.fn.saveToLocal = function () {

    localStorage.setItem("list", JSON.stringify(todos));

  };
})(jQuery);