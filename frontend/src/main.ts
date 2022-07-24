import './style.css';

type FormItems = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

console.log('JS from vite has loaded.');

document.addEventListener('DOMContentLoaded', () => {
    let hasForms = false;
    const forms = document.querySelectorAll('form[novalidate]');

    // HOF for change handlers
    const changeHandler = (div: HTMLDivElement, item: FormItems) => {
        return () => {
            if (item.checkValidity()) {
                if (div.classList.contains('invalid')) {
                    div.classList.remove('invalid');
                }
            } else {
                if (!div.classList.contains('invalid')) {
                    div.classList.add('invalid');
                }
            }
        };
    };

    forms.forEach((item) => {
        hasForms = true;
        const form = item as HTMLFormElement;
        // if form has a primary btn, disable it
        let primeBtn: HTMLButtonElement | HTMLInputElement | null;
        const btn = form.querySelector('button.btn-primary, input.btn-primary');
        if (btn !== null) {
            primeBtn = btn as HTMLButtonElement | HTMLInputElement;
            primeBtn.disabled = true;
        }

        form.addEventListener('submit', (evt) => {
            if (!form.checkValidity()) {
                evt.preventDefault();
            }
        });

        form.addEventListener('change', () => {
            console.log('form changed');
            const disableBtn = !form.checkValidity();
            if (primeBtn !== null) {
                primeBtn.disabled = disableBtn;
            }
        });

        const groups = form.querySelectorAll('div.form-group');
        groups.forEach((formGroup) => {
            // Get the active element
            const control = formGroup.querySelector('input, select, textarea');
            if (control !== null) {
                const controlID = control.id;
                const item = control as FormItems;
                const div = formGroup as HTMLDivElement;
                console.log(
                    'Found control',
                    controlID,
                    'of type',
                    item.tagName
                );
                item.addEventListener('change', changeHandler(div, item));
            }
        });
    });

    if (!hasForms) {
        console.log('No forms on this page');
    } else {
        console.log('Page has forms');
    }
});
