'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

window.functionBlocks = window.functionBlocks || {};
(function () {
	function __9631a724eca349a6835f296b891cfde4() {

		this._execute = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return this._openWindow('@@window|ManualSpeed|48bbb02f-53b3-4474-8255-d4f2cabf218a@@');

						case 2:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));
		__9631a724eca349a6835f296b891cfde4.prototype = new window.functionBlocks.functionBlock('_9631a724eca349a6835f296b891cfde4');
	};
	__9631a724eca349a6835f296b891cfde4.prototype = new window.functionBlocks.functionBlock('_9631a724eca349a6835f296b891cfde4');
	window.functionBlocks.__9631a724eca349a6835f296b891cfde4 = __9631a724eca349a6835f296b891cfde4;
})();