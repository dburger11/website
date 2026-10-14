// Find the palette selection dropdown and the Apply Palette button
const applyPalette = document.querySelector("#applyPalette");
const paletteChoice = document.querySelector("#paletteChoice");

// APPLY PALETTE
// --------------------------------------------------
// This section only runs on pages that have the
// "Apply Palette" button.
//
// The "if (applyPalette)" prevents an error on other pages 
// where the button doesn't exist.

if (applyPalette) {

    // Wait for the user to click the Apply Palette button
    applyPalette.addEventListener("click", function() {

        // Get the value of the option the user selected
        const chosenPalette = paletteChoice.value;

        // Remove any old palette class, because that would
        // PROBABLY break something if there was more than one
        // applied, and I dont wanna mess with that

        document.body.classList.remove(
            "paletteMoss",
            "paletteSunset",
            "paletteOcean",
            "paletteRetro",
            "paletteClassic",
            "paletteDark"
        );


        // Add the class that matches the users choice
        if (chosenPalette === "moss") {
            document.body.classList.add("paletteMoss");
        }
        else if (chosenPalette === "sunset") {
            document.body.classList.add("paletteSunset");
        }
        else if (chosenPalette === "ocean") {
            document.body.classList.add("paletteOcean");
        }
        else if (chosenPalette === "retro") {
            document.body.classList.add("paletteRetro");
        }
        else if (chosenPalette === "classic") {
            document.body.classList.add("paletteClassic");
        }
        else if (chosenPalette === "dark") {
            document.body.classList.add("paletteDark");
        }


        // save the choice in the browser's localStorage so
        // so it can be persistent across pages, not going
        // back to default when you click thru the nav

        localStorage.setItem("palette", chosenPalette);

    });
}



// RESTORE SAVED PALETTE !! VERY IMPORTANT !!
// -----------------------------------------------
// checks localStorage to see if the user already 
// selected a palette when they open new page,
// makes it persistant across pages.
// ------------------------------------------------

// NOTE: this line was copied directly from ChatGPT
const savedPalette = localStorage.getItem("palette");


// if a saved palette exists, apply its class to the 
// body of the current page

if (savedPalette === "moss") {
    document.body.classList.add("paletteMoss");
}
else if (savedPalette === "sunset") {
    document.body.classList.add("paletteSunset");
}
else if (savedPalette === "ocean") {
    document.body.classList.add("paletteOcean");
}
else if (savedPalette === "retro") {
    document.body.classList.add("paletteRetro");
}
else if (savedPalette === "classic") {
    document.body.classList.add("paletteClassic");
}
else if (savedPalette === "dark") {
    document.body.classList.add("paletteDark");
}



// BELOW IS THE FIRST ATTEMPT AT THE COLOR CHANGING FEATURE, 
// BUT I STARTED OVER WITH HELP FROM W3 SCHOOLS AND A BIT OF
// DEBUGGING VIA CHATGPT, AND GOT IT TO WORK BETTER THE NEW WAY.
// THE OLD WAY ONLY PRESERVED FOR PROSPERITY AND TO LOOK AT LATER
// WHEN I UNDERSTAND JS ENOUGH TO LAUGH AT MY OLD MISTAKES

// applyPalette = document.querySelector("#applyPalette")
// applyPalette.addEventListener("click", function(){
//     paletteChoice = document.querySelector("#paletteChoice")
//     console.log(paletteChoice.value)
// })


// const palette = document.querySelectorAll("body")
// for (const each of palette){
//     if (paletteChoice === "moss"){
    
//         document.body.classList.add("paletteMoss")
//     }
//     else if (paletteChoice === "sunset"){
//         document.body.classList.add("paletteSunset")
//     }
//     else if (paletteChoice === "ocean"){
//         document.body.classList.add("paletteOcean")
//     }
//     else if (paletteChoice === "retro"){
//         document.body.classList.add("paletteRetro")
//     }
//     else if (paletteChoice === "classic"){
//         document.body.classList.add("paletteClassic")
//     }

// }