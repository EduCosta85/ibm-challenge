import { BaseDataBase } from "./BaseDatabase";

export class LinksDatabase extends BaseDataBase {
  protected LINKS: string = "LINKS";

  async pendingJobs() {
    try {
      let result = await super.getConnection().raw(`
      SELECT id, level, url FROM ${this.LINKS} WHERE STATUS = 0 ORDER BY level, id, parent, status LIMIT 1
      `)
      return result[0]
    } catch (error) {
      if (error.code == "ER_DUP_ENTRY") {
        throw new Error(`Duplicate entry not allowed - ${error.sqlMessage}`)
      } else {
        throw new Error(`${error.sqlMessage}`)
      }
    }
  }

  async truncateTable() {
    try {
      await super.getConnection().raw(`
      TRUNCATE ${this.LINKS}
      `)
    } catch (error) {
      throw new Error(`${error.sqlMessage}`)
    }
  }

  async getData(limit: number, offset: number) {
    try {
      let result = await super.getConnection().raw(`
        select * from ${this.LINKS} WHERE id > ${offset} ORDER BY level, id, parent, status LIMIT ${limit}
      `)
      return result[0]
    } catch (error) {
      throw new Error(`${error.sqlMessage}`)
    }
  }

  async getStatus() {
    try {
      let result = await super.getConnection().raw(`
        SELECT DISTINCT
        (SELECT count(*) FROM ${this.LINKS} WHERE status = 0) as pending,
        (SELECT count(*) FROM ${this.LINKS} WHERE status > 0) as complete,
        (SELECT count(*) FROM ${this.LINKS}) as total
        FROM ${this.LINKS}
      `)
      return result[0]
    } catch (error) {
      throw new Error(`${error.sqlMessage}`)
    }
  }

  async bulkInsert(batch: any) {
    try {
      await super.getConnection()
      .insert(batch)
      .into(this.LINKS)
      return
    } catch (error) {
      throw new Error(`${error.sqlMessage}`)
    }
  }

  async updateStatus(url: string, status: number) {
    try {
      await super.getConnection().raw(`
        UPDATE ${this.LINKS} SET status = ${status} WHERE url = "${url}"
      `)
    } catch (error) {
      throw new Error(`${error.sqlMessage}`)
    }
  }

  async updateQtd(url: number, qtd: number) {
    try {
      await super.getConnection().raw(`
        UPDATE ${this.LINKS} SET qtd_links = ${qtd}, status = 2 WHERE url = "${url}"
      `)
    } catch (error) {
      throw new Error(`${error.sqlMessage}`)
    }
  }

}
