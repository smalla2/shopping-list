function handleItems() {
    //add mew items to the list
  $('button[type="submit"]').on('click', function(event) {
      event.preventDefault();
      const newItem = $('#js-shopping-list-form').find('input[name="shopping-list-entry"]').val();
      const results = [];
      results.push($(
          '<li><span class="shopping-item">'+ [newItem] + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"> <span class="button-label">delete</span></button></div></li>'));
      $('ul').append(results);
  });


  //remove items from the list
  $('ul.shopping-list').on('click', '.shopping-item-delete', function(event) {
      //$(this).parent().parent().remove(); //this also works
      $(this).closest("li").remove();
  });


  //cross out items on the list
  $('ul.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    const itemsDone = $(this).closest("li").find("span.shopping-item");
    itemsDone.toggleClass('shopping-item__checked');
  });
};

$(handleItems);
