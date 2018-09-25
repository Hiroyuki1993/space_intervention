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
    },
    removeRecord: function () {
      this.records.pop()
    },
    download: function () {
      let element = document.createElement('a');
      const filename = 'data' + new Date().toLocaleTimeString()
      const text = JSON.stringify(this.records)

      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }
  }
})