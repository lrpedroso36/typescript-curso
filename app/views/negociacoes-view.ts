import { Negociacao } from './../models/negociacao';
import { Negociacoes } from './../models/negociacoes.js';

export class NegociacoesView {
    private elemento: HTMLElement;

    constructor(selector: string) {
        this.elemento = document.querySelector(selector);
    }

    template(model: Negociacoes) : string {
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
                                <td>${negociacao.data}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                            `    
                    })}
                </tbody>
            </table>
        `;
    }

    update(model: Negociacoes) : void {
        this.elemento.innerHTML = this.template(model);
    }
}