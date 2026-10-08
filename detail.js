const places = [

    {
        name: "Hunza Valley",
        location: "Gilgit-Baltistan",
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1600&q=90",
        description: "Hunza Valley is one of the most beautiful destinations in northern Pakistan. Surrounded by high mountains, peaceful villages and spectacular scenery, it is an ideal place for nature lovers, photographers and adventure seekers."
    },

    {
        name: "Skardu",
        location: "Gilgit-Baltistan",
        image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=1600&q=90",
        description: "Skardu is famous for its dramatic mountains, beautiful lakes and peaceful landscapes. It is a gateway to some of the highest mountains and most spectacular trekking routes in Pakistan."
    },

    {
        name: "Islamabad",
        location: "Capital Territory",
        image: "https://images.unsplash.com/photo-1623261216813-fbbe4fb7df44?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Islamabad is the capital city of Pakistan. It is known for its greenery, clean environment, Margalla Hills and famous landmarks such as Faisal Mosque."
    },

    {
        name: "Lahore",
        location: "Punjab",
        image: "https://images.unsplash.com/photo-1697358621767-574dc40fdf93?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Lahore is a historic and cultural centre of Pakistan. Visitors can enjoy Mughal architecture, traditional food, historic buildings and a vibrant cultural atmosphere."
    },

    {
        name: "Naran Kaghan",
        location: "Khyber Pakhtunkhwa",
        image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1600&q=90",
        description: "Naran Kaghan is famous for its beautiful mountains, rivers, lakes and green valleys. It is a popular destination for families and nature lovers."
    },

    {
        name: "Swat Valley",
        location: "Khyber Pakhtunkhwa",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=90",
        description: "Swat Valley is known for its green mountains, rivers and beautiful natural scenery. It offers peaceful views and exciting opportunities for exploring nature."
    }

];


const params =
    new URLSearchParams(window.location.search);


const id =
    Number(params.get("id")) || 0;


const place =
    places[id] || places[0];


document.getElementById("detailName").textContent =
    place.name;


document.getElementById("detailLocation").textContent =
    place.location;


document.getElementById("detailDescription").textContent =
    place.description;


const image =
    document.getElementById("detailImage");


image.src = place.image;


image.alt = place.name;


/* VISA BUTTON */

document
    .getElementById("visaBtn")
    .addEventListener("click", function () {

        alert(
            "e-Visa application information will be available here."
        );

    });