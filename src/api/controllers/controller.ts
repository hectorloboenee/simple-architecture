import { Request, Response } from 'express';

export abstract class ControllerBase {
  abstract run(request: Request, response: Response): Promise<void>;
}
