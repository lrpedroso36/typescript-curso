export function inspecionar(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`-- Método: ${propertyKey} --`);
        console.log(`---- Parâmetros: ${JSON.stringify(args)} ----`);
        const retrono = metodoOriginal.apply(this, args);
        console.log(`---- Retorno: ${JSON.stringify(retrono)} ----`);
        retrono;
    };
    return descriptor;
}
