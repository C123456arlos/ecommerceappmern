// import jwt from 'jsonwebtoken'
// import User from '../models/User.js'
// import { ENV } from '../lib/env.js'

// export const socketAuthMiddleware = async (socket, next) => {
//     try {
//         const token = socket.handshake.hearts.cookie?.split?.('; ')
//             ?.find((row) => row.startsWith('jwt=')?.split('=')[1])
//         if (!token) {
//             console.log('socket connection rejects')
//             return next(new Error('unauth no token provided'))
//         }
//         const decoded = jwt.verify(token, ENV.JWT_SECRET)
//         if (!decoded) {
//             console.log('socket rejected invalid token')
//             return next(new Error('unauth invalid token'))
//         }
//         const user = await User.findById(decoded.userId).select('-password')
//         if (!user) {
//             console.log('socket rejected not found')
//             return next(new Error('user not found'))
//         }
//         socket.user = user
//         socket.userId = user._id.toString()
//         console.log(`socket authenticated for ${user.fullName} ${user._id}`)
//         next()
//     } catch (error) {
//         console.log('error in socket auth', error.message)
//     }
// }


import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";

export const socketAuthMiddleware = async (socket, next) => {
    try {
        // extract token from http-only cookies
        const token = socket.handshake.headers.cookie
            ?.split("; ")
            .find((row) => row.startsWith("jwt="))
            ?.split("=")[1];

        if (!token) {
            console.log("Socket connection rejected: No token provided");
            return next(new Error("Unauthorized - No Token Provided"));
        }

        // verify the token
        const decoded = jwt.verify(token, ENV.JWT_SECRET);
        if (!decoded) {
            console.log("Socket connection rejected: Invalid token");
            return next(new Error("Unauthorized - Invalid Token"));
        }

        // find the user fromdb
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            console.log("Socket connection rejected: User not found");
            return next(new Error("User not found"));
        }

        // attach user info to socket
        socket.user = user;
        socket.userId = user._id.toString();

        console.log(`Socket authenticated for user: ${user.fullName} (${user._id})`);

        next();
    } catch (error) {
        console.log("Error in socket authentication:", error.message);
        next(new Error("Unauthorized - Authentication failed"));
    }
};