<template>
    <div id="index">
        <router-view/>
        <tabbar></tabbar>
    </div>
</template>

<script>
import tabbar from '../components/Tabbar.vue'
export default {
    name: 'INDEX',
    components: {
        tabbar
    }
}
</script>

