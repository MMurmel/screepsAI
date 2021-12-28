interface Memory {}

interface CreepMemory {
  role: string;
  room: string;
  working: boolean;
}

interface RoomMemory {
  name: string;
  colony: boolean;
  underAttack: boolean;
  sources: String[] | null;
}
