<template>
    <div class="footer--main">
<FooterItem/>
    </div>
    
</template>

<script>
import FooterItem from './FooterItem'
export default {
    name: 'PersonalPageFooter',
    components:{
        FooterItem,

    }
}
</script>

<style scope>
.footer--main{
    background-color: #e83556;
}

</style>