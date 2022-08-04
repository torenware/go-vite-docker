"use strict";
exports.__esModule = true;
require("./style.css");
console.log('JS from vite is loaded.');
document.addEventListener('DOMContentLoaded', function () {
    var hasForms = false;
    var forms = document.querySelectorAll('form[novalidate]');
    // HOF for change handlers
    var changeHandler = function (div, item) {
        var errItem = div.querySelector('div.errors');
        return function () {
            if (item.checkValidity()) {
                if (div.classList.contains('invalid')) {
                    div.classList.remove('invalid');
                }
                if (errItem) {
                    errItem.innerHTML = '';
                }
            }
            else {
                if (!div.classList.contains('invalid')) {
                    div.classList.add('invalid');
                }
                if (errItem) {
                    errItem.innerHTML = item.validationMessage;
                }
            }
        };
    };
    forms.forEach(function (item) {
        hasForms = true;
        var form = item;
        // if form has a primary btn, disable it
        var primeBtn;
        var btn = form.querySelector('button.btn-primary, input.btn-primary');
        if (btn !== null) {
            primeBtn = btn;
            primeBtn.disabled = true;
        }
        form.addEventListener('submit', function (evt) {
            if (!form.checkValidity()) {
                evt.preventDefault();
            }
        });
        form.addEventListener('change', function () {
            console.log('form changed');
            var disableBtn = !form.checkValidity();
            if (primeBtn !== null) {
                primeBtn.disabled = disableBtn;
            }
        });
        var groups = form.querySelectorAll('div.form-group');
        groups.forEach(function (formGroup) {
            // Get the active element
            var control = formGroup.querySelector('input, select, textarea');
            if (control !== null) {
                var controlID = control.id;
                var item_1 = control;
                var div = formGroup;
                console.log('Found control', controlID, 'of type', item_1.tagName);
                item_1.addEventListener('change', changeHandler(div, item_1));
            }
        });
    });
    if (!hasForms) {
        console.log('No forms on this page');
    }
    else {
        console.log('Page has forms');
    }
});
