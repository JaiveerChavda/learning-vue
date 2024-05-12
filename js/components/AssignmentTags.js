export default{
    template : `
    <div class="flex gap-2 items-center">
        <button 
        @click="$emit('change',currentTag = tag)"

        v-for="tag in tags"
        
        class="border rounded px-2 py-px text-xs"
        
        :class="
        {'border border-blue-500 text-blue-500' : tag === currentTag}
        "
        >
            {{tag}}
        </button>
    </div>
    `,

    props : {
        initialTags: Array,
        currentTag: String,
    },

    computed : {
        tags() {
            return [ 'all',...new Set(this.initialTags)];
          },
    }
}