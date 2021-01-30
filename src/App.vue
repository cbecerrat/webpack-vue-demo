<template>
    <div class="alert alert-primary" role="alert">
        This is the vue template... check it out!
    </div>
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
