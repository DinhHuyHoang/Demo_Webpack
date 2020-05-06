<template>
    <div id="app">
        <h1>{{ name }}</h1>
        <button @click="call">click</button>
    </div>
</template>

<script>
import Home from './components/Home.Vue'

export default {
    
    components: { Home },
    data: () => ({
        name: "hoang"
    }),
    methods: {
        call: function(){
            this.name = "huy"
        }
    }
}
</script>