const user = {
	name: 'Umpa',
    age: 50,
    
    // userName() 메서드 왼쪽에 get, set 키워드만 붙이면 알아서 Getter, Setter 로서 동작된다
    get userName() {
    	return user.name;
    },
    set users(value) {
    	user.name = value;
    }
}

console.log(user.userName)
user.users = 'Crazy'
console.log(user);

