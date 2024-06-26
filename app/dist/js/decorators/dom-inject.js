export function domInject(seletor) {
    return function (target, propertyKey) {
        const getter = function () {
            const elemento = document.querySelector(seletor);
            return elemento;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
