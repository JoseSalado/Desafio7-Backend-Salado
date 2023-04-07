import dotenv from 'dotenv'
dotenv.config()

const config = {
    port: {
        port: process.env.PORT || 8082
    },
    mongodb: {
        user: process.env.USER,
        pass: process.env.PASS
    },
    

}

export default config