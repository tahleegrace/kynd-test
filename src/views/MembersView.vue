<template>
  <div class="mx-4 my-8 lg:m-16 max-w-7xl">
    <div class="flex justify-center items-center h-screen" v-show="!showingMembers">
      <button class="btn bg-emerald-800 hover:bg-emerald-700 active:emerald-900 text-white rounded-xl px-6 py-2" v-on:click="loadMembers">Load Members</button>
    </div>

    <div v-show="showingMembers" class="font-bold mb-4">
      Found {{ totalMembers }} members with an average age of {{ averageAge }}.
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4" v-show="showingMembers">
      <MemberDisplay v-for="member in visibleMembers" :member="member"></MemberDisplay>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter, Mutation } from 'vuex-class';
import { mapActions } from 'vuex';
import { Member } from '@/services/members';
import MemberDisplay from '../components/MemberDisplay.vue';

@Component({
  components: {
    MemberDisplay
  },
  methods: {
    ...mapActions([
      'loadMembers'
    ])
  }
})
export default class MembersView extends Vue {
  @State('showingMembers')
  private readonly showingMembers!: boolean;

  @State('visibleMembers')
  private readonly visibleMembers!: Member[];

  get totalMembers() {
    return this.visibleMembers.length;
  }

  get averageAge() {
    return Math.round(this.visibleMembers.reduce((acc, member) => acc + member.age, 0) / this.totalMembers);
  }
}
</script>