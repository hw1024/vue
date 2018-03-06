<template>
    <div class="app-wrapper">
        <div class="header-wrapper">
            <App-header class="header-container"/>
        </div>
        <div class="main-container clearfix">
            <Sidebar/>
            <App-main/>
        </div>
        <div class="footer-wrapper">
            <App-footer class="footer-container"/>
        </div>
    </div>
</template>
<script>
    import { Sidebar, AppHeader, AppFooter, AppMain } from 'views/layout';
    export default {
      name: 'layout',
      components: {
        Sidebar,
        AppHeader,
        AppFooter,
        AppMain
      }
    }
</script>