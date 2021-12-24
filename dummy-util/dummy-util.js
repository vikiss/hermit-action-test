#!/usr/bin/env node
const args = process.argv.slice(2);
if (args.length) {
    process.stdout.write('Dummy util received these arguments:\n');
    args.forEach((item) => {
        process.stdout.write(`${item}\n`);
    });

} else {
    process.stdout.write('Dummy util received no arguments\n');
}
