import { Request, Response } from "express";

export default class SweetController {
  static async createSweet(req: Request, res: Response) {
    res.status(501).json({ message: "Not implemented" });
  }

  static async getAllSweets(req: Request, res: Response) {
    res.status(501).json({ message: "Not implemented" });
  }

  static async updateSweet(req: Request, res: Response) {
    res.status(501).json({ message: "Not implemented" });
  }

  static async deleteSweet(req: Request, res: Response) {
    res.status(501).json({ message: "Not implemented" });
  }

  static async purchaseSweet(req: Request, res: Response) {
    res.status(501).json({ message: "Not implemented" });
  }

  static async restockSweet(req: Request, res: Response) {
    res.status(501).json({ message: "Not implemented" });
  }
}