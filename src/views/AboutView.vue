<template>
  <div class="mx-4 my-8 lg:m-16">
    <p class="text-2xl font-semibold">About My Project</p>

    <p class="mt-4">
      Use this page to tell us about the choices made, things added, assumptions made, questions, suggestions, etc...
    </p>

    <p>
      <u>Components added</u>
      <ul>
        <li>
          MemberDisplay.vue: used to display the details of an individual member. Split into a separate component 
          so this can be used in multiple components in the application in the future. I've used computed properties
          for the initials, the background for the circle and the membership length. I would have used the Tailwind class
          for the background colour but Tailwind doesn't like dynamic classes very much.
        </li>
      </ul>
    </p>

    <p>
      <u>Store changes</u>
      <ul>
        <li>Added a loadMembers action to load members. This calls the member service and sets the members in memory.</li>
      </ul>
    </p>

    <p>
      <u>Questions</u>
      <ul>
        <li>What was the reasoning behind using vue-property-decorator over the traditional Vue approach?</li>
      </ul>
    </p>

    <p>
      <u>Assumptions made</u>
    </p>

    <p>
      <u>Suggestions:</u>
      <ul>
        <li>If I had more time I would write automated unit tests for this functionality using Jasmine or Gherkin.</li>
      </ul>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action, Getter, Mutation } from 'vuex-class'

@Component({
  components: {
  },
})
export default class AboutView extends Vue {
}
</script>
