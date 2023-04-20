const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            newTask: '',
            errore: false,
            lista: [
                {
                    testo: 'Fare i compiti',
                    done: false,
                },
                {
                    testo: 'Fare la spesa',
                    done: true,
                },
                {
                    testo: 'Fare il bucato',
                    done: false,
                }
            ]
        }
    },
    methods:
}).mount('#app');