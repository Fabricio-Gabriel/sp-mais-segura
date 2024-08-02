import 'regenerator-runtime/runtime';
import 'core-js/stable';

import './css/style.css';
import './css/forms.css';

class ValidaForms {

    constructor() {
        this.forms = document.querySelector('.forms');
        this.event();
    }

    event() {
        this.forms.addEventListener('submit', (e) => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const campoValido = this.isValid();

        if (campoValido) {
            alert('Formulário enviado!');
            this.forms.submit();
        }   
    }

    isValid() {
        let valid = true;
        const campos = document.querySelectorAll('.valid');
        const erro = document.querySelectorAll('.erro-text');

        erro.forEach(e => {
            e.remove();
        });

        campos.forEach(campo => {
            if (!campo.value) {
                this.criaErro(campo, 'Este campo, não pode estar em branco');
                valid = false;
            }

        });
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('erro-text');
        campo.insertAdjacentElement('afterend', div)
    }

}

const valida = new ValidaForms();