// import jwt from 'jsonwebtoken'
// import User from '../models/User.js'
// import { ENV } from '../lib/env.js'
// export const protectRoute = async (req, res, next) => {
//     try {
//         const token = req.cookies.jwt
//         if (!token) return res.status(401).json({ mesage: 'unauthorized no token' })
//         const decoded = jwt.verify(token, ENV.JWT_SECRET)
//         if (!decoded) return res.status(401).json(({ message: 'unauthorized- invalid token' }))
//         const user = await User.findById(decoded.userId).password('-password')
//         if (!user) return res.status(404).json({ mesage: 'user not found' })

//         req.user = user
//         next()
//     } catch (error) {
//         console.log('error protect middleware', error)
//         res.status(500).json({ mesage: 'internal seerver error' })
//     }
// }

import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";
export const protectRoute = async (req, res, next) => {
    console.log(req.cookies)
    try {
        const token = req.cookies.jwt;
        if (!token) return res.status(401).json({ message: "Unauthorized - No token provided" });

        const decoded = jwt.verify(token, ENV.JWT_SECRET);
        if (!decoded) return res.status(401).json({ message: "Unauthorized - Invalid token" });

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};