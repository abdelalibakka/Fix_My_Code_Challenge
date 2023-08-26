Copy code
#!/usr/bin/node

/*
    Print a square with the character #

    The size of the square must be the first argument
    of the program.
*/

if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.stderr.write("Usage: ./print_square.js <size>\n");
    process.stderr.write("Example: ./print_square.js 8\n");
    process.exit(1);
}

const size = parseInt(process.argv[2], 10); // Parse the size using base 10 (decimal)

if (isNaN(size) || size <= 0) {
    process.stderr.write("Invalid size\n");
    process.exit(1);
}

const row = "#".repeat(size); // Create a row of # characters

for (let i = 0; i < size; i++) {
    console.log(row); // Print the row 'size' number of times
}
