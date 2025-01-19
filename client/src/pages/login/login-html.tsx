import logo from "../../assets/full-transparent-logo.png"
import './login.css';

type LoginHtmlProps = {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    email: string;
    setEmail: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
};

const LoginHtml: React.FC<LoginHtmlProps> = ({handleSubmit, email, setEmail, password, setPassword}) => {
  return (
    <>
        <img src={logo} style={{ width: "300px", height: "300px", marginTop: "50px", marginBottom: "0px" }}></img>
        <form onSubmit={handleSubmit}>
            <div className="content-container">
            <h2 className="text-center">Please login</h2>
            <div className="form-group">
            {/* <label htmlFor="medicationName" className="form-label">
                Email:
            </label> */}
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                required
                />
            </div>
            <div className="form-group">
            {/* <label htmlFor="refillAlert" className="form-label">
                Password:
            </label> */}
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                required
                />
            </div>
            <div className="text-center mt-4">
            <button>
                Login
            </button>
            </div>
        </div>
        </form>
    </>
  )
}

export default LoginHtml