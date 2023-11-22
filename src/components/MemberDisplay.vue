<template>
  <div class="shadow-md rounded-2xl p-4">
    <div class="flex items-center mb-4">
      <div class="p-4 mr-4 rounded-2xl rounded-full bg-emerald-800">
        FR
      </div>
      <div class="leading-none">
        Frank Rex<br />
        <span class="text-gray-500 text-xs">Member for 11 days</span>
      </div>
    </div>
    <div class="text-sm">
        This is a test
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Member } from '@/services/members';

@Component({
  components: {
  },
  props: ['member']
})
export default class MemberDisplay extends Vue {
}
</script>