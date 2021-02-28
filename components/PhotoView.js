app.component('photo-view', {
    props: {
        showItems: {
            type: Object,
            require: true
        },
        showCanvas: {
            Boolean
        }

    },
    template:
        
        `<span v-show="showCanvas" class="px-8 pb-7 pt-2 bg-pink-100 text-right">
        <button class="text-white text-2xl" @click="hideCanvas">X</button>
        <img :src="showItems.image" width="500" height="500">
        </span>`,
    methods: {
        toggleCanvas(){
            this.$emit();
        },
        hideCanvas(){
            this.$emit();
        
            
        }
        }



})