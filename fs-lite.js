const fs = require('fs');





exports.mkdir = path => {
	if (!fs.existsSync(path))
		fs.mkdirSync(path, {recursive: true});
}
exports.lines = path => {
	return fs.readFileSync(path, 'utf-8').split(/\r\n?\n/);
}
exports.eachLine = (path,consumer) => {
	fs.readFileSync(path, 'utf-8').split(/\r\n?\n/).forEach(consumer);
}
exports.rewrite = (path,content) => {
	var fc = Array.isArray(content) ? content.join('\n') : content;
	fs.writeFileSync(path, fc, { flag: 'w+'});
}
exports.dir = path => path.replace(/\/[^\/]*$/, "");
exports.cp = (source,dest) => {
	this.mkdir(this.dir(dest));
	fs.copyFileSync(source,dest);
}