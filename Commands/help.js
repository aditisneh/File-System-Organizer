function helpFn() {
    console.log(`
    List of All Commands
        -node main.js tree "dirpath"
        -node main.js organize "dirpath"
        -node main.js help
    `);
}
module.exports = {
    helpKey: helpFn
}