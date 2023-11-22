<template>
  <div>
    This is a member {{ member.firstName }}
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