<template>
    <div class="alert alert-primary" role="alert">
        This is the vue template... check it out!
    </div>

    <p>
        <!-- use the router-link component for navigation. -->
        <!-- specify the link by passing the `to` prop. -->
        <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
        <router-link to="/">Go to Home</router-link>
        <router-link to="/about">Go to About</router-link>
    </p>
    <router-view></router-view>
    {{ counter }}
</template>

<script lang="ts">
    import { defineComponent } from "vue";

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
    });

    export default App;
</script>
