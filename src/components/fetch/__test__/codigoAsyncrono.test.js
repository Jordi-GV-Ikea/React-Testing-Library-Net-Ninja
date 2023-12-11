const fetchData = () => new Promise((res, rej) => {
    setTimeout(() => {
        res('peanut butter')
    }, 200)
})
const fetchDataError = () => new Promise((res, rej) => rej('error'))

// You ALWAYS must to use RETURN or AWAIT
test('el dato es peanut butter -then', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });

});
test('el dato es peanut butter with -async await', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});
test('el dato es peanut butter -resolves', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
});
test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await fetchDataError();
    } catch (e) {
        expect(e).toMatch('error');
    }
});
test('el dato es peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
});

test('el fecth falla con un error', async () => {
    await expect(fetchDataError()).rejects.toMatch('error');
});
test('the fetch fails with an error -rejects', () => {
    return expect(fetchDataError()).rejects.toMatch('error');
});