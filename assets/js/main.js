/**
 * Main
 */

'use strict';

let menu, animate;

(function () {
  // Initialize menu
  //-----------------

  let layoutMenuEl = document.querySelectorAll('#layout-menu');
  layoutMenuEl.forEach(function (element) {
    menu = new Menu(element, {
      orientation: 'vertical',
      closeChildren: false
    });
    // Change parameter to true if you want scroll animation
    window.Helpers.scrollToActive((animate = false));
    window.Helpers.mainMenu = menu;
  });

  // Initialize menu togglers and bind click on each
  let menuToggler = document.querySelectorAll('.layout-menu-toggle');
  menuToggler.forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      window.Helpers.toggleCollapsed();
    });
  });

  // Display menu toggle (layout-menu-toggle) on hover with delay
  let delay = function (elem, callback) {
    let timeout = null;
    elem.onmouseenter = function () {
      // Set timeout to be a timer which will invoke callback after 300ms (not for small screen)
      if (!Helpers.isSmallScreen()) {
        timeout = setTimeout(callback, 300);
      } else {
        timeout = setTimeout(callback, 0);
      }
    };

    elem.onmouseleave = function () {
      // Clear any timers set to timeout
      document.querySelector('.layout-menu-toggle').classList.remove('d-block');
      clearTimeout(timeout);
    };
  };
  if (document.getElementById('layout-menu')) {
    delay(document.getElementById('layout-menu'), function () {
      // not for small screen
      if (!Helpers.isSmallScreen()) {
        document.querySelector('.layout-menu-toggle').classList.add('d-block');
      }
    });
  }

  // Display in main menu when menu scrolls
  let menuInnerContainer = document.getElementsByClassName('menu-inner'),
    menuInnerShadow = document.getElementsByClassName('menu-inner-shadow')[0];
  if (menuInnerContainer.length > 0 && menuInnerShadow) {
    menuInnerContainer[0].addEventListener('ps-scroll-y', function () {
      if (this.querySelector('.ps__thumb-y').offsetTop) {
        menuInnerShadow.style.display = 'block';
      } else {
        menuInnerShadow.style.display = 'none';
      }
    });
  }

  // Init helpers & misc
  // --------------------

  // Init BS Tooltip
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Accordion active class
  const accordionActiveFunction = function (e) {
    if (e.type == 'show.bs.collapse' || e.type == 'show.bs.collapse') {
      e.target.closest('.accordion-item').classList.add('active');
    } else {
      e.target.closest('.accordion-item').classList.remove('active');
    }
  };

  const accordionTriggerList = [].slice.call(document.querySelectorAll('.accordion'));
  const accordionList = accordionTriggerList.map(function (accordionTriggerEl) {
    accordionTriggerEl.addEventListener('show.bs.collapse', accordionActiveFunction);
    accordionTriggerEl.addEventListener('hide.bs.collapse', accordionActiveFunction);
  });

  // Auto update layout based on screen size
  window.Helpers.setAutoUpdate(true);

  // Toggle Password Visibility
  window.Helpers.initPasswordToggle();

  // Speech To Text
  window.Helpers.initSpeechToText();

  // Manage menu expanded/collapsed with templateCustomizer & local storage
  //------------------------------------------------------------------

  // If current layout is horizontal OR current window screen is small (overlay menu) than return from here
  if (window.Helpers.isSmallScreen()) {
    return;
  }

  // If current layout is vertical and current window screen is > small

  // Auto update menu collapsed/expanded based on the themeConfig
  window.Helpers.setCollapsed(true, false);
})();


