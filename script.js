console.log("initiallizing Terminal ... ");

function focusInput() {
    document.getElementById("command").focus();
}

const prompt = "<strong>$</strong>";

let output = document.querySelector(".output");

command.addEventListener("keydown", (e) => {
    const command = document.getElementById("command");

    if (e.key === "Enter") {
        const input = command.value;
        output.innerHTML += `<p> ${prompt} ${input}</p>`;
        commander(input);
    }
});

function commander(cmd) {
    switch (cmd.toLowerCase()) {
        case "":
            break
        case "ls":
            output.innerHTML +=
                "this command shows the directory in this folder";
            break;
        case "clear":
            output.innerHTML = "";
            break
        default:
            output.innerHTML += `<p>Command not found.</p><p>Please enter a valid command or enter <b>'help'</b> command to check out the commands available.</p>`;
            break;
    }
    command.value = "";
}
