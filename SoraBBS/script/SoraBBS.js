const app = new Vue({
  el:'#app',
  data: {
    texts:[],
    newName:null,
    newComment:null
  },
  mounted() { 
    if(localStorage.getItem('texts')) {
      try {
        this.texts = JSON.parse(localStorage.getItem('texts'));
      } catch(e) {
        localStorage.removeItem('texts');
      }
    }
  },
  methods: {
    add() {
      if(!this.newName) this.newName = 'NoName';
      if(!this.newComment) return;

      let cratedAt = dayjs().format('YYYY-MM-D HH:mm:ss');
      let textArr = Array.of(this.newName,this.newComment, cratedAt);
      this.texts.push(textArr);
      this.newName = '';
      this.newComment = '';
      this.save();
    },
    remove(x) {
      this.texts.splice(x,1);
      this.save();
    },
    save() {
      let parsed = JSON.stringify(this.texts);
      localStorage.setItem('texts', parsed);
    }
  }
})