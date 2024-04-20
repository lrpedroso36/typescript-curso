import { MensagemView } from './../views/mensagem-view.js';
import { NegociacoesView } from './../views/negociacoes-view.js';
import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from './../models/negociacao.js';
import { DiaDaSemana } from '../models/dias-da-semana.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoes-view', true);
    private mensagemView = new MensagemView('#mensagem-view');

    constructor(){
        this.inputData = document.querySelector("#data") as HTMLInputElement;
        this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
        this.inputValor = document.querySelector("#valor") as HTMLInputElement;
    }

    public adiciona() : void {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if(!this.ehDiaUtil(negociacao.data)){
            this.mensagemView.update('É permitido negociações apenas em dias úteis.');
            return;
        }

        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }

    private ehDiaUtil(data: Date) : boolean {
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
    }

    private limparFormulario() : void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView() : void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionado com sucesso.');
    }
}