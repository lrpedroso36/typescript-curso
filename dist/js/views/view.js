export class View {
    constructor(selector, escapar) {
        this.escapar = false;
        if (escapar) {
            this.escapar = escapar;
        }
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor: ${selector} não existe.`);
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, '');
        }
        ;
        this.elemento.innerHTML = template;
    }
}
