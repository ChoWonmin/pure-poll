const Item = function(ind) {
    const index = ind;

    this.$root = $('<div class="item"></div>');
    this.$question = $(`<div class="line flex-wrapper">
  <div class="col-8">
    <div class="question-area">
      <input placeholder="질문"/>
    </div>
  </div>
  <div class="col-1"></div>
  <div class="col-3"><i class="material-icons img-upload-btn">photo</i>
    <div id="question-dropdown${ind}" class="dropdown">
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
        <div class="option bottom-shadow"><i class="material-icons option-icon">check_box</i>
          <div class="name">체크박스</div>
        </div>
      </div>
    </div>
  </div>
</div>`);
    this.$shortRes = $(`<div class="line flex-wrapper bottom response">
  <div class="col-8">
    <div class="question-area">
      <input placeholder="답안"/>
    </div>
  </div>
  <div class="col-4"></div>
</div>`);
    this.$longRes = $(`<div class="line flex-wrapper bottom response">
  <div class="col-8">
    <div class="question-area">
      <textarea placeholder="답안"/>
    </div>
  </div>
  <div class="col-4"></div>
</div>`);
    this.$choiceRes = $(`<div class="line flex-wrapper bottom response">
  <div class="col-8">
    <div class="choice-area">
      <textarea placeholder="답안"/>
    </div>
  </div>
  <div class="col-4"></div>
</div>`);

    this.dropdown = null;
    this.currentOption = '단답형';

    this.getRoot = () => {
        this.$root = this.$root.append(this.$question).append(this.$shortRes);
        return this.$root;
    };
    this.addDropdownAction = (dropdownAction) => {
        this.dropdown = new Dropdown('#question-dropdown'+index);
        this.dropdown.clickAction((option)=> {
            if (this.currentOption===option)
                return null;
            else
                this.currentOption=option;

            if(option==='단답형') {
                this.$root.children('.response').remove();
                this.$root.append(this.$shortRes);
            } else if(option==='장문형') {
                this.$root.children('.response').remove();
                this.$root.append(this.$longRes);
            }

        });
    }

}

const PoolForm = function() {

    const that = this;
    const items = [];
    let itemsIndex = 0;
    const toolbar = new Toolbar('#pool-toolbar');

    const $root = $('.form-body');
    const $title = $(`<div class="form-header">
  <div class="input-area">
    <input placeholder="제목" class="bold"/>
  </div>
  <div class="input-area">
    <textarea placeholder="설명"></textarea>
  </div>
</div>`);

    this.pushItems = function() {
        items.push(new Item(itemsIndex));
        $root.append(items[itemsIndex].getRoot());
        items[itemsIndex].addDropdownAction();
        itemsIndex++;
    };

    this.pushItems();

    toolbar.clickAction(function(text) {

        if (text === 'addQuestion') {
            that.pushItems();
        } else if (text === 'addPhoto') {

        } else if (text === 'addTitle') {
            $root.append($title.clone());
        } else if (text === 'preview') {

        }

    })

};

const poolForm = new PoolForm();

