//=============================================================================
// HyperLink.js
// PUBLIC DOMAIN
// ----------------------------------------------------------------------------
// 2016/12/04 リンクの背景を丸く白で塗りました
// 2017/02/01 ローカル実行時、標準ブラウザからリンクを開くようにしました
// 2018/10/12 RPGアツマールでのリンク表示に対応
//=============================================================================

/*:
 * @plugindesc ゲーム中に外部ページへのリンクを貼ります。
 * @author くらむぼん
 *
 * @param description
 * @desc リンクと一緒に表示されるメッセージ。すべてのリンクにおいて共通です
 * @default Webサイトへのリンク
 *
 * @help
 * プラグインコマンドにより指定したタイミングで、他のページへのリンクを表示します。
 * 位置は画面中央固定。仕組み上ポップアップブロックされることはないはずです。
 * 
 * プラグインコマンド：
 * link on http://*** タイトル
 * 　「http://***」へのリンクを「タイトル」という名前で画面に表示します。
 * link off
 * 　表示しているリンクを消します。
 * 
 * RPGアツマールでの動作：
 * このプラグインは、RPGアツマール上での利用にも対応しています。
 * ただし、アツマール上ではアツマール側が用意したウィンドウ上にリンクが表示されます。
 * また、デザインが少し違う関係でlink onの「タイトル」指定が無視されるようになり、
 * link offは動作しなくなり、代わりにウィンドウを閉じることでリンクを消せるようになります。
 * 
 * ライセンス：
 * このプラグインの利用法に制限はありません。お好きなようにどうぞ。
 */

(function() {
	'use strict';
	var parameters = PluginManager.parameters('HyperLink');
	var description = parameters['description'];

	function stopPropagation(event) {
		event.stopPropagation();
	}

	Graphics.printLink = function(url, title) {
		if (this._errorPrinter) {
			var link = '<a href="index1.html" id="HyperLink" class="saba1"><img src="slight.png"></a><a href="index2.html" id="HyperLink2" class="saba2"><img src="sdarkness.png"></a><a href="index3.html" id="HyperLink3" class="saba3"><img src="sNature.png"></a>';
			this._errorPrinter.innerHTML = this._makeErrorHtml("", link);
			var a = document.getElementById('HyperLink');
			a.addEventListener('mousedown', stopPropagation);
			a.addEventListener('touchstart', stopPropagation);
			a.addEventListener('click', function(event) {
			});

			var a = document.getElementById('HyperLink2');
			a.addEventListener('mousedown', stopPropagation);
			a.addEventListener('touchstart', stopPropagation);
			a.addEventListener('click', function(event) {
			});

			var a = document.getElementById('HyperLink3');
			a.addEventListener('mousedown', stopPropagation);
			a.addEventListener('touchstart', stopPropagation);
			a.addEventListener('click', function(event) {
			});

		}
	};

	Graphics.clearLink = function() {
		if (this._errorPrinter) {
			this._errorPrinter.innerHTML = '';
		}
	};

	var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
	Game_Interpreter.prototype.pluginCommand = function(command, args) {
		_Game_Interpreter_pluginCommand.apply(this, arguments);
		if (command.toLowerCase() === 'link') {
			switch (args[0].toLowerCase()) {
				case 'on':
					Graphics.printLink(args[1], args[2]);
					break;
				case 'off':
					Graphics.clearLink();
					break;
				default:
					break;
			}
		}
	};
})();