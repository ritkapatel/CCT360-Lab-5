// initialize variable to get fish image
let fishimage = document.getElementById("fishimage");

// function to display fish facts and image based on the selected fish
function fishfacts(fish){
    // user chooses clownfish
    if (fish === "clownfish"){
        // https://www.barrierreef.org/the-reef/animals/clownfish
        document.getElementById("fact").innerHTML = 
        "- Clownfish are all born males. Once they become female, they cannot be male again. (Hover over fish to zoom in!)";
        fishimage.src = "css/images/clownfish.webp";
    } 
    // user chooses shark
    else if (fish === "shark"){
        // https://www.fisheries.noaa.gov/feature-story/12-shark-facts-may-surprise-you
        document.getElementById("fact").innerHTML = "Sharks do not have bones. They are a special type of fish known as \"elasmobranchs\", which translates into fish made of cartilaginous tissues—the clear gristly stuff that your ears and nose tip are made of. (Hover over fish to zoom in!)";
        fishimage.src = "css/images/shark.png";
    }
    // user chooses starfish 
    else if (fish === "starfish"){
        // https://www.national-aquarium.co.uk/blog/fun-facts-about-starfish/
        document.getElementById("fact").innerHTML = 
        "Starfish like to eat clams, shells and mussels – and when they capture prey, they have tiny suction cups they use to grab hold of their food. When they eat, their stomachs exit their mouths to digest the food, and re-enters the body when they’ve finished eating! (Hover over fish to zoom in!)"
        fishimage.src = "css/images/star.webp";
    }
}