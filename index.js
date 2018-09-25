var app = new Vue({
  el: '#app',
  data: {
    records: []
  },
  methods: {
    addRecord: function (tid) {
      this.records.push({
        time: new Date().toLocaleTimeString(),
        table: tid
      })
    }
  }
})