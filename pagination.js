import users from './users';
function Query(data) {
    this.data = data;
    this.state = [];
 
}
Query.prototype.pagination = function(limit, page) {
    let newArr = [];
    let start =limit * page - limit;
    let end = limit * page;
    newArr = this.data.slice(start, end).map(user => user.name);
    this.state = newArr;
}
let queryUsers = new Query(users);

queryUsers.pagination(2,3);
console.log(queryUsers.state);