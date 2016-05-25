class DataService {
  constructor($http) {
    this.dataSource = EXTERNAL_DATA_SRC;
    this.$http = $http;
  }

  getDataTableList() {
    const url = `${API_URL}dataTables/`; // eslint-disable-line no-undef;
    return this.$http
      .get(url, {withCredentials: true});
  }

  getDataTable(id) {
    const url = `${API_URL}dataTables/${id}/jsonRepresentation/`; // eslint-disable-line no-undef;
    return this.$http
      .get(url, {withCredentials: true});
  }

  putDataTables(id, rowData, columnMetadata) {
    const url = `${API_URL}dataTables/${id}/jsonRepresentation/`; // eslint-disable-line no-undef;
    const data = {
      version: 1,
      rowData,
      columnMetadata
    };
    return this.$http({method: 'POST', url, headers: {'Content-Type': 'text/plain'}, data});
  }
}

DataService.$inject = ['$http'];
