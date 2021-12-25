#!/usr/bin/env node
const args = process.argv.slice(2);
if (args.length) {
    const output = [`Dummy util received ${args.length} argument(s):`];
    args.forEach((item) => {
        output.push(item);
    });
    process.stdout.write(`::set-output name=result::${output.join()}`);
} else {
    process.stdout.write('::set-output name=result::Dummy util received no arguments');
}
