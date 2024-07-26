<template>
    <div>
     <SlideshowPage/>
     <InformatiiPage/>
     <GalleryPage/>
     <ProgramarePage/>
    
    </div>
</template>

<script>
import GalleryPage from '@/components/GalleryPage.vue';
import InformatiiPage from '@/components/InformatiiPage.vue';
import ProgramarePage from '@/components/ProgramarePage.vue';
import SlideshowPage from '@/components/SlideshowPage.vue';
import FeedbackPage from './FeedbackPage.vue';


    export default {
        components:{
            GalleryPage,
            InformatiiPage,
            ProgramarePage,
            SlideshowPage,
            FeedbackPage
            
        }
        
    }
</script>

<style scoped>

</style>