import { Negociacoes } from './../models/negociacoes.js';
import { View } from './view.js';

export class NegociacoesView extends View<Negociacoes> {
    protected template(model: Negociacoes) : string {
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
                                <td>${this.formatar(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                            `    
                    })}
                </tbody>
            </table>
        `;
    }

    private formatar(date: Date) : string {
        return new Intl.DateTimeFormat().format(date);
    }
}