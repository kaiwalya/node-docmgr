var FindOptions = function (opt) {
	var This = this;
	if (opt) {
		This.opt = opt;
	}
	else {
		This.opt = {};
	}
};

FindOptions.prototype.first = function () {
	this.opt.findType = 'first';
};

FindOptions.prototype.isFirst = function () {
	return this.opt.findType === 'first';
};

FindOptions.prototype.done = function () {
	return this.opt;
};

exports.FindOptions = FindOptions;
