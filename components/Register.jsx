"use client"

import { registerUser } from "csc-start/utils/data"
import { useState } from "react"

const Register = () => {

    const [response, setResponse] = useState(null)

    const testRegister = async () => {
        const register = await
            registerUser('foobar@gmail.com', 'foobar123!', 'john', 'foo')
        setResponse(register);
    }
    
    return (
        <div>

            <button onClick={testRegister}>Click Me</button>
            <pre>{JSON.stringify(response, 0, 1)}</pre>
            
        </div>
    )
}

export default Register