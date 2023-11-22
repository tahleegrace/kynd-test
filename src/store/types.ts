import { Member } from "@/services/members"

export interface StoreState {
  title: string,
  showingMembers: boolean,
  visibleMembers: Member[];
}