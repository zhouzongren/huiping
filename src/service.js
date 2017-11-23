/* eslint-disable prefer-promise-reject-errors */
export default {
  methods: {
    request: function (url, body, method) {
      let _base = '/api/'
      let Promise = this.$promise
      method = method && method.toLowerCase()
      return new Promise((resolve, reject) => {
        let header = {}
        let req
        switch (method) {
          case 'form' : req = this.$http.post(_base + url, body, {emulateJSON: true, header}); break
          case 'post' : req = this.$http.post(_base + url, body, {header}); break
          default: req = this.$http.get(_base + url, { params: body, header })
        }
        req.then(res => {
          res.json().then(
            data => {
              if (!data.code || data.code === 200 || data.code === true) {
                resolve(data)
              } else {
                reject({
                  code: data.code,
                  msg: {
                    403: '禁止访问',
                    404: '不存在',
                    500: '服务期错误'
                  }[data.code] || data.msg || '数据错误'
                })
              }
            }, () => {
            reject({code: -2, msg: '解析错误'})
          })
        }, () => {
          reject({code: -2, msg: '网络错误'})
        })
      })
    }
  }
}
