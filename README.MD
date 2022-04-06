# PPE du site ignoble
## Les correctifs ->

### HTML

* Il n'y as pas de dossiers lors de la création de fichiers, tout est mit à la racine, on remarque aussi qu'il n'y à pas de readme.md ou de gitignore

* D'entrée de jeu les meta sont supprimé 

* L'ajout de div n'est pas justifier, exemple : 
```html
<div class="navbar"> //autant utiliser <nav> directement
```

* Aucune structure dans le body du code, il aurait fallu faire ça
```html
<header></header>
<main></main>
<footer></footer>
```

* Le passage de H2 à H1

* Il y a un NAME dans un input sans rien dedans, aussi le input n'est pas dans un form

* La balise a ne peut pas contenir de balise button



## CSS

* Les couleurs sont répétés, il faudrait plutôt les déclarer et ensuite les réutiliser 
```css
:root{
    --color-font: #FD972D;
    --color-background: #15313C; 
    --color-backBox: #E1D2B3; 
    --color-fontBox: #BFA765;
}
```

* Le reset n'est pas complet 

* L'utilisation des pixels au lieu des rem

* Certaine propriété devrait intégrer un "max" comme par exemple "max-width" pour que l'affichage se fasse de manière dynamique

### JAVASCRIPT

* Il faudra stocker les données de connexion via un local storage et ensuite verifier si les données stocker sont conforme à ce que l'utilisateur à entrée