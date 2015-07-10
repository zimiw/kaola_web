var navTabs = angular.module("navTabs", []);

navTabs.controller("navTabsCtr", function($scope) {

	/**
	 * get tabs data from database
	 */
	$scope.tabs = [{
		name: 'home',
		class: 'active',
		id: '100001',
		content: [{
			name: '法拉利',
			price: '430w',
			imgUrl: 'img/1.jpg',
			monthCount: 30,
			id: 1001
		}, {
			name: '法拉利',
			price: '430w',
			imgUrl: 'img/1.jpg',
			monthCount: 30,
			id: 1002
		}, {
			name: '法拉利',
			price: '430w',
			imgUrl: 'img/1.jpg',
			monthCount: 30,
			id: 1003
		}, {
			name: '法拉利',
			price: '430w',
			imgUrl: 'img/1.jpg',
			monthCount: 30,
			id: 1004
		}]
	}, {
		name: 'profile',
		id: '100002'
	}, {
		name: 'messages',
		id: '100003'
	}, {
		name: 'settings',
		id: '100004'
	}];


	$scope.menu = [{
		typeId: '',
		class: 'active',
		name: 'home',
		content: [{
			name: '法拉利',
			price: '410w',
			imgUrl: 'img/1.jpg'
		}, {
			name: '法拉利',
			price: '420w',
			imgUrl: 'img/1.jpg'
		}, {
			name: '法拉利',
			price: '430w',
			imgUrl: 'img/1.jpg'
		}]
	}, {
		typeId: '',
		name: 'profile',
		content: [{
			name: '玛莎拉蒂',
			price: '450w',
			imgUrl: 'img/1.jpg'
		}, {
			name: '玛莎拉蒂',
			price: '450w',
			imgUrl: 'img/1.jpg'
		}, {
			name: '玛莎拉蒂',
			price: '450w',
			imgUrl: 'img/1.jpg'
		}]
	}, {
		typeId: '',
		name: 'messages',
		content: [{
			name: '兰博基尼',
			price: '450w',
			imgUrl: 'img/1.jpg'
		}, {
			name: '兰博基尼',
			price: '450w',
			imgUrl: 'img/1.jpg'
		}, {
			name: '兰博基尼',
			price: '450w',
			imgUrl: 'img/1.jpg'
		}]
	}, {
		typeId: '',
		name: 'settings',
		content: [{
			name: '布加迪威龙',
			price: '450w',
			imgUrl: 'img/1.jpg'
		}, {
			name: '布加迪威龙',
			price: '450w',
			imgUrl: 'img/1.jpg'
		}, {
			name: '布加迪威龙',
			price: '450w',
			imgUrl: 'img/1.jpg'
		}]
	}];

	$scope.ff = 'ddd';

	/*	$scope.order = {
						content:[{
							typeId:,
							productId:,
							price:,
							number:,
							name:
						}],
						totalNum:,
						totalCost:
		}*/

	/**
	 *
	 * @param {Object} dom
	 */
	$scope.shift = function(name) {

		alert('i am in ' + name);
	}

	$scope.getContent = function(name) {
		return '<span>get down</span>'
	};

});

/**
 * 显示菜单内容
 */
function showMenu(typeId) {
	var current = $("#" + typeId);
	//current.addClass('active');
	if(current.children().length<1){
		getMenuByType(typeId);
	}
}


/**
 * 根据分类id获取分类菜单内容
 * @param {Object} id
 */
