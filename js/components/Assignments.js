import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components : {
        AssignmentList,AssignmentCreate
    },

    template : `

    <section class='space-y-6'>
        <assignment-list :assignments="filters.inprogress" title="In Progress"> </assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed"> </assignment-list>

        <assignment-create @add="add"></assignment-create>

    </section>
    `,

    data() {
        return {
          assignments: [
            { name: "go to gym", complete: false, id: 1, tag: 'exercise' },
            { name: "learn vue", complete: false, id: 2, tag: 'read' },
            { name: "The 5 AM Club", complete: false, id: 3, tag: 'read' },
          ],
        };
      },
  
    computed: {
        filters(){
            return {
                completed : this.assignments.filter((assignment) => assignment.complete),
                inprogress : this.assignments.filter((assignment) => ! assignment.complete),
            }
        }
    },

    methods: {
        add(name){
            this.assignments.push({
                name : name,
                complete : false,
                id : this.assignments.length + 1,
            })
        }
    }
}