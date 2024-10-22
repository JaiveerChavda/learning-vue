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
          assignments: [],
        };
      },
  
    created(){
        fetch("http://localhost:3001/assignments")
            .then(response => response.json())
                .then(data => this.assignments = data )
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