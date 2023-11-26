const AuthService = {
    isAuthenticated: false,
  
    login: (username, password) => {
      if (username === 'usuario' && password === 'contraseña') {
        AuthService.isAuthenticated = true;
        localStorage.setItem('user', JSON.stringify({ username }));
      } else {
        AuthService.isAuthenticated = false;
        localStorage.removeItem('user');
      }
    },
  
    logout: () => {
      AuthService.isAuthenticated = false;
      localStorage.removeItem('user');
    },
  
    getUser: () => {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    },
  };
  
  export default AuthService;
  