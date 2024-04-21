export  function inspecionar(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: Array<any>) {
        console.log(`-- Método: ${propertyKey} --`);
        console.log(`---- Parâmetros: ${JSON.stringify(args)} ----`);
        const retrono = metodoOriginal.apply(this, args);
        console.log(`---- Retorno: ${JSON.stringify(retrono)} ----`);
        retrono;
    }
    return descriptor;
}
