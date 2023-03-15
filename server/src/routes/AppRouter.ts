import { Router } from 'express';

// singleton pattern in typescript to ensure
// we only always only on router
export class AppRouter {
  private static instance: Router;

  static getInstance(): Router {
    if (!AppRouter.instance) {
      AppRouter.instance = Router();
    }
    return AppRouter.instance;
  }
}