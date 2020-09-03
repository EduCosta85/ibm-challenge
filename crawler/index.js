let request = require('async-request'), response;
const jsdom = require("jsdom");
const axios = require('axios')
const {JSDOM} = jsdom;

class Crawler {
    BASE_URL = "http://localhost:3003/api";

    async pendingJob() {
        console.log('')
        try {
            let result = await axios.get(`${this.BASE_URL}/app/pendingjobs`, {})
            if (result.data.length > 0) {
                console.log(`Job found: ${result.data[0].url}`)
                await new Crawler().colectLinks(parseInt(result.data[0].id), parseInt(result.data[0].level), result.data[0].url)
            } else {
                console.log('No pending jobs')
                await sleep(1000)
            }
            return
        } catch (error) {
            return {status: "erro", mensagem: error.response.data.message}
        }
    }

    async addBatch(batch, url) {
        console.log(`Collected ${batch.length} links`)
        try {
            if (batch.length > 0) {
                await axios.post(`${this.BASE_URL}/app/addbatch`, {batch});
                new Crawler().updateQtd(url, batch.length)
                return
            } else {
                return
            }
        } catch (error) {
            return {status: "erro", mensagem: error.response.data.message}
        }
    }

    async updateQtd(url, qtd) {
        try {
            await axios.put(`${this.BASE_URL}/app/updateqtd`, {url, qtd});
            return
        } catch (error) {
            return {status: "erro", mensagem: error.response.data.message}
        }
    }

    async colectLinks(id, level, url) {
            console.log('Collecting on:', url)
            try {
                response = await request(url);
                if (response.statusCode === 200) {
                    const dom = new JSDOM(response.body);
                    let links = dom.window.document.querySelectorAll('a')
                    let collection = []
                    if (links) {
                        for (let index = 0; index < links.length; index++) {
                            let ishttp = (links[index].href).startsWith('http')
                            if (ishttp) {
                                collection.push({level: (level+1), name: ((links[index].text).trim()), parent: id, url: links[index].href})
                            }
                        }
                        new Crawler().addBatch(collection, url)
                    } else {
                        new Crawler().updateQtd(url, 0)
                    }
                }
            console.log('Finished')
            } catch (err) {
                res.status(err.errorCode || 400).send({message: err.message});
                doJob()
            }
        }
}

module.exports = Crawler

let sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let doJob = async () => {
    await new Crawler().pendingJob()
    await sleep(10)
    doJob()
}
doJob()