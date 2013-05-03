var FindOptions = function (opt) {
	var This = this;
	if (opt) {
		if (opt.constructor = FindOptions) {
			This.opt = opt.opt;
		}
		else {
			This.opt = opt;
		}
	}
	else {
		This.opt = {};
	}
};

FindOptions.prototype.single = function () {
	this.opt.findType = 'single';
	return this;
};

FindOptions.prototype.isSingle = function () {
	return this.opt.findType === 'single';
};

FindOptions.prototype.done = function () {
	return this.opt;
};

exports.FindOptions = FindOptions;


var UpdateOptions = function (opt) {
	var This = this;
	if (opt) {
		if (opt.constructor = UpdateOptions) {
			This.opt = opt.opt;
		}
		else {
			This.opt = opt;
		}
	}
	else {
		This.opt = {
		};
	}
};

UpdateOptions.prototype.single = function () {
	var This = this;
	This.updateType = 'single';
};

UpdateOptions.prototype.isSingle = function () {
	var This = this;
	return This.updateType === 'single';
};


exports.UpdateOptions = UpdateOptions;

var Ex = function (msg) {
	Error.call(this, msg);
};
Ex.prototype = Object.create(Error.prototype);
exports.Exception = Ex;

var OOBEx = function () {
	Ex.call(this, "OutOfBoundsException");
};
OOBEx.prototype = Object.create(Ex.prototype);
exports.OutOfBoundsException = OOBEx;