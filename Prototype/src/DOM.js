(function(win, Hydra, Prototype){
	'use strict';
	var doc = win.document, DOM;
	function find(sSelector, oContext)
	{
		return Prototype.Selector.select(sSelector, (oContext || doc));
	}
	function toArray(oNodeList)
	{
		var nNode = 0,
			aArr = [],
			nLenNodes = oNodeList.length,
			oNode;
		for(; nNode < nLenNodes; nNode++)
		{
			oNode = oNodeList[nNode];
			aArr.push(oNode);
		}
		return aArr;
	}

	/**
	 * DOM jQuery methods wrapper
	 * @type {Object}
	 */
	DOM = {
		/**
		 * Get element by Id
		 * @param {String} sId
		 * @param {Element} oContext
		 * @param {Boolean} bBasicNode if true the element will be a DOM element, if false the element will be a jQuery object
		 * @return {Node/jQuery}
		 */
		byId: function(sId, oContext, bBasicNode)
		{
			var $NodeList = find("#" + sId, oContext);
			if(bBasicNode)
			{
				return $NodeList[0] || null;
			}
			return $NodeList;
		},
		/**
		 * Return elements that have the classname provided as argument
		 * @param {String} sClassName
		 * @param {Element} oContext
		 * @param {Boolean} bBasicNode if true the element will be a NodeList of DOM elements, if false the element will be a jQuery object
		 * @return {NodeList}
		 */
		byClassName: function(sClassName, oContext, bToArray)
		{
			var $NodeList = find("." + sClassName, oContext);
			if(bToArray)
			{
				return toArray($NodeList);
			}
			return $NodeList;
		},
		/**
		 * Return elements of the same type as tag name provided as argument
		 * @param {String} sTagName
		 * @param {Element}oContext
		 * @param {Boolean} bBasicNode if true the element will be a NodeList of DOM elements, if false the element will be a jQuery object
		 * @return {NodeList}
		 */
		byTagName: function(sTagName, oContext, bToArray)
		{
			var $NodeList = find(sTagName, oContext);
			if(bToArray)
			{
				return toArray($NodeList);
			}
			return $NodeList;
		},
		/**
		 * Return elements provided by the css3 selector
		 * @param {String} sCss3Selector
		 * @param {Element} oContext
		 * @param {Boolean} bBasicNode if true the element will be a NodeList of DOM elements, if false the element will be a jQuery object
		 * @return {NodeList}
		 */
		byCssSelector: function(sCssSelector, oContext, bToArray)
		{
			var $NodeList = find(sCssSelector, oContext);
			if(bToArray)
			{
				return toArray($NodeList);
			}
			return $NodeList;
		}
	};
	Hydra.extend("dom", DOM);
}(window, Hydra, Prototype));