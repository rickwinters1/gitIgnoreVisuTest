'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

window.functionBlocks = window.functionBlocks || {};
(function () {
	function __b0b039598408427a9e319b837da7025c() {

		this._execute = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return this._openWindow('@@window|Reboot|0450de6e-bab6-4f4f-b23b-07c112e99a7b@@');

						case 2:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));
		__b0b039598408427a9e319b837da7025c.prototype = new window.functionBlocks.functionBlock('_b0b039598408427a9e319b837da7025c');
	};
	__b0b039598408427a9e319b837da7025c.prototype = new window.functionBlocks.functionBlock('_b0b039598408427a9e319b837da7025c');
	window.functionBlocks.__b0b039598408427a9e319b837da7025c = __b0b039598408427a9e319b837da7025c;
})();