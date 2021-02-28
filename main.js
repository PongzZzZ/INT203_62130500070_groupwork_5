const app = Vue.createApp({
    data() {
        return {
            gallerys: [{ image: "./images/1.jpg", title: "Cat , Korat species", done: false, show: true }
                , { image: "./images/2.jpg", title: "Dog , Corgi species", done: false, show: true }
                , { image: "./images/3.png", title: "Ninja , NaruPeem pinsaeng", done: false, show: true }],
            heart: "./images/heart.png",
            inputTask: "",
            showBar: false,
            showSearch: true,
            showCanvas: false,
            showItems: [],
            index: 0,
        }
    },
    methods: {

        toggleHeart(index) {
            if(this.gallerys[index].show == false){}
            else{
            this.gallerys[index].done = !this.gallerys[index].done;
            this.index = index;
            for (let i = 0; i < this.gallerys.length; i++) {
                if (index == i) continue;
                this.gallerys[i].done = false;
            }
            if (this.gallerys[index].done == true) {
                this.toggleCanvas(this.gallerys[index]);
            }
            if(this.gallerys[index].done == false){
                this.showCanvas = false;
                this.showSearch = true;
            }
        }
        },
        hideCanvas(){
            this.showSearch = true;
            this.showItems = [];
            this.toggleHeart(this.index);
        }
        ,
        toggleCanvas(index, input) {
            this.index = index;
            if (this.gallerys[index].canvas == false) {
                for (let i = 0; i < this.gallerys.length; i++) {
                    if (index == i) continue;
                    this.gallerys[i].canvas = false;
                }
                this.gallerys[index].canvas = true;
                this.showCanvas = true;
                this.showBar = false;
                this.showSearch = false;
                this.showItems = input;
            }
        },
        toggleBar() {
            this.showBar = !this.showBar;
            this.showSearch = !this.showSearch;
            this.togglePictureShow();
        },
        toggleSearch() {
            this.showBar = !this.showBar;
            this.showSearch = !this.showSearch;
        },
        searchPicture(searching) {
            this.inputTask=searching;
            if (this.inputTask) {
                for (let i = 0; i < this.gallerys.length; i++) {
                    if (this.gallerys[i].title.toLowerCase().includes(this.inputTask.toLowerCase())) {
                        this.gallerys[i].show = true;
                    }
                    else {
                        this.gallerys[i].show = false;
                    }
                    
                }
            }
        },
        togglePictureShow() {
            for (let i = 0; i < this.gallerys.length; i++) {
                this.gallerys[i].show = true;
            }
        },
    },
    computed: {
        calculated() {
            let tempCount = 0;
            for(let i = 0 ; i < this.gallerys.length ; i++){
                if(this.gallerys[i].show == true) tempCount++; 
            }
            return tempCount;
        },
        checkItems() {
            let count = 0
            for (let i = 0; i < this.gallerys.length; i++) {
                if (this.gallerys[i].show == true) count++;
            }
            if (count == 0) return "No photo.";
        }

    }

})
