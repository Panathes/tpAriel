var storyMain = [
  {
    animation: {
      img: false,
      css: 'storyBackAnim'
    },
    text: [
      {
        text: '*...*',
        who: 'ia'
      },
      {
        text: '*!*',
        who: 'ia'
      },
      {
        text: '*Chargement des données *',
        who: 'ia'
      },
      {
        text: '*-SAI-1 an 2940 Dans un univers ou la technique avait permis de nombreuses prouesses techniques, le terraformage ou la modification d\'une planète pour la rendre habitable restait un enjeu de taille. *',
        who: 'ia'
      },
      {
        text: '*Contacter par une société anonyme qui leur proposait de les payer gracieusement en échange de coordonnées de planètes potentielles.*',
        who: 'ia'
      },
      {
        text: '*Nous suivons l\'équipage du pilote Tom Shepard, accompagné du biologiste James Thatch, ainsi que d\'un ingénieur mécanique répondant au nom de Vincent Sinclar .*',
        who: 'ia'
      },
      {
        text: 'Planète en vu !',
        who: 'Tom'
      },
      {
        text: 'Esperont que cette fois-ci cette planète est exploitable, j\'en ai marre de vos plans foireux, on ne sait même pas qui nous paye ! ',
        who: 'Vincent'
      },
      {
        text: 'Oh ça va ! Sale fragile, du moment que l\'on touche des flouz, pas besoin de se préoccuper du reste.',
        who: 'Vincent'
      },
      {
        text: 'Eh beh',
        who: 'James'
      },
      {
        text: 'En tout cas une chose est sur, c\'est un plaisir ce voyager avec vous les gars....',
        who: 'James'
      },
      {
        text: 'Ia ! Tu peux nous dire les régions sur lesquels l\'on peut se poser ?',
        who: 'James'
      },
      {
        text: 'Bien entendu !',
        who: 'ia'
      },
      {
        text: 'Voici les différentes régions possibles:',
        who: 'ia'
      }
    ],
    question: 'Vers quelle région se diriger ?',
    answers: [
      {
        content: 'Un signal de détresse',
        target: [0, 1]
      },
      {
        content: 'Des cratères',
        target: [1, 0]
      },
      {
        content: 'Une île verdoyante',
        target: [2, 0]
      }
    ]
  },
  {
    animation: {
      img: './src/img/shutter.jpg',
      css: 'storyShutter'
    },
    text: [
      {
        text: 'Préparation à la rentrée dans l\'atmosphère, fermeture des volets de protection.',
        who: 'ia'
      },
      {
        text: 'Vincent Tom, on détecte un signal de détresse dans cette région',
        who: 'ia'
      },
      {
        text: 'On y va !',
        who: 'Tom'
      },
      {
        text: 'Attends attend, tu vas quand même pas te diriger vers ce signal de détresse alors que l\'on ne sait rien de cette planète ?!',
        who: 'James'
      },
      {
        text: 'Mais ça risque rien',
        who: 'Tom'
      },
      {
        text: 'ON NOUS TIRE DESSUS !',
        who: 'Vincent'
      },
      {
        text: '...',
        who: 'Vincent'
      },
      {
        text: 'BEST IDEA EVER ! On est touché !',
        who: 'Vincent'
      },
      {
        text: 'Accrochez-vous, on va s\'écraser !',
        who: 'Tom'
      },
      {
        text: 'Aaaahh',
        who: 'ia'
      },
      {
        text: '...',
        who: 'ia'
      },
      {
        text: 'Tout le monde va bien?',
        who: 'ia'
      },
      {
        text: 'Oui, grâce à mes talents de pilotage. Ouvrons les volets pour voir ce qu\'il ce passe',
        who: 'Tom'
      },
      {
        text: 'TOI, TAIS TOI ! C\'est trop dangereux',
        who: 'Vincent'
      }
    ],
    question: 'Que faire?',
    answers: [
      {
        content: 'Ouvrir les volets',
        target: [0, 2]
      },
      {
        content: 'Rester enfermé',
        target: [0, 3]
      }
    ]
  },
  {
    animation: {
      img: './src/img/militarybase.jpg',
      css: false
    },
    text: [
      {
        text: 'Avec Tom on va voir l\'entendu des dégâts',
        who: 'James'
      },
      {
        text: 'Restez sur vos gardes, il y a des traces d\'affrontements récents',
        who: 'Tom'
      },
      {
        text: 'On s\'est pas loupé sur ce coup-là... L\'arrière du vaisseau est foutu !',
        who: 'James'
      },
      {
        text: 'Bon les gars... le moteur à réaction est foutu, a moins se trouve de quoi le répare dans les environs on est coincé ici.',
        who: 'Vincent'
      },
      {
        text: 'QUOI ?!',
        who: 'Tom'
      },
      {
        text: '*Fin des enregistrement*',
        who: 'ia'
      }
    ],
    question: '',
    answers: []
  },
  {
    animation: {
      img: './src/img/militarybase.jpg',
      css: false
    },
    text: [
      {
        text: 'Ne soyez pas stupide, on doit voir ce qu\'il se passe dehors',
        who: 'Tom'
      },
      {
        text: 'Avec Tom on va voir l\'entendu des dégâts',
        who: 'James'
      },
      {
        text: 'Restez sur vos gardes, il y a des traces d\'affrontements récents',
        who: 'Tom'
      },
      {
        text: 'On s\'est pas loupé sur ce coup-là... L\'arrière du vaisseau est foutu !',
        who: 'James'
      },
      {
        text: 'Bon les gars... le moteur à réaction est foutu, a moins se trouve de quoi le répare dans les environs on est coincé ici.',
        who: 'Vincent'
      },
      {
        text: 'QUOI ?!',
        who: 'Tom'
      },
      {
        text: '*Fin des enregistrement*',
        who: 'ia'
      }
    ],
    question: '',
    answers: []
  }
]

