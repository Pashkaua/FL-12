const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");

const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];


function newItem() {
  let todoItem = $input.val();
  if (!todoItem) {
    alert(`you have such a boring life that you have nothing to write down here ?`);
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
}


function deleteTodoItem(e, item) {
  e.preventDefault();
  $(item).parent().fadeOut('slow', function () {
    $(item).parent().remove();
  });
}


function completeTodoItem() {
  $(this).toggleClass("done");
}


$(function () {

  $add.on('click', function (e) {
    e.preventDefault();
    newItem();
  });

  $list.on('click', '.item-remove', function (e) {
    let item = this;
    deleteTodoItem(e, item)
  })

  $(document).on('click', ".item-text", completeTodoItem)

});