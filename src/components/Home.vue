<template>
    <div class="alert alert-primary" role="alert">
        {{ message }}
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    const Home = defineComponent({
        data() {
            return {
                message: 'HOME',
            };
        }
    });

    export default Home;
</script>
