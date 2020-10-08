const readline = require("readline")

const main = () => {
  const cli = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  cli.question("input score: ", (score) => {
    console.log(score)
  })
}

main()
