let items = [
  {
    id: 1,
    featured: false,
    name: "Laptop Pro 15",
    price: 1499.99,
    category: "Laptop",
    src: "../../../public/prodotti/01-laptop-pro-15.svg",
    description:
      "Laptop professionale da 15 pollici progettato per offrire prestazioni elevate sia durante le attività quotidiane sia nei progetti più impegnativi. Il design sottile e moderno lo rende facile da trasportare, mentre l'ampio display garantisce spazio e comfort per lavorare con documenti, fogli di calcolo, foto e contenuti multimediali. È la scelta ideale per professionisti, studenti e creativi che cercano velocità, affidabilità e autonomia in un unico dispositivo.",
  },
  {
    id: 2,
    featured: true,
    name: "Mouse Wireless Pro",
    price: 29.99,
    category: "Gaming",
    src: "../../../public/prodotti/02-mouse-wireless-pro.svg",
    description:
      "Mouse wireless ergonomico pensato per offrire precisione, comfort e libertà di movimento senza l'ingombro dei cavi. Il sensore ad alta sensibilità permette movimenti fluidi e accurati, utili sia nelle partite più veloci sia nelle attività di lavoro quotidiane. Grazie alla forma confortevole e alla batteria a lunga durata, è perfetto per chi usa il computer per molte ore consecutive.",
  },
  {
    id: 3,
    featured: false,
    name: "Tastiera Meccanica RGB",
    price: 89.99,
    category: "Gaming",
    src: "../../../public/prodotti/03-tastiera-meccanica-rgb.svg",
    description:
      "Tastiera meccanica con retroilluminazione RGB personalizzabile, costruita per garantire una risposta rapida e precisa a ogni pressione dei tasti. Gli switch meccanici offrono una digitazione piacevole e affidabile, ideale sia per il gaming competitivo sia per chi scrive e lavora al PC ogni giorno. La struttura resistente e gli effetti luminosi regolabili aggiungono stile e funzionalità alla tua postazione.",
  },
  {
    id: 4,
    featured: true,
    name: "Sedia Gaming Pro",
    price: 199.99,
    category: "Gaming",
    src: "../../../public/prodotti/04-sedia-gaming-pro.svg",
    description:
      "Sedia gaming ergonomica pensata per sostenere correttamente la schiena durante lunghe sessioni di gioco, studio o lavoro. Include supporto lombare, poggiatesta, braccioli imbottiti e schienale reclinabile per adattarsi alle tue preferenze. Il rivestimento resistente e il design sportivo la rendono una soluzione confortevole e d'impatto per completare qualsiasi setup da gaming.",
  },
  {
    id: 5,
    featured: false,
    name: "Scrivania Smart",
    price: 249.99,
    category: "Smart Home",
    src: "../../../public/prodotti/05-scrivania-smart.svg",
    description:
      "Scrivania smart dal design moderno, ideale per organizzare una postazione di lavoro funzionale, ordinata e tecnologica. Il sistema di regolazione dell'altezza consente di alternare facilmente la posizione seduta e quella in piedi, migliorando il comfort durante la giornata. La superficie ampia e le porte integrate permettono di gestire laptop, monitor, accessori e dispositivi di ricarica con praticità.",
  },
  {
    id: 6,
    featured: true,
    name: 'Monitor Gaming 27"',
    price: 229.99,
    category: "Gaming",
    src: "../../../public/prodotti/06-monitor-gaming-27.svg",
    description:
      "Monitor gaming da 27 pollici progettato per offrire immagini nitide, movimenti fluidi e un'esperienza coinvolgente in ogni partita. L'ampia diagonale dello schermo valorizza giochi, film e contenuti creativi, mentre l'elevata reattività aiuta a seguire le azioni più rapide senza distrazioni. È ideale per chi desidera rendere il proprio setup più immersivo e performante.",
  },
  {
    id: 7,
    featured: false,
    name: "Hub USB-C Pro",
    price: 49.99,
    category: "Laptop",
    src: "../../../public/prodotti/07-hub-usb-c-pro.svg",
    description:
      "Hub USB-C multifunzione pensato per ampliare rapidamente le connessioni disponibili sul tuo laptop o tablet compatibile. Consente di collegare accessori, monitor esterni, periferiche USB e schede di memoria senza rinunciare a un design compatto e facile da trasportare. Una soluzione pratica per lavorare da casa, in ufficio o in mobilità con una sola porta USB-C.",
  },
  {
    id: 8,
    featured: true,
    name: "Smartphone X",
    price: 999.99,
    category: "Smartphone",
    src: "../../../public/prodotti/08-smartphone-x.svg",
    description:
      "Smartphone di ultima generazione pensato per chi desidera prestazioni veloci, immagini di qualità e un'esperienza d'uso fluida in ogni situazione. Il display ampio e brillante rende piacevole navigare, guardare video e giocare, mentre il comparto fotografico è ideale per catturare foto e video dei momenti importanti. Un dispositivo elegante, potente e completo per la vita connessa di tutti i giorni.",
  },
  {
    id: 9,
    featured: false,
    name: "Cuffie Wireless Pro",
    price: 149.99,
    category: "Audio",
    src: "../../../public/prodotti/09-cuffie-wireless-pro.svg",
    description:
      "Cuffie wireless progettate per offrire un suono ricco, dettagliato e coinvolgente durante l'ascolto di musica, podcast, film e chiamate. La tecnologia di cancellazione del rumore aiuta a isolarti dalle distrazioni esterne, mentre i padiglioni confortevoli sono adatti anche a un utilizzo prolungato. Perfette per il viaggio, il lavoro da remoto e il relax quotidiano.",
  },
  {
    id: 10,
    featured: false,
    name: "Action Camera 4K",
    price: 299.99,
    category: "Smartphone",
    src: "../../../public/prodotti/10-action-camera-4k.svg",
    description:
      "Action camera compatta e resistente, capace di registrare video in 4K per raccontare sport, viaggi, escursioni e avventure con grande dettaglio. Il formato leggero permette di portarla sempre con sé e di fissarla facilmente a casco, bici o altri supporti compatibili. È una soluzione ideale per chi vuole catturare i momenti più dinamici senza rinunciare alla qualità dell'immagine.",
  },
  {
    id: 11,
    featured: false,
    name: "Macchina da Caffè Smart",
    price: 79.99,
    category: "Smart Home",
    src: "../../../public/prodotti/11-macchina-da-caffe-smart.svg",
    description:
      "Macchina da caffè smart pensata per rendere la preparazione della tua bevanda preferita più semplice, veloce e personalizzabile. Grazie alle funzioni intelligenti puoi gestire le impostazioni in modo pratico e ottenere un caffè adatto ai tuoi gusti ogni giorno. Il design compatto la rende perfetta per la cucina di casa, l'ufficio o piccoli spazi moderni.",
  },
  {
    id: 12,
    featured: false,
    name: "Friggitrice ad Aria Smart",
    price: 129.99,
    category: "Smart Home",
    src: "../../../public/prodotti/12-friggitrice-ad-aria-smart.svg",
    description:
      "Friggitrice ad aria smart progettata per preparare piatti croccanti e gustosi utilizzando poco olio rispetto alla frittura tradizionale. I programmi automatici aiutano a cuocere diversi alimenti in modo semplice e uniforme, dalle patatine alle verdure fino a carne e dolci. È l'alleata ideale per chi cerca una cucina pratica, veloce e più leggera senza rinunciare al sapore.",
  },
  {
    id: 13,
    featured: false,
    name: "Smartwatch Z",
    price: 199.99,
    category: "Smartphone",
    src: "../../../public/prodotti/13-smartwatch-z.svg",
    description:
      "Smartwatch elegante e versatile che ti permette di tenere sotto controllo attività quotidiane, allenamenti, notifiche e principali dati sul benessere direttamente dal polso. Il design moderno si adatta sia allo sport sia all'uso di tutti i giorni, mentre le funzioni smart aiutano a restare connessi senza dover prendere continuamente lo smartphone. Un accessorio pratico per uno stile di vita attivo e organizzato.",
  },
  {
    id: 14,
    featured: false,
    name: "Speaker Bluetooth Pro",
    price: 59.99,
    category: "Audio",
    src: "../../../public/prodotti/14-speaker-bluetooth-pro.svg",
    description:
      "Speaker Bluetooth portatile con suono potente e bilanciato, pensato per accompagnare musica, podcast e feste ovunque ti trovi. La batteria di lunga durata consente di ascoltare i tuoi contenuti preferiti per molte ore, mentre il corpo compatto lo rende semplice da portare in borsa o nello zaino. Ideale per casa, terrazzo, spiaggia, viaggio e attività all'aperto.",
  },
  {
    id: 15,
    featured: false,
    name: "Mouse Pad Ergonomico",
    price: 19.99,
    category: "Gaming",
    src: "../../../public/prodotti/15-mouse-pad-ergonomico.svg",
    description:
      "Mouse pad ergonomico con supporto imbottito per il polso, progettato per migliorare il comfort durante le lunghe sessioni al computer. La superficie liscia favorisce movimenti precisi e controllati del mouse, mentre la base antiscivolo mantiene il tappetino stabile sulla scrivania. È adatto sia al gaming sia al lavoro d'ufficio, allo studio e all'uso domestico.",
  },
  {
    id: 16,
    featured: false,
    name: "Webcam HD Pro",
    price: 89.99,
    category: "Laptop",
    src: "../../../public/prodotti/16-webcam-hd-pro.svg",
    description:
      "Webcam HD pensata per migliorare la qualità delle videochiamate, delle riunioni online e delle dirette streaming. La ripresa nitida, la messa a fuoco automatica e la correzione dell'illuminazione aiutano a ottenere un'immagine chiara anche in ambienti non perfettamente illuminati. Facile da fissare al monitor o al laptop, è un accessorio essenziale per smart working, lezioni e contenuti digitali.",
  },
  {
    id: 17,
    featured: false,
    name: "Zaino Tech 25L",
    price: 49.99,
    category: "Laptop",
    src: "../../../public/prodotti/17-zaino-tech-25l.svg",
    description:
      "Zaino tech da 25 litri progettato per trasportare laptop, accessori elettronici e oggetti personali in modo ordinato e sicuro. Lo scomparto imbottito protegge il computer durante gli spostamenti, mentre tasche e divisori interni aiutano a tenere tutto a portata di mano. Il tessuto resistente e il design funzionale lo rendono ideale per pendolari, studenti, professionisti e viaggiatori.",
  },
  {
    id: 18,
    featured: false,
    name: "Lampadina Smart RGB",
    price: 24.99,
    category: "Smart Home",
    src: "../../../public/prodotti/18-lampadina-smart-rgb.svg",
    description:
      "Lampadina smart RGB che ti consente di personalizzare l'illuminazione degli ambienti scegliendo tra milioni di colori e diverse tonalità di bianco. Puoi creare atmosfere rilassanti, energiche o decorative in base al momento della giornata e controllare la luce comodamente tramite app o assistente vocale compatibile. Una soluzione semplice per rendere la casa più moderna, accogliente e connessa.",
  },
  {
    id: 19,
    featured: false,
    name: "Fitness Tracker Pro",
    price: 79.99,
    category: "Smartphone",
    src: "../../../public/prodotti/19-fitness-tracker-pro.svg",
    description:
      "Fitness tracker leggero e confortevole, creato per monitorare l'attività fisica e aiutarti a seguire con maggiore consapevolezza le tue abitudini quotidiane. Tiene traccia di passi, allenamenti, frequenza cardiaca e qualità del sonno, offrendo informazioni utili per raggiungere i tuoi obiettivi di benessere. È perfetto per chi vuole iniziare a muoversi di più o desidera migliorare la propria routine sportiva.",
  },
  {
    id: 20,
    featured: false,
    name: "Caricatore Wireless",
    price: 39.99,
    category: "Smartphone",
    src: "../../../public/prodotti/20-caricatore-wireless.svg",
    description:
      "Caricatore wireless compatto e pratico, progettato per ricaricare smartphone compatibili senza collegare ogni volta il cavo al dispositivo. Basta appoggiare il telefono sulla base per iniziare la ricarica e mantenere la scrivania, il comodino o la postazione di lavoro più ordinati. È un accessorio utile per chi cerca una soluzione comoda, moderna e sempre pronta all'uso.",
  },
];

module.exports = items;
