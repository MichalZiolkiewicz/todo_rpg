export interface AuthContextI {
  handleLoginUser?: () => void;
  loggedUser: string;
  setLogged?: () => void;
  logout?: () => void;
  readUserKey?: () => void
}

export interface AppContextI {
  test: string;
}
