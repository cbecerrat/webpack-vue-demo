<template>
    <div class="alert alert-primary" role="alert">
        {{ message }} {{ count }}
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent } from "vue";
    import { useStore } from "../store";

    const Home = defineComponent({
        setup() {
            const store = useStore();

            return {
                count: computed(() => store.state.count),
            };
        },
        data() {
            return {
                message: "HOME",
            };
        },
    });

    export default Home;
</script>
