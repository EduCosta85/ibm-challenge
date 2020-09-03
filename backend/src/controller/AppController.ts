import { Request, Response } from "express";
import { LinksDatabase } from "../data/LinksDatabase";

export class AppController {

  async newLink(req: Request, res: Response) {
    try {
      const { level, name, parent, url } = req.body
      if ((level == null) || (name == null) || (parent == null) || (url == null)) {
        throw new Error('Missing parameters')
      }
      await new LinksDatabase().bulkInsert([{ level, name, parent, url }])
      res.sendStatus(201)
    } catch (error) {
      console.log(error.message)
      res.status(400).send({ error: error.message })
    }
  }

  async pendingJobs(req: Request, res: Response) {
    try {
      let result = await new LinksDatabase().pendingJobs()
      let isEmpty = (arr: string | any[]) => !Array.isArray(arr) || arr.length === 0;

      if (!isEmpty(result)) {
        await new LinksDatabase().updateStatus(result[0].url, 1)
      } else {
      }
      res.status(200).send(result)
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async truncateTable(req: Request, res: Response) {
    try {
      await new LinksDatabase().truncateTable()

      res.sendStatus(200)
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async getData(req: Request, res: Response) {
    try {
      let result = await new LinksDatabase().getData(req.body.limit, req.body.offset)

      res.status(200).json({ data: result })
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async getStatus(req: Request, res: Response) {
    try {
      let result = await new LinksDatabase().getStatus()
      res.status(200).json({ status: result })
    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async insertbatch(req: Request, res: Response) {
    try {
      await new LinksDatabase().bulkInsert(req.body.batch)

      res.sendStatus(201)

    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

  async updateQtd(req: Request, res: Response) {
    try {
      await new LinksDatabase().updateQtd(req.body.url, req.body.qtd)
      res.sendStatus(200)

    } catch (err) {
      res.status(err.errorCode || 400).send({ message: err.message });
    }
  }

}


