import jwtDecode from 'jwt-decode';
import axios from 'axios';

class AuthService {
  setAxiosInterceptors = ({ onLogout }) => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          this.setSession(null);

          if (onLogout) {
            onLogout();
          }
        }

        return Promise.reject(error);
      }
    );
  };

  handleAuthentication() {
    const accessToken = this.getAccessToken();

    if (!accessToken) {
      return;
    }

    if (this.isValidToken(accessToken)) {
      this.setSession(accessToken);
    } else {
      this.setSession(null);
    }
  }

  loginWithEmailAndPassword = (email, password) => new Promise((resolve, reject) => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
          axios
            .post( proxyUrl+ "http://ebeta-admin.in:8080/api/Collaborator/signin/",
           {
                   email,password
           } 
          )
          .then(response => {
            resolve(response.data);
            console.log("res from login", response);
          })
          
    // axios.post('/Customer/signin/', { email, password })
    //   .then((response) => {
    //     console.log(response);
    //     if (response.data.user) {
    //       this.setSession(response.data.accessToken);
    //       resolve(response.data.user);
    //     } else {
    //       reject(response.data.error);
    //     }
      //})
      .catch((error) => {
        console.log(error);
        
        reject(error);
      });
  })

  loginInWithToken = () => new Promise((resolve, reject) => {
    axios.get('/api/account/me')
      .then((response) => {
        if(response.data.success){
          resolve()
          }
          else{
          reject()
          }
      })
      .catch((error) => {
        reject(error);
      });
  })

  logout = () => {
    this.setSession(null);
  }

  setSession = (accessToken) => {
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem('accessToken');
      delete axios.defaults.headers.common.Authorization;
    }
  }

  getAccessToken = () => localStorage.getItem('accessToken');

  isValidToken = (accessToken) => {
    if (!accessToken) {
      return false;
    }

    const decoded = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  }

  isAuthenticated = () => !!this.getAccessToken()
}

const authService = new AuthService();

export default authService;
