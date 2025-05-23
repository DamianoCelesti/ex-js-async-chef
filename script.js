/*In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
Recuperare la ricetta da https://dummyjson.com/recipes/{id}
Estrarre la proprietà userId dalla ricetta
Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
Restituire la data di nascita dello chef
Note del docente
Scrivi la funzione getChefBirthday(id), che deve:
Essere asincrona (async).
Utilizzare await per chiamare le API.
Restituire una Promise con la data di nascita dello chef.
Gestire gli errori con try/catch*/



async function getChefBirthday(id) {
    try {
        const ricettaResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
        //console.log("ricetta:", ricettaResponse); 

        const recipeData = await ricettaResponse.json();
        //console.log("dati ricetta:", recipeData); 

        const userId = recipeData.userId;
        //console.log("userId", userId); 

        const userResponse = await fetch(`https://dummyjson.com/users/${userId}`);
        //console.log("utente:", userResponse); 

        const userData = await userResponse.json();
        //console.log("dati utente:", userData); 

        return userData.birthDate;
    } catch (error) {
        console.error("errore getChefBirthday:", error.message);
        throw error;
    }
}

getChefBirthday(1)
    .then(birthDate => console.log("data di nascita", birthDate))
    .catch(error => console.error("errore:", error.message));