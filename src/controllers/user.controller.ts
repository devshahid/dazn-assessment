import { Request, Response } from 'express';
import asyncHandler from '../helpers/asyncHandler';
import ResponseHandler from '../helpers/responseHandler';
import { UserService } from '../services/user.service';

class UserController extends ResponseHandler {
  register = asyncHandler(async (req: Request, res: Response) => {
    const { email, password, role } = req.body;

    const userService = new UserService();
    const response = await userService.registerService(email, password, role);

    await this.sendResponse(response, res, 'User created successfully');
  });

  login = asyncHandler(async (req: Request, res: Response) => {
    const { email, password, role } = req.body;

    const userService = new UserService();
    const response = await userService.loginService(email, password, role);
    await this.sendResponse(response, res);
  });
}

export { UserController };
