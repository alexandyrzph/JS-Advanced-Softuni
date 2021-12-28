function factory(library, orders) {
    const result = [];

    for (let order of orders) {
        const current = Object.assign({}, order.template);
        for (let part of order.parts) {
            current[part] = library[part];
        }
        result.push(current);
    }
    return result;
}
factory();