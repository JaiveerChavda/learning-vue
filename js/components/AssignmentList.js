import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js";

export default {
    components : {
      Assignment,AssignmentTags
    },

    template: `
    <section
    v-show="assignments.length"
  >
    <h2 class="font-bold mb-2">{{ title }} <span> ({{ assignments.length }}) </span></h2>

    <assignment-tags 
      @change="currentTag = $event"
      :currentTag="this.currentTag"
      :initialTags="this.assignments.map(a => a.tag)"
    >
    </assignment-tags>    

    <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
      <assignment v-for="assignment in filteredAssignments" :assignment="assignment" :key="assignment.id"></assignment>  
    </ul>
  </section>
    `,

    data() {
        return {
            currentTag : 'all',
        }
    },

    props: {
        assignments : Array,
        title : String,
    },

    computed : {
      filteredAssignments(){
        if(this.currentTag == 'all'){
          return this.assignments;
        }
        return this.assignments.filter(a => this.currentTag === a.tag);
      }

    }
}