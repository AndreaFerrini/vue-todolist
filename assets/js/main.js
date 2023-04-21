const { createApp } = Vue

createApp({
  data() {
    return {
        testoInput: '',
        tasks: [
            'Fare la spesa',
            'Fare i compiti',
            'Fare il bucato'
        ],
        error: false
    }
  },
  created(){

  },
  methods: {
    creaTodo(){

        if( this.testoInput != '' && this.testoInput.length > 5 ){

            this.tasks.unshift(this.testoInput)
            this.testoInput = ''
            this.error = false
        } else {
            this.error = true
        }
    },
    cancellareLaTodo(i){
        this.tasks.splice( i, 1 )
    }
  }
}).mount('#app')