function getMenuByType(id) {
	/*$.ajax({
		type:"get",
		url:"",
		success: function(result){
			
			$("#id").html(createMenuDom(result.content));
		}
	});*/
	var content;
	alert(parseInt(id,10) = 100001);
	if (parseInt(id,10) = 100001) {
		content = [{
			name: '法拉利',
			price: '430w',
			imgUrl: 'img/1.jpg',
			monthCount: 30,
			id: 1011
		}, {
			name: '法拉利',
			price: '430w',
			imgUrl: 'img/1.jpg',
			monthCount: 30,
			id: 1012
		}, {
			name: '法拉利',
			price: '430w',
			imgUrl: 'img/1.jpg',
			monthCount: 30,
			id: 1013
		}, {
			name: '法拉利',
			price: '430w',
			imgUrl: 'img/1.jpg',
			monthCount: 30,
			id: 1014
		}];
	} else {
		content = [{
			name: '兰博基尼',
			price: '430w',
			imgUrl: 'img/2.jpg',
			monthCount: 30,
			id: 1021
		}, {
			name: '兰博基尼',
			price: '430w',
			imgUrl: 'img/2.jpg',
			monthCount: 30,
			id: 1022
		}, {
			name: '兰博基尼',
			price: '430w',
			imgUrl: 'img/2.jpg',
			monthCount: 30,
			id: 1023
		}, {
			name: '兰博基尼',
			price: '430w',
			imgUrl: 'img/2.jpg',
			monthCount: 30,
			id: 1024
		}];
	}

	$("#" + id).html(createMenuDom(content));

}

/**
 * 构建菜单条目的dom
 * @param {Object} content
 */
function createMenuDom(content) {
	var html = '',
		length;
	if (!$.isArray(content) || content.length < 1) {
		return '';
	}
	length = content.length;
	for (var i = 0; i < length; i++) {
		var temp = '<div id="' + 'meun_' + content[i].id + '" class="col-sm-10 col-md-6 col-lg-3"><div class="thumbnail"><div class="img-wrap">' 
				+ '<img src="' + content[i].imgUrl + '" alt="farrir" class="img-rounded"></div><div class="caption">' 
				+ '<div class="first-line"><b class="title">' + content[i].name + '</b>' 
				+ '<a href="javascript:#" role="button" aria-expanded="true"><span class="glyphicon glyphicon-heart-empty"></span></a>' 
				+ '<div><em>' + content[i].price + '</em><span>w元</span></div></div><div class="second-line">' 
				+ '<div>月售<strong>' + content[i].monthCount + '</strong>份</div></div>' 
				+ '<div class="third-line"><a class="btn btn-primary" type="button" onclick="addToOrder(this)">来一份<span class="badge">0</span></a>' 
				+ '<a class="btn btn-danger" type="button" onclick="reduceOrder(this)">取消</a></div></div><div class="clearfix"></div></div></div>';
		html += temp;
	}
	/**
	 * 模板内容，留作参考
	 */
	/*<div class="col-sm-10 col-md-6 col-lg-3">
						<div class="thumbnail">
							<div class="img-wrap">
								<img src="{{item.imgUrl}}" alt="farrir" class="img-rounded">
							</div>
							<div class="caption">
								<div class="first-line">
									<b class="title" ng-bind="item.name"></b>
									<a href="javascript:alert('i am in');" role="button" aria-expanded="true"><span class="glyphicon glyphicon-heart-empty"></span></a>
									<div><em ng-bind="item.price"></em><span>w元</span>
									</div>
								</div>
								<div class="second-line">
									<div>已点<strong ng-model="number">4</strong>份</div>
									<div>月售<strong>4</strong>份</div>
								</div>
								<div class="third-line">
									<a class="btn btn-primary" type="button">
										来一份 <span class="badge">0</span>
									</a>
									<a class="btn btn-danger" type="button">
										取消
									</a>
								</div>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>*/

	return html;

}

/**
 * 点击来一份的操作 
 * @param {Object} dom
 */
function addToOrder(dom){
	
	//数字加1
	var span = $(dom).children('span');
	span.html(parseInt(span.html(),10)+1);
	
	//背景颜色变深
	
	
	//更新订单数据
}

/**
 *  点击取消的操作
 * @param {Object} dom
 */
function reduceOrder(dom){
	
	//数字减1
	var sibling = $(dom).prev();
	var span = $(sibling).children('span');
	var count = parseInt(span.html(),10);
	if(count >=1 ){
		span.html(count-1);
	}
	//如果数量为零，改变背景色
	
	//更新订单数据
}

function menuClick(index) {
	alert('i am in');
	getCategory(index);
}

function getCategory(index) {
	alert(index);
}

