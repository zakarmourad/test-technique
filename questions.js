// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Comment puis-je ajouter un écouteur d'événement à un élément du DOM?",
    answer: "element.addEventListener('event', function)",
    options: [
      "element.onEvent = function",
      "element.event = function",
      "element.addEventListener('event', function)",
      "element.attachEvent('event', function)"
    ]
  },
    {
    numb: 2,
    question: "Quelle est la syntaxe correcte pour sélectionner tous les éléments HTML qui ont la classe: myClass?",
    answer: "document.getElementsByClassName('myClass')",
    options: [
      "document.getElementsByTagName('.myClass')",
      "document.querySelectorAll('.myClass')",
      "document.getElementsByClassName('myClass')",
      "document.querySelector('.myClass')"
    ]
  },
    {
    numb: 3,
    question: "Quelle est la syntaxe correcte pour ajouter un élément à la fin d'un tableau en JavaScript?",
    answer: "array.push(item)",
    options: [
      "array.add(item)",
      "array.append(item)",
      "array.push(item)",
      "array.addEnd(item)"
    ]
  },
    {
    numb: 4,
    question: "Quelle est la commande SQL qui permet de supprimer une table nommée : old_table?",
    answer: "DROP TABLE old_table;",
    options: [
      "DELETE TABLE old_table;",
      "DROP TABLE old_table;",
      "TRUNCATE TABLE old_table;",
      "REMOVE TABLE old_table;"
    ]
  },
    {
    numb: 5,
    question: "Quelle commande SQL permet de trier les résultats d'une requête en ordre décroissant?",
    answer: "ORDER BY DESC;",
    options: [
      "ORDER BY DESC;",
      "SORT BY DESC;",
      "SORT DESCENDING;",
      "ORDER DESCENDING;"
    ]
  },
  {
    numb: 6,
    question: "Quelle est la commande SQL pour mettre à jour l'enregistrement avec l'ID 1 dans la table 'Customers'?",
    answer: "UPDATE Customers SET Name = 'John Smith' WHERE ID = 1",
    options: [
      "CHANGE Customers SET Name = 'John Smith' WHERE ID = 1",
      "MODIFY Customers SET Name = 'John Smith' WHERE ID = 1",
      "EDIT Customers SET Name = 'John Smith' WHERE ID = 1",
      "UPDATE Customers SET Name = 'John Smith' WHERE ID = 1"
    ]
  },
  {
    numb: 7,
    question: "Quelle est la complexité en temps de l'algorithme de tri rapide (QuickSort) ?",
    answer: "O(n log n)",
    options: [
      "O(n log n)",
      "O(n^2)",
      "O(n)",
      "O(1)"
    ]
  },
  {
    numb: 8,
    question: "Quelle est la structure de données en C++ qui permet de stocker une collection d'objets de différents types ?",
    answer: "Liste",
    options: [
      "Tableau",
      "Liste",
      "Pile",
      "File"
    ]
  },
  {
    numb: 9,
    question: "Quelle est la structure de données en C++ qui permet de stocker une collection d'objets de même type, dans un ordre précis, et qui permet l'accès rapide à n'importe quel élément par son index ?",
    answer: "Tableau",
    options: [
      "Liste",
      "Tableau",
      "File",
      "Pile"
    ]
  },
  {
    numb: 10,
    question: "Quel algorithme utiliseriez-vous pour trouver le nombre minimal de couleurs nécessaires pour colorier un graphe, de sorte qu'aucun sommet adjacent ne soit de la même couleur ?",
    answer: "Algorithme de Welsh-Powell",
    options: [
      "Tri par insertion",
      "Algorithme de Dijkstra",
      "Algorithme de Tri sort",
      "Algorithme de Welsh-Powell"
    ]
  }
];