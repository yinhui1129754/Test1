/**
 * Created by Administrator on 2018/10/20.
 */
var $Utils = $Utils||{};
$Utils.isUndefined = function(v){ //是否是undefined
    return typeof v === "undefined";
};
$Utils.isNull = function(v){ //是否是null
    return v === null;
};
$Utils.isNil = function(v){ // 是否是false类型值
    return !!v;
};
$Utils.isArray = function(v){ //是否是table
    return Array.isArray(v);
};
$Utils.isString = function(v){ //是否是字符串
    return typeof v ==="string";
};
$Utils.isElement = function(v){ // 是否是节点
    return v instanceof HTMLElement;
};
$Utils.isFunction = function(v){
    return typeof v === "function";
};
$Utils.isElementName = function(v,name){
    return v instanceof HTMLElement && $Utils.isString(name)&&v.nodeName == name.toUpperCase();
};
$Utils.each = function(arr,callBack){
    if(arr.length&&$Utils.isFunction(callBack)){
        var i = 0,len = arr.length;
        for(i = 0;i<len;i++){
            if(!callBack.call(arr[i],arr[i],i)){//返回false退出循环
                continue;
            };
        }
    }else{
        return console.log("错误:传入的参数不是数组或者传入的回调函数不是一个函数对象");
    }
};