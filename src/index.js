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
        const text = document.querySelector('.text-area')
        text.innerHTML = '';
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

        if (!campos[0].value) {
            this.criaErro(campos[0], `O campo "Nome" não pode estar em branco!`);
            valid = false;
        }

        if (!campos[1].value) {
            this.criaErro(campos[1], `O campo "WhatsApp" não pode estar em branco!`);
            valid = false;
        }

        if (!campos[2].value) {
            this.criaErro(campos[2], `O campo "Data de nascimento" não pode estar em branco!`);
            valid = false;
        }

        if (!campos[3].value) {
            this.criaErro(campos[3], `O campo "E-mail" não pode estar em branco!`);
            valid = false;
        }

        if (!campos[4].value) {
            this.criaErro(campos[4], `O campo "Endereço" não pode estar em branco!`);
            valid = false;
        }

        if (!campos[5].value) {
            this.criaErro(campos[5], `O campo "Bairro" não pode estar em branco!`);
            valid = false;
        }

        if (!campos[6].value) {
            this.criaErro(campos[6], `O campo "CEP" não pode estar em branco!`);
            valid = false;
        }

    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('erro-text');
        campo.insertAdjacentElement('afterend', div)
    }

}

const valida = new ValidaForms();