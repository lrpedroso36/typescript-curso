export abstract class View<T> {
    protected elemento: HTMLElement;
    private escapar: boolean = false;

    constructor(selector: string, escapar?: boolean) {
        if(escapar){
            this.escapar = escapar;
        }
        
        const elemento = document.querySelector(selector);
        if(elemento){
            this.elemento = elemento as HTMLElement;
        }else{
            throw Error(`Seletor: ${selector} não existe.`);
        }
    }

    protected abstract template(model: T) : string;

    public update(model: T) : void {
        let template = this.template(model);
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<script>/, '');
        };
        this.elemento.innerHTML = template;
    }
}