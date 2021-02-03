<template>
    <div class="alert alert-primary" role="alert">
        {{ message }}
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    const About = defineComponent({
        data() {
            return {
                message: 'ABOUT',
            };
        }
    });

    export default About;
</script>
