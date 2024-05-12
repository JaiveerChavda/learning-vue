export default {
   template : ` <form class="text-black bg-white" @submit.prevent="add">
   <input type="text" class="p-3" v-model="newAssignment" placeholder="Add Todo">
   <button type="submit" class="border border-gray-300 border-r hover:bg-gray-300 p-3 uppercase">add</button>
</form>`,

data() {
    return {
        newAssignment : '',
    }
},

methods : {
    add(){
        this.$emit('add',this.newAssignment);

        this.newAssignment = '';
    }
}
}