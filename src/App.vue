<template>
    <div class="container">
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary" @click="homeNav">
                Home
            </button>
            <button type="button" class="btn btn-secondary" @click="aboutNav">
                About
            </button>
            <button type="button" class="btn btn-secondary" @click="another">
                Another
            </button>
        </div>
        <router-view></router-view>
        <div>
            {{ counter }}
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    const App = defineComponent({
        data() {
            return {
                counter: 0,
            };
        },
        mounted() {
            setInterval(() => {
                this.counter++;
            }, 1000);
        },
        methods: {
            homeNav() {
                this.$router.push('/');
            },
            aboutNav() {
                this.$router.push('/about');
            },
            another() {
                this.$router.push('another')
            }
        },
    });

    export default App;
</script>
