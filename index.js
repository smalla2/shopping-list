function handleAddItem() {
    $('button[type="submit"]',).on('click', function(event) {
        event.preventDefault();
        const newItem = $('#js-shopping-list-form').find('input[name="shopping-list-entry"]').val();
        const results = [];
        results.push($(
            '<li><span class="shopping-item">'+ [newItem] + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'));
        $('ul').append(results);
    });
    
    $('.shopping-list', 'li').on('click', '.shopping-item-delete', function(event) {
        this.remove();
    });
};

$(handleAddItem);
