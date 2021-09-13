export const hardProcess = ( iterations ) => {
    for (let index = 0; index < iterations; index++) {
        console.log("Loading...");
    }

    return `${ iterations } iterationds done`;
}
