const MakePoll = function() {

    const dropdown = new Dropdown('#question-dropdown');

    dropdown.clickAction(function(text) {
        console.log(text);
    })

};

const makePoll = new MakePoll();
