import { Request, Response } from "express";
import config from "config";
import { createSession, createAccessToken } from "../service/session.service";
import { validatePassword } from "../service/user.service";
import { sign } from "../utils/jwt.utils";

export async function createUserSessionHandler(req: Request, res: Response) {
  // Validate the Email and Password
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send("Invalid username or password");
  }

  // Create a Session
  const session = await createSession(user._id, req.get("user-agent") || "");

  // Create Access Token
  const accessToken = await createAccessToken({
    user,
    session,
  });

  // Create Refresh Token
  const refreshToken = sign(session, {
    expiresIn: config.get("refreshTokenTtl"), // 1 year
  });

  // Send Refresh & Access Token back
  return res.send({ accessToken, refreshToken });
}
