/* Descrizione:
Iniziamo a lavorare alla nostra replica della nota app di messaggistica. L'esercitazione sará divisa in piú giornate, oggi iniziamo a lavorare alla prima milestone che vi riporto di seguito:

Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall'utente (verdi) e dall'interlocutore (bianco) assegnando due classi CSS diverse

Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto */

const { createApp } = Vue

createApp({
    data() {
        return {

            activeContact: 0,

            inputMessage: "",

            searchInput: "",

            allFalseCheck: false,

            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }

            ],

            //NON UTILIZZATE, RESTANO COME REFERENCE PER RIPASSO METODI ARRAY
            /*
            sentDate: [],
            
            lastOnline: "", 
            */

        }
    },

    methods: {

        getAvatar(activeContact) {
            return this.contacts[activeContact].avatar;
        },

        getName(activeContact) {
            return this.contacts[activeContact].name;
        },

        sendMessage() {

            //AL CLICK DEL BOTTONE CONTROLLO SE L'IMPUT NON E' UNA STRINGA VUOTA
            if (this.inputMessage != "") {

                const todayDate = new Date();

                //TRASCRIVE LA DATA IN FORMATO EU
                let EuroDate = todayDate.getDate() + '/' + (todayDate.getMonth() + 1) + '/' + todayDate.getFullYear() + " " + todayDate.getHours() + ":" + todayDate.getMinutes() + ":" + todayDate.getSeconds();

                let newMessage = {
                    date: EuroDate,
                    message: this.inputMessage,
                    status: 'sent',
                };

                this.contacts[this.activeContact].messages.push(newMessage);

                //SVUOTO LA NEW TASK, SVUOTANDO L'IMPUT
                this.inputMessage = "";

                // CREO UN MESSAGGIO AUTOMATICO DA INVIARE DOPO UN SECONDO
                autoMessage = setTimeout(() => {

                    let newSentMsg = {
                        date: EuroDate,
                        message: "ok",
                        status: 'received',
                    };

                    this.contacts[this.activeContact].messages.push(newSentMsg);

                }, 1000);

            }

        },

        removeMessage(index) {

            //RIMUOVE 1 ELEMENTO NELL'ARRAY MESSAGE ALLA POS. index)
            this.contacts[this.activeContact].messages.splice(index, 1);

        },

        searchContact() {

            //PER OGNI "contact" DENTRO CONTACTS ESEGUE UNA FUNZIONE (IN QUESTO CASO UNA FUNZIONE ANONIMA CON PARAMETRO "contact")
            this.contacts.forEach((contact) => {

                //ASSEGNA A searchValue IL VALORE DI searchInput IN MINUSCOLO PER EVITARE ERRORI DI RICERCA
                const searchValue = this.searchInput.toLowerCase();

                // SE searchValue E' VUOTO
                if (searchValue == "") {

                    // A OGNI CONTATTO CICLATO DAL foreach VIENE ASSEGNATO LO STATO true SU visible
                    contact.visible = true;

                    //ALTRIMENTI SE IL contact.name NON CONTIENE searchValue
                } else if (!contact.name.toLowerCase().includes(searchValue)) {

                    // LO STATO DI visible CAMBIA IN false
                    contact.visible = false;

                } else {
                    contact.visible = true;
                };

                //EVERY EVESUE UNA FUNZIONE CHE DEVE RITORNARE UN VALORE BOOLEANO PER OGNI ELEMENTO DI UN ARRAY E RITORNA VERO O FALSO SE TUTTI SODDISFANO LA CONDIZIONE.
                //PER OGNI contact IN contacts CONTROLLA SE contact.visible E' false
                //SE TUTTI i contact.visible SONO false, allFalseCheck PRENDE IL VALORE DI true (E' VERO CHE TUTTI I contact.visible SONO FALSE)
                //QUANDO allFalseCHeck E' true, IL MESSAGGIO VIENE RENDERIZZATO
                this.allFalseCheck = this.contacts.every(contact => contact.visible == false);

            });

            //CON CLASSICO CICLO FOR
            /* 
                        for (let i = 0; i < this.contacts.length; i++) {
            
                            const searchValue = this.searchInput.toLowerCase();
            
                            if (searchValue == "") {
            
                                // SE SEARCHVALUE E' VUOTO TUTTI I CONTATTI DIVENTANO VISIBILI
                                this.contacts[i].visible = true;
            
                            } else if (!this.contacts[i].name.toLowerCase().includes(searchValue)) {
            
                                // IL NOME CHE NON CONTIENE LE LETTERE INSERITE VIENE RESO NON VISIBILE
                                this.contacts[i].visible = false;
            
                                //CONSOLE LOG DEI CONTATTI NASCOSTI
                                console.log(this.contacts[i].name, this.contacts[i].visible);
                            }
            
                        } */

        },

        //NON UTILIZZATO, RESTA COME REFERENCE PER RIPASSO
        checkSentMsg(index) {

            let activeMsgs = this.contacts[index].messages;

            activeMsgs.filter((message) => {
                if (message.status == "sent") {
                    this.sentDate.push(message.date);


                    //slice(-1) CORRISPONDE ALL'ULTIMO ELEMENTO. SLICE RITORNA L'ELEMENTO IN UNA NUOVA STRINGA CHE ASSEGNAMO A lastOnline
                    this.lastOnline = this.sentDate.slice(-1).toString();

                    //COME SOPRA MA USANDO SPLICE
                    // this.lastOnline = this.sentDate.splice(this.sentDate.length -1, 1).toString();

                    // PER AVERE SOLO LE ORE USO SPLIT PER DIVIDERE LA STRINGA IN UN ARRAY SEPARATO DAGLI SPAZI ( " " )
                    this.lastOnline = this.lastOnline.split(" ");

                    //COME PRIMA CONVERTO lastOnline IN STRINGA DOPO AVER RECUPERATO SOLO L'ULTIMO ELEMENTO, OVVERO L'ORA
                    this.lastOnline = this.lastOnline.slice(-1).toString();


                }
            })

        },

    }

}).mount('#app')