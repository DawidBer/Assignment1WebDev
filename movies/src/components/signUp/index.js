import React, { useState} from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

const SignUp = ({}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Sign up successfull");
            navigate("/signIn");
        } catch (error) {
            console.error("Sign up Error:", error.message);
            setError(error.message);
        }
        };
    return (
        <Card style={{ maxWidth: 500, margin: 'auto', marginTop: 100 }}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Create Account
        </Typography>
        <form>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: 25 }}
            onClick={handleSubmit}
          >
           Join Community!
          </Button>
             {error && <p style={{ color: 'yellow' }}>{error}</p>}
         </form>
      </CardContent>
    </Card>
        
    );
    };
export default SignUp;