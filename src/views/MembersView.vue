<template>
  <div class="mx-4 my-8 lg:m-16">
    <div class="flex justify-center items-center h-screen">
      <button class="btn bg-emerald-800 hover:bg-emerald-700 active:emerald-900 text-white rounded-xl px-6 py-2">Load Members</button>
    </div>
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