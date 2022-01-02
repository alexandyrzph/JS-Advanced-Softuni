function solve() {
    try {
        throw Error('my error')
    } catch (error) {
        console.log(error);
    }
}

solve()