// script for add more text field for mission page
function add_more() {

  let randomNumber = String(Math.floor(Math.random() * (98765 - 12345 + 1)) + 5);

  let first_label_text = $("#core_field .form-label:first").text();

  let last_label_text = $("#core_field .form-label:last").text();

  let add_element = `<div class="mb-3"><label for="" class="form-label">${first_label_text} </label><input type="text" class="form-control" placeholder="Code of mission" /></div><div class="mb-3"><label for="" class="form-label">${last_label_text} </label><textarea name="${randomNumber}" id="" cols="30" rows="3"></textarea></div>`;

  let textbox_script = `<script> CKEDITOR.replace('${randomNumber}'); </script>`;

  let append_box = $("#append_box");

  // $(append_box).append("<li><div class='d-flex justify-content-between'><h5>New Item</h5><button class='btn btn-sm btn-danger' onclick='remove_box(event)'>Remove</button></div>"+add_element+"</li>");
  $(append_box).append(`<li><div class='d-flex justify-content-between'><h5>New Item</h5><button class='btn btn-sm btn-danger' onclick='remove_box(event)'>Remove</button></div>${add_element}${textbox_script}</li>`);

}

function remove_box(event) {

  $(event.target).parent().parent().remove();

}


// add more button function for graduate attributes page
function add_more_2() {

  let randomNumber = String(Math.floor(Math.random() * (98765 - 12345 + 1)) + 5);

  let add_element = `<div class="mb-3"><label for="" class="form-label">Graduate Attribute Code: </label><input type="text" class="form-control" placeholder="Code of Gaduate Attribute" /></div><div class="mb-3"><label for="" class="form-label">GRADUATE ATTRIBUTES DETAILS: </label><textarea name="${randomNumber}" id="" cols="30" rows="3"></textarea></div><div class="mb-3"><label for="" class="form-label">Domain: </label><select class="form-select" name="" id=""><option selected disabled>Please Select</option><option value="">Reguler</option><option value="">Irreguler</option></select></div>`;

  let textbox_script = `<script> CKEDITOR.replace('${randomNumber}'); </script>`;

  let append_box = $("#append_box");

  // $(append_box).append("<li><div class='d-flex justify-content-between'><h5>New Item</h5><button class='btn btn-sm btn-danger' onclick='remove_box(event)'>Remove</button></div>"+add_element+"</li>");
  $(append_box).append(`<li><div class='d-flex justify-content-between'><h5>New Item</h5><button class='btn btn-sm btn-danger' onclick='remove_box(event)'>Remove</button></div>${add_element}${textbox_script}</li>`);

}

// add more button function for poe
function add_more_3() {

  let randomNumber = String(Math.floor(Math.random() * (98765 - 12345 + 1)) + 5);

  let add_element = `<div class="mb-3"><label for="" class="form-label">POE Code: </label><input type="text" class="form-control" placeholder="Code of POE" /></div><div class="mb-3"><label for="" class="form-label">POE Details: </label><textarea name="${randomNumber}" id="" cols="30" rows="3"></textarea></div>
                                          <div class="mb-3">
                                            <p class="form-label">Domain(s):</p>
                                            <div class="form-check form-check">
                                                <input class="form-check-input" type="checkbox" id="" value="option1" />
                                                <label class="form-check-label" for="">first</label>
                                            </div>
                                            <div class="form-check form-check">
                                                <input class="form-check-input" type="checkbox" id="" value="option2" />
                                                <label class="form-check-label" for="">second</label>
                                            </div>
                                            <div class="form-check form-check">
                                                <input class="form-check-input" type="checkbox" id="" value="option3" />
                                                <label class="form-check-label" for="">third</label>
                                            </div>
                                          </div>`;

  let textbox_script = `<script> CKEDITOR.replace('${randomNumber}'); </script>`;

  let append_box = $("#append_box");

  // $(append_box).append("<li><div class='d-flex justify-content-between'><h5>New Item</h5><button class='btn btn-sm btn-danger' onclick='remove_box(event)'>Remove</button></div>"+add_element+"</li>");
  $(append_box).append(`<li><div class='d-flex justify-content-between'><h5>New Item</h5><button class='btn btn-sm btn-danger' onclick='remove_box(event)'>Remove</button></div>${add_element}${textbox_script}</li>`);

}