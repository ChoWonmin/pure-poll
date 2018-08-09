const MakePoll = function() {

    const dropdown = new Dropdown('#question-dropdown');
    const toolbar = new Toolbar('#pool-toolbar');

    dropdown.clickAction(function(text) {
        console.log(text);
    });

    toolbar.clickAction(function(text) {
        console.log(text);
    })

};

const makePoll = new MakePoll();
