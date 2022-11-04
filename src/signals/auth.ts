import { createSignal } from 'solid-js';

export interface IUser {
  id: string;
  name: string;
  jamiaId: string;
  email: string;
  department: string;
  course: string;
}

export interface IAuth {
  isLoggedIn: boolean;
  token: string | null;
  user: IUser | null;
}

const [auth, setAuth] = createSignal<IAuth>({
  isLoggedIn: false,
  token: null,
  user: null,
});

export const getToken = () => window.localStorage.getItem('myjamia-token');

export const setToken = () => {
  const token = getToken();

  if (token && token !== '') {
    setAuth((prev) => ({ ...prev, token }));
  }
};

export const logout = () => {
  window.localStorage.removeItem('myjamia-token');
  setAuth({ isLoggedIn: false, token: null, user: null });
};

export const validateAuthFromBackend = () => {};

export { auth, setAuth };
