const Dropdown = function(id) {
    const rootEle = $(id);

    $('body').click(() => {
        rootEle.find('.dropdown-content').css('display','none');
    });

    rootEle.find('.dropdown-btn').click(event => {
        event.stopPropagation();

        let visible = rootEle.find('.dropdown-content').css('display');
        visible = (visible==='none')?'block':'none';

        rootEle.find('.dropdown-content').css('display',visible);
    });

    this.clickAction = function(action) {
        rootEle.find('.option').click(function (event) {
            event.stopPropagation();

            const option = $(this).find('.name').text();
            const icon = $(this).find('i').text();

            rootEle.find('.dropdown-btn > #dropdown-icon').text(icon);
            rootEle.find('.dropdown-btn > .name').text(option);

            action(option);
        });
    };


};


