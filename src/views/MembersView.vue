<template>
  <div class="mx-4 my-8 lg:m-16">
    This is the members view.
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action, Getter, Mutation } from 'vuex-class'

@Component({
  components: {
  },
})
export default class MembersView extends Vue {
}
</script>