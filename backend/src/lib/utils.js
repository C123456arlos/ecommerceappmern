import jwt from 'jsonwebtoken'
import { ENV } from './env.js'
export const generateToken = (userId, res) => {
    const { JWT_SECRET } = ENV
    if (!JWT_SECRET) {
        throw new Error('jwt not configured')
    }
    const token = jwt.sign({ userId: userId }, JWT_SECRET, {
        expiresIn: '7d'
    })
    // res.cookie('jwt', token, {
    //     maxAge: 7 * 24 * 60 * 60 * 1000,
    //     httpOnly: true,
    //     sameSite: 'strict',
    //     secure: ENV.NODE_ENV === 'development' ? false : true
    // })
    // res.cookie('jwt', token, {
    //     maxAge: 7 * 24 * 60 * 60 * 1000,
    //     httpOnly: true,
    //     sameSite: 'lax', // Best balance of security and reliability for same-domain apps
    //     secure: ENV.NODE_ENV === 'production' // true in production, false in development
    // });
    res.cookie("jwt", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return token
}