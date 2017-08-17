// 定义一个sooCatalog对象的构造函数
function sooCatalog(parentNode) {
	this.getHxNodes = function(parentNode) {
		var hxNodes = []; // 用于存储hx类型的节点 
		var allNodes = parentNode.cloneNode(true).getElementsByTagName("*"); // 用于获取传入节点的所有子孙节点

		for(var i = 0, parentNodeLength = parentNode.length; i < parentNodeLength; i++) {

		}

		for(var j = 0, allNodesLength = allNodes.length; j < allNodesLength; j++) {
			// 判断是否为元素节点
			if(allNodes[j].nodeType === 1) {
				// 判断是否为hx元素节点
				// HTMLHeadingElement
				//						if((allNodes[i].nodeName === "H1") 
				//							|| (allNodes[i].nodeName === "H2") 
				//							|| (allNodes[i].nodeName === "H3") 
				//							|| (allNodes[i].nodeName === "H4") 
				//							|| (allNodes[i].nodeName === "H5") 
				//							|| (allNodes[i].nodeName === "H6")) {
				//							hxNodes.push(allNodes[i]);
				//							//console.log(allNodes[i].nodeName);
				//						}
				if(allNodes[j] instanceof HTMLHeadingElement) {
					hxNodes.push(allNodes[j]);
				}
			}
		}
		console.log(hxNodes.length);
		return hxNodes;
	};

	this.generateCatalog = function(arr_hxNodes) {
		// 得到目录展示位置
		var ele_sooCatalog = document.getElementById("sooCatalog");
		var ele_item = null;
		var str_itemContent = null;
		var str_itemHref = null;
		for(var i = 0, hxLength = arr_hxNodes.length; i < hxLength; i++) {
			ele_item = document.createElement("a");
			str_itemContent = arr_hxNodes[i].firstChild.nodeValue;
			str_itemHref = "#" + arr_hxNodes[i].getAttribute("id");
			ele_item.setAttribute("href", str_itemHref);
			ele_item.appendChild(document.createTextNode(str_itemContent))
			//ele_sooCatalog.appendChild(arr_hxNodes[i]);
			arr_hxNodes[i].removeAttribute("id");
			arr_hxNodes[i].replaceChild(ele_item, arr_hxNodes[i].firstChild);
			console.log(ele_item);
			ele_sooCatalog.appendChild(arr_hxNodes[i]);
		}
	};
	this.insertCatalog = function() {
		var arr_hxNodes = this.getHxNodes(parentNode);
		this.generateCatalog(arr_hxNodes);
	};
}

var start = new Date().getTime(); //起始时间

new sooCatalog(document.getElementById("article")).insertCatalog();

var end = new Date().getTime(); //接受时间
console.log((end - start) + "ms"); //返回函数执行需要时间