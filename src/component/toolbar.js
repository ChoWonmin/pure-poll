const Toolbar = function(id) {

    const roootEle = $(id);

    this.clickAction = function(action) {

        roootEle.find('.tool-btn').click(function() {
           action($(this).attr('name'));
        });
    };

}