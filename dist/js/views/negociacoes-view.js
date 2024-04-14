export class NegociacoesView {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
    template(model) {
        return `
            <table class="table table-houver table-bordered">
                <thead>
                 <tr>
                    <th>DATA</th>
                    <th>QUATIDADE</th>
                    <th>VALOR</th>
                 </tr>
                </thead>
                <tbody>
                    ${model.lista().map((negociacao) => {
            return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                            `;
        })}
                </tbody>
            </table>
        `;
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
