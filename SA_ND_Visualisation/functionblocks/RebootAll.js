'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

window.functionBlocks = window.functionBlocks || {};
(function () {
	function __265700c42f8c460ca55add206d5648c3() {
		this._registerDataPoint('E:HV@s2_ed?$[H0Sosc3', '@@datapoint|1:clOperationSystem1.siRebootPlc|f1e61d44-6a69-4442-b95b-30979acf4edb@@');
		this._registerDataPoint('Z}|:$BulvIeBPk]F8OLS', '@@datapoint|0:clOperationSystem1.siRebootPlc|45b2ecb3-23e6-4b27-a090-e0f1ef2d1580@@');
		this._registerDataPoint('y#ap~AZ;[{m=J6}8Q`H8', '@@datapoint|2:clOperationSystem1.siRebootPlc|26a80a77-90aa-4725-bf8c-487ad2a94966@@');

		this._execute = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return this._setDataPoint('E:HV@s2_ed?$[H0Sosc3', 1);

						case 2:
							_context.next = 4;
							return this._setDataPoint('Z}|:$BulvIeBPk]F8OLS', 1);

						case 4:
							_context.next = 6;
							return this._setDataPoint('y#ap~AZ;[{m=J6}8Q`H8', 1);

						case 6:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));
		__265700c42f8c460ca55add206d5648c3.prototype = new window.functionBlocks.functionBlock('_265700c42f8c460ca55add206d5648c3');
	};
	__265700c42f8c460ca55add206d5648c3.prototype = new window.functionBlocks.functionBlock('_265700c42f8c460ca55add206d5648c3');
	window.functionBlocks.__265700c42f8c460ca55add206d5648c3 = __265700c42f8c460ca55add206d5648c3;
})();