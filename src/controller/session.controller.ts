import { Request, Response } from "express";
import config from "config";
import { get } from "lodash";
import {
  createSession,
  createAccessToken,
  updateSession,
  findSessions,
} from "../service/session.service";
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
  const accessToken = createAccessToken({
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

export async function invalidateUserSessionHandler(
  req: Request,
  res: Response
) {
  const sessionId = get(req, "user.session");

  await updateSession({ _id: sessionId }, { valid: false });

  return res.sendStatus(200);
}

export async function getUserSessionsHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");

  const sessions = await findSessions({ user: userId, valid: true });

  return res.send(sessions);
}
