const MakePoll = function() {

    const dropdowns = [];
    const toolbar = new Toolbar('#pool-toolbar');

    toolbar.clickAction(function(text) {
        console.log(text);

        if(text==='addQuestion') {

        }

    })

};

const Form = function() {

    const $question = $(`<div class="line flex-wrapper">
  <div class="col-8">
    <div class="question-area">
      <input placeholder="질문"/>
    </div>
  </div>
  <div class="col-1"></div>
  <div class="col-3"><i class="material-icons img-upload-btn">photo</i>
    <div id="question-dropdown1" class="dropdown">
      <div class="dropdown-btn"><i class="material-icons dropdown-icon">short_text</i>
        <div class="name">단답형</div><i class="material-icons dropdown-arrow">keyboard_arrow_down</i>
      </div>
      <div class="dropdown-content">
        <div class="option"><i class="material-icons option-icon">short_text</i>
          <div class="name">단답형</div>
        </div>
        <div class="option bottom-shadow"><i class="material-icons option-icon">notes</i>
          <div class="name">장문형</div>
        </div>
        <div class="option"><i class="material-icons option-icon">radio_button_checked</i>
          <div class="name">객관식</div>
        </div>
        <div class="option"><i class="material-icons option-icon">check_box</i>
          <div class="name">체크박스</div>
        </div>
        <div class="option bottom-shadow"><i class="material-icons option-icon">notes</i>
          <div class="name">드롭다운</div>
        </div>
      </div>
    </div>
  </div>
</div>`);
    const $shortRes = $(`<div class="line flex-wrapper">
  <div class="col-8">
    <div class="question-area">
      <input placeholder="답안"/>
    </div>
  </div>
  <div class="col-4"></div>
</div>`);
    const $longRes = $(`<div class="line flex-wrapper">
  <div class="col-8">
    <div class="question-area">
      <textara placeholder="답안"/>
    </div>
  </div>
  <div class="col-4"></div>
</div>`);

    dropdowns[dropdowns.length-1].clickAction(function(text) {
        console.log(text);
    });
}

const makePoll = new MakePoll();
