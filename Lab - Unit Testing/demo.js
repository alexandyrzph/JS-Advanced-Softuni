function demo() {
    try {
        throw error 'my error';
    } catch {
        error
    }
}