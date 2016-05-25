class DataService {
  constructor($http) {
    this.$http = $http;
  }

  getDataTables(id) {
    const url = `${API_URL}dataTables/${id}/jsonRepresentation`; // eslint-disable-line no-undef;
    return this.$http
      .get(url, {withCredentials: true});
  }
}

DataService.$inject = ['$http'];
