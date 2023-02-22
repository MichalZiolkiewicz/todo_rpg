export interface AuthContextI {
  handleLoginUser?: (data: {email: string; password: string}) => void;
  loggedUser: string;
  setLogged?: () => void;
  logout?: () => void;
}

export interface AppContextI {
  getAll: () => void;
  addNew: () => void;
  initList: () => void;
  updateUserData: () => void;
  updateTaskList: () => void;
  removeItem: () => void;
}
