<template>
    <footer class="footer">
        <span>Copyright <strong>DevEd</strong> © 2015-2021</span>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer {
        grid-area: footer;
        background-color: grey;
        color: #000;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    }
</style>