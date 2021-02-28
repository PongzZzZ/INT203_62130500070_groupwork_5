app.component('photo-item', {
    props: {
      gallerys: {
        type: Array,
        require: true
      },
      heart:{
        type: String,
        require: true
      }
    },
    template:
      /*html*/
      `    <ul>
      <li v-for="(gallery,index) in gallerys" class="flex items-center mt-5" v-show="gallery.show">
        <button v-on:click="toggleHeart(index)">
          <img :src="gallery.image" width="200" height="200">
        </button>
        <span class="ml-4 text-xl font-medium w-80">{{gallery.title}}</span>
        <span v-show="gallery.done"><img :src="heart"></span>
      </li>

    </ul>`
    ,
    data() {
      return {
  
      }
    },
    methods: {
      toggleHeart(index) {
        this.$emit('toggle-heart', index);
      },
      toggleCanvas(item){
        this.$emit('toggle-canvas',item);
      },
      clickedItem(index,item){
        this.$emit('clicked-item',index,item);
      }
  
    }
  });