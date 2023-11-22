import { Member } from "@/services/members"

export interface StoreState {
  title: string,
  showingMembers: boolean
}

export interface Member {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  dateOfJoining: Date;
  description: string;
}