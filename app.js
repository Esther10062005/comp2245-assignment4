fetch("superheroes.php")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
    })
    .then(data => {
        alert("Superheroes:\n" + data);
    })
    .catch(error => {
        console.error("Fetch error:", error);
        alert("Failed to fetch superheroes data. Please try again later.");
    });
