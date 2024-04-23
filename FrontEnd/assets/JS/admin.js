document.addEventListener("DOMContentLoaded", function() {
 
if(localStorage.getItem("token") !== null && localStorage.getItem("userId") !== null) {  // Vérification du token et et de l'ID de l'admin pour pouvoir se log sur la page administrateur //
    
    document.getElementById("allFilters").style.display = "none"; // Cacher les boutons filtre //
    document.getElementById("textLogin").style.display = "none"; // On enlève le texte login //
    document.getElementById("textLogout").style.display = "block"; // Affichage du texte logout //
    document.getElementById("logoNav").style.display = "block"; // Descente du logo //
    document.getElementById("loginNav").style.display = "block"; // Descente des liens hypertextes //
    document.getElementById("editionMode").style.display = "block"; // Affichage de la barre noire avec icone et texte //
    document.getElementById("modifBtn").style.display = "block"; // Affichage bouton "Modifier" du portfolio //

    document.getElementById("textLogout").addEventListener('click', function(e) {  // Sortie du localStorage quand clic sur Logout //
        e.preventDefault();
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
        window.location.reload();
    }); 

    // Ouverture de la modale par le bouton "modifier" //

    document.getElementById("updateWorks").addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        document.getElementById("modal").style.display = "block";
        document.getElementById("modalWorks").style.display = "block";
        document.getElementById("modalEdit").style.display = "none"; 
    });

    // Fermeture de la première fenêtre de la modale //

    document.getElementById("btnCloseFirstWindow").addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        document.getElementById("modal").style.display = "none";
        document.getElementById("modalWorks").style.display = "none";
    });

    // Fermeture de la deuxième fenêtre de la modale //

    document.getElementById("btnCloseSecondWindow").addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        document.getElementById("modal").style.display = "none";
        document.getElementById("modalEdit").style.display = "none";

        resetModal(); // Reset de la fenêtre du formulaire d'ajout de projet, déclarée plus bas //
    });

    // Retour vers la première fenêtre de la modale avec la flèche //

    document.getElementById("arrowReturn").addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        document.getElementById("modalEdit").style.display = "none";
        document.getElementById("modalWorks").style.display = "block";

        resetModal();   
    });

    // Ouverture deuxième fenêtre via le bouton "Ajouter une photo" de la première fenêtre //

    document.getElementById("addPixModal").addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        document.getElementById("modalWorks").style.display = "none";
        document.getElementById("modalEdit").style.display = "block";
    });

    // Maintien de la modale si on clique dessus //

    document.querySelectorAll('#modalWorks').forEach(modalWorks => {
        modalWorks.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });

    document.querySelectorAll('#modalEdit').forEach(modalEdit => {
        modalEdit.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });
    
    // Fermeture de la modale si on clique autour //

    document.getElementById('modal').addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        document.getElementById('modal').style.display = "none";
        document.getElementById('modalWorks').style.display = "none";
        document.getElementById('modalEdit').style.display = "none";

        resetModal();
    })

    function resetModal() {
        document.getElementById("modalEditWorkForm").reset(); // Reset de la fenêtre d'ajout de projet //
        document.getElementById("addIconPhoto").style.display = "block";
        document.getElementById("newImage").style.display = "block";
        document.getElementById("maxSize").style.display = "block";
        document.getElementById("previewFormImage").remove();
        document.getElementById("editNewPhoto").style.padding = "30px 0 20px 0";
    }

}
});