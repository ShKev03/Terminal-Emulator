console.log("initiallizing Terminal ... ");

function focusInput() {
    document.getElementById("command").focus();
}

let prompt = "<strong>keval@portfolio:/~$</strong>";

let output = document.querySelector(".output");

command.addEventListener("keydown", (e) => {
    const command = document.getElementById("command");

    if (e.key === "Enter") {
        const input = command.value;
        output.innerHTML += `<p> ${prompt} ${input}</p>`;
        commander(input);
        command.value = "";
    }
});

let directory = "/";

function commander(cmd) {
    switch (cmd.toLowerCase()) {
        case "":
            break;

        case "clear":
            output.innerHTML = "";
            break;

        case "help":
            processor(help);
            break;

        case "ls":
        case "ls .":
        case "ls ./":
            if (directory == "/") {
                processor(ls);
            } else {
                processor(ls_projects);
            }
            break;

        case "ls projects":
        case "ls /projects":
        case "ls ./projects":
        case "ls projects/":
        case "ls /projects/":
        case "ls ./projects/":
            if (directory == "/") {
                processor(ls_projects);
            } else {
                processor("Directory not found: " + directory);
            }
            break;

        case "cd /":
            directory = "/";
            processor(`<p>Current directory: ${directory}</p>`);
            prompt.innerHTML = `<a>[${directory}]</a>${prompt}`;
            break;

        case "cd projects":
        case "cd /projects":
        case "cd ./projects":
        case "cd projects/":
        case "cd /projects/":
        case "cd ./projects/":
            directory = "/projects";
            processor(`<p>Current directory: ${directory}</p>`);
            prompt.innerHTML = `<a>[${directory}]</a>${prompt}`;
            break;

        case "cd ../":
        case "cd ..":
            if (directory == "/") {
                processor("Access Denied ...");
            } else {
                directory = "/";
            }
            break;

        case "pwd":
            processor(`<p>Current directory: ${directory}</p>`);
            break;

        case "cd ../..":
        case "cd ../../":
            processor("Access Denied ...");
            break;

        case "cd /amazon-clone":
        case "cd amazon-clone":
        case "cd ./amazon-clone":
        case "cd /amazon-clone/":
        case "cd amazon-clone/":
        case "cd ./amazon-clone/":
            if (directory == "/projects") {
                processor("opening /Amazon-Clone on github.com ...");
                processor(
                    "redirecting to https://github.com/ShKev03/Amazon..."
                );
                window
                    .open("https://github.com/ShKev03/Amazon", "_blank")
                    .focus();
            } else {
                processor("Directory not found: ./Amazon-Clone");
            }
            break;

        case "cd projects/amazon-clone":
        case "cd /projects/amazon-clone":
        case "cd ./projects/amazon-clone":
        case "cd projects/amazon-clone/":
        case "cd /projects/amazon-clone/":
        case "cd ./projects/amazon-clone/":
            processor("opening /Amazon-Clone on github.com ...");
            processor("redirecting to https://github.com/ShKev03/Amazon ...");
            window.open("https://github.com/ShKev03/Amazon", "_blank").focus();
            break;

        case "cd /zoom-clone":
        case "cd zoom-clone":
        case "cd ./zoom-clone":
        case "cd /zoom-clone/":
        case "cd zoom-clone/":
        case "cd ./zoom-clone/":
            if (directory == "/projects") {
                processor("opening /Zoom-Clone on github.com ...");
                processor("redirecting to https://github.com/ShKev03/Zoom...");
                window
                    .open("https://github.com/ShKev03/Zoom", "_blank")
                    .focus();
            } else {
                processor("Directory not found: ./Zoom-Clone");
            }
            break;

        case "cd projects/zoom-clone":
        case "cd /projects/zoom-clone":
        case "cd ./projects/zoom-clone":
        case "cd projects/zoom-clone/":
        case "cd /projects/zoom-clone/":
        case "cd ./projects/zoom-clone/":
            processor("opening /Zoom-Clone on github.com ...");
            processor("redirecting to https://github.com/ShKev03/Zoom ...");
            window.open("https://github.com/ShKev03/Zoom", "_blank").focus();
            break;

        case "cd /whatsapp-clone":
        case "cd whatsapp-clone":
        case "cd ./whatsapp-clone":
        case "cd /whatsapp-clone/":
        case "cd whatsapp-clone/":
        case "cd ./whatsapp-clone/":
            if (directory == "/projects") {
                processor("opening /Whatsapp-Clone on github.com ...");
                processor(
                    "redirecting to https://github.com/ShKev03/WhatsChat..."
                );
                window
                    .open("https://github.com/ShKev03/WhatsChat", "_blank")
                    .focus();
            } else {
                processor("Directory not found: ./Whatsapp-Clone");
            }
            break;

        case "cd projects/whatsapp-clone":
        case "cd /projects/whatsapp-clone":
        case "cd ./projects/whatsapp-clone":
        case "cd projects/whatsapp-clone/":
        case "cd /projects/whatsapp-clone/":
        case "cd ./projects/whatsapp-clone/":
            processor("opening /Whatsapp-Clone on github.com ...");
            processor(
                "redirecting to https://github.com/ShKev03/WhatsChat ..."
            );
            window
                .open("https://github.com/ShKev03/WhatsChat", "_blank")
                .focus();
            break;

        case "cd /instagram-clone":
        case "cd instagram-clone":
        case "cd ./instagram-clone":
        case "cd /instagram-clone/":
        case "cd instagram-clone/":
        case "cd ./instagram-clone/":
            if (directory == "/projects") {
                processor("opening /Instagram-Clone on github.com ...");
                processor(
                    "redirecting to https://github.com/ShKev03/Instagram..."
                );
                window
                    .open("https://github.com/ShKev03/Instagram", "_blank")
                    .focus();
            } else {
                processor("Directory not found: ./Instagram-Clone");
            }
            break;

        case "cd projects/instagram-clone":
        case "cd /projects/instagram-clone":
        case "cd ./projects/instagram-clone":
        case "cd projects/instagram-clone/":
        case "cd /projects/instagram-clone/":
        case "cd ./projects/instagram-clone/":
            processor("opening /Instagram-Clone on github.com ...");
            processor(
                "redirecting to https://github.com/ShKev03/Instagram ..."
            );
            // add a wait function and then redirect to github function here
            processor("current directory :" + "/projects");
            directory = "/projects";
            window
                .open("https://github.com/ShKev03/Instagram", "_blank")
                .focus();
            break;

        case "cd /facebook-clone":
        case "cd facebook-clone":
        case "cd ./facebook-clone":
        case "cd /facebook-clone/":
        case "cd facebook-clone/":
        case "cd ./facebook-clone/":
            if (directory == "/projects") {
                processor("opening /Facebook-Clone on github.com ...");
                processor(
                    "redirecting to https://github.com/ShKev03/Facebook..."
                );
                window
                    .open("https://github.com/ShKev03/Facebook", "_blank")
                    .focus();
            } else {
                processor("Directory not found: ./Facebook-Clone");
            }
            break;

        case "cd projects/facebook-clone":
        case "cd /projects/facebook-clone":
        case "cd ./projects/facebook-clone":
        case "cd projects/facebook-clone/":
        case "cd /projects/facebook-clone/":
        case "cd ./projects/facebook-clone/":
            processor("opening /Facebook-Clone on github.com ...");
            processor("redirecting to https://github.com/ShKev03/Facebook ...");
            window
                .open("https://github.com/shkev03/Facebook", "_blank")
                .focus();
            break;

        case "insta":
        case "instagram":
            processor("opening Instagram on web browser ...");
            window.open("https://instagram.com/shkev03", "_blank").focus();
            break;

        case "gmail":
            processor("opening Gmail on web browser ...");
            window
                .open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=keval.jignesh.shah@gmail",
                    "_blank"
                )
                .focus();
            break;

        case "mail":
        case "email":
            processor("opening default mail client ...");
            window
                .open("mailto:keval.jignesh.shah@gmail.com", "_blank")
                .focus();

            break;

        case "github":
            processor("opening GitHub on web browser ...");
            window.open("https://github.com/shkev03", "_blank").focus();
            break;

        case "x":
        case "x.com":
            processor("opening X.com on web browser ...");
            window.open("https://x.com/shkev03", "_blank").focus();
            break;

        case "cat read.me":
        case "cat /read.me":
        case "cat ./read.me":
            if (directory == "/") {
                processor(
                    "<div class='comment'>opening Readme.md file ...</div>"
                );
                processor(introduction);
            } else {
                processor("File not found: read.md");
            }
            break;

        case "cat ../read.me":
            if (directory == "/projects"){
                processor(introduction)
            } else {
                processor("File not found: read.me")
            }
            break

        default:
            processor(invalid);
            break;
    }
}

function processor(out) {
    output.innerHTML += `<p>${out}</p>`;
}
