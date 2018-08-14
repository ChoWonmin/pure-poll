const Dropdown = function(id) {

    const rootEle = $(id);

    $('body').click(() => {
        rootEle.find('.dropdown-content').css('display','none');
        rootEle.find('.dropdown-btn > .dropdown-arrow').removeClass('rotate-icon');
    });

    rootEle.find('.dropdown-btn').click(event => {
        event.stopPropagation();

        let visible = rootEle.find('.dropdown-content').css('display');

        if (visible==='none') {
            rootEle.find('.dropdown-content').css('display','block');
            rootEle.find('.dropdown-btn > .dropdown-arrow').addClass('rotate-icon');
        } else {
            rootEle.find('.dropdown-content').css('display','none');
            rootEle.find('.dropdown-btn > .dropdown-arrow').removeClass('rotate-icon');
        }

    });

    this.clickAction = function(action) {
        rootEle.find('.option').click(function (event) {
            event.stopPropagation();

            const option = $(this).find('.name').text();
            const icon = $(this).find('i').text();

            rootEle.find('.dropdown-btn > .dropdown-arrow').removeClass('rotate-icon');
            rootEle.find('.dropdown-btn > .dropdown-icon').text(icon);
            rootEle.find('.dropdown-btn > .name').text(option);
            rootEle.find('.dropdown-content').css('display','none');

            action(option);

        });
    };


};


