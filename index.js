(function(){
	Notification.requestPermission(function(status) {
		if(status=='granted'){
			options.webTips()
		}else if(status=='denied'){
			console.log('用户拒绝通知');
		}else{
			console.log('用户还没选择');
		}
	});
})()


function createdConstruction (){
	this.onshow = false
	this.webTips = function () {
		if(this.onShow) return 
		Notification.requestPermission(()=> {
			if(Notification.permission === 'granted') {
				let n = new Notification('提示', {
					body: '有一条新的消息',
					icon: '/favicon.ico'
				})
				setTimeout(() => {
					n.close();
				}, 3000)
				
				n.onclick = function(e) {
					 n.close();
					 this.onshow=false
				}
				n.onerror = function(e) {
					n.close();
				}
				n.onshow = function(e) {
				   this.onshow=true
				}
				n.onclose = function(e) {
					this.onshow=false
				}
			}else {
				alert('有一条新的消息')
			}
		})
	}
}
const options= new createdConstruction()
