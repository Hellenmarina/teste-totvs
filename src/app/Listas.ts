export interface Listas {
  nameList: string;
  id?: number;
  tarefas: [
    {
      id?: number;
      name: string;
      status: string;
    }
  ];
}
