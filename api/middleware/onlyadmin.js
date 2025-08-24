// middlewares/auth.js
import jwt from "jsonwebtoken";
import { handleError } from '../helpers/handleError.js'

export const onlyadmin = (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) return next(handleError(403, "Unauthorized"));

    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);

    if (decodeToken.role === "admin") {
      req.user = decodeToken;
      next();
    } else {
      return next(handleError(403, "Unauthorized"));
    }
  } catch (error) {
    next(handleError(500, error.message));
  }
};
