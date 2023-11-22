<template>
  <div class="shadow-md rounded-2xl p-4">
    <div class="flex items-center mb-4">
      <div class="p-4 mr-4 rounded-2xl rounded-full" :style="initialsBackground">
        {{  initials }}
      </div>
      <div class="leading-none">
        {{ fullName }}<br />
        <span class="text-gray-500 text-xs">Member for {{ timeAsMember }}</span>
      </div>
    </div>
    <div class="text-sm">
        <p class="line-clamp-2">{{ member.lastMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import moment from 'moment';
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Member } from '@/services/members';
import { mapInitialsToHexColour } from '@/utils/colours';

@Component({
  components: {
  },
  props: ['member']
})
export default class MemberDisplay extends Vue {
    @Prop()
    private readonly member!: Member;

    get initials() {
        return this.member.firstName[0] + this.member.lastName[0];
    }

    get initialsBackground() {
        //return `bg-[${mapInitialsToHexColour(this.initials)}]`; // Proper Tailwind approach.

        // Note: Tailwind doesn't like dynamic CSS classes.
        return `background-color:${mapInitialsToHexColour(this.initials)}`;
    }

    get fullName() {
        return `${this.member.firstName} ${this.member.lastName}`;
    }

    get timeAsMember() {
        return moment(this.member.joinedAt).fromNow(true);
    }
}
</script>