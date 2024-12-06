export interface Activity {
    id: number;
    note: string;
    noteType: number;
    user: string;
    createdAt: string;  // or Date if you want to store it as a Date object
    isdeleted: boolean;
  }