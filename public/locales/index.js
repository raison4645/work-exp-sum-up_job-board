const fs = require('fs')
const excelUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ7aToH8LqICjm8VfTc6yHwXKLwzEtm27ZwSGnYZpjVXgJJTyM6rw22989RRMu8RNxeqPCJEq9C7N5t/pub?gid=0&single=true&output=tsv'
const langs = ['en', 'zh-HK', 'zh-CN'] // which language you want to grep

async function tsvToJSON(tsv) {
  const lines = tsv.split('\n')
  const langKeys = lines.slice(0, 1)[0].replace('\r', '').split('\t')
  return await lines.slice(1, lines.length).map((line) => {
    const data = line.split('\t')
    return langKeys.reduce((obj, nextKey, index) => {
      obj[nextKey] = data[index].replace('\r', '')
      return obj
    }, {})
  })
}

function parseToNested(obj) {
  const o = {}
  let j
  let d
  for (const m in obj) {
    d = m.split('.')
    let startOfObj = o
    for (j = 0; j < d.length; j += 1) {
      if (j === d.length - 1) {
        startOfObj[d[j]] = obj[m]
      } else {
        startOfObj[d[j]] = startOfObj[d[j]] || {}
        startOfObj = startOfObj[d[j]]
      }
    }
  }
  return o
}

async function main() {
	const tsvData = await fetch(excelUrl).then(res => res.text()).catch(err => err)
	if (tsvData) {
		const jsonData = await tsvToJSON(tsvData)
		for (const lang of langs) {
			const tmp = {}
			jsonData.forEach(item => {
				const keyname = item.key
				tmp[keyname] = item[lang]
			})
      await fs.writeFileSync(`./${lang}/common.json`, JSON.stringify(parseToNested(tmp)))
		}
	}
}

main()
