class LogsModel {
    constructor(action = '', createdAt = [], response = [{name:""}]) {
      this.action = action;
      this.createdAt = createdAt;
      this.response = response;
    }
  }

export default LogsModel

