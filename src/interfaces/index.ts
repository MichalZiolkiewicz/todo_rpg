export interface AuthContextI {
  handleLoginUser?: (data: {email: string; password: string}) => void;
  loggedUser: string;
  setLogged?: () => void;
  logout: () => void;
  readUserKey?: () => void;
}

export interface AppContextI {
  getAll: () => any;
  addNew: () => void;
  initList: () => void;
  updateUserData: () => void;
  updateTaskList: () => void;
  removeItem: () => void;
}