var storySecond = [
  {
    animation: {
      img: './src/img/shutter.jpg',
      css: 'storyShutter'
    },
    text: [
      {
        text: 'Préparation à la rentrée dans l\'atmosphère, fermeture des volets de protection.',
        who: 'ia'
      },
      {
        text: 'Il y a une zone avec plusieurs cratères, je propose que nous allions voir.',
        who: 'ia'
      },
      {
        text: 'Préparez-vous pour l\'atterrissage !',
        who: 'Tom'
      }
    ],
    question: 'Quel est le meilleur endroit pour atterrir ?',
    answers: [{
      content: 'Au centre du plus gros des cratères',
      target: [1, 1]
    },
    {
      content: 'Ou un peu plus éloigné',
      target: [1, 1]
    }]
  },
  {
    animation: {
      img: './src/img/crater.jpg',
      css: false
    },
    text: [
      {
        text: 'Je sors du vaisseau pour faire des analyses',
        who: 'James'
      },
      {
        text: 'bon, j\'ai fini les prélèvements aux alentours du vaisseau, on attend le retour de TOM et on avisera pour la visite des autres régions.',
        who: 'James'
      },
      {
        text: 'hé les gars, regardez ce que j\'ai trouvé en visitant les environs',
        who: 'Tom'
      },
      {
        text: 'On dirais un journal de bord, on en saura plus sur les habitants',
        who: 'James'
      },
      {
        text: 'ia, lis-nous le journal s\'il te plaît',
        who: 'James'
      },
      {
        text: 'Affirmatif',
        who: 'ia'
      },
      {
        text: '*La terre est désertée depuis longtemps. Des successions d’invasions extra-terrestres et la menace d\'un virus situé sur une ile fermer au public, loin d\'ici l’ont vidée de ses habitants humains. Les survivants se sont réfugiés sur d’autres planètes*',
        who: 'ia'
      },
      {
        text: '*Je voulais également quitter cette planète, mais hélas mon état déplorable ne me le permet pas.*',
        who: 'ia'
      },
      {
        text: '*J\'espère qu\'un jour ma chère et tendre terre natale pourra prospérer de nouveau*',
        who: 'ia'
      },
      {
        text: '*Fin de lecture*',
        who: 'ia'
      },
      {
        text: '...',
        who: 'Tom'
      },
      {
        text: 'les pauvres, entre les invasions et ce virus, ils n\'avaient aucune chance',
        who: 'Vincent'
      },
      {
        text: 'Je viens de vérifier les prélèvements, aucune trace de virus, mais dans le doute il vaut mieux que l\'on parte de cette planète au plus vite !',
        who: 'James'
      },
      {
        text: 'Pendant que l\'on quitte la planète, on peut toujours faire un rapport auprès de la société qui nous embauche pour leur faire part des différentes menaces possibles.',
        who: 'James'
      },
      {
        text: 'Je n\'aurai pas mieux dit ! Bon on déguerpit vite !',
        who: 'Tom'
      },
      {
        text: '*Fin des enregistrement*',
        who: 'ia'
      }
    ],
    question: '',
    answers: []
  }
]
