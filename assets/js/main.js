(function () {
	// スマホのメニュー
	var btn = document.getElementById('mobile-nav-btn');
	var menu = document.getElementById('mobile-menu');
	if (btn && menu) {
		btn.addEventListener('click', function () {
			menu.classList.add('open');
			menu.setAttribute('aria-hidden', 'false');
		});
		menu.addEventListener('click', function (e) {
			if (e.target === menu || e.target.closest('.close-btn')) {
				menu.classList.remove('open');
				menu.setAttribute('aria-hidden', 'true');
			}
		});
	}

	// CM動画：「音を出して見る」で最初から音つき再生
	var video = document.getElementById('cm-video');
	var sound = document.getElementById('cm-sound');
	if (video && sound) {
		sound.addEventListener('click', function () {
			video.muted = false;
			video.currentTime = 0;
			video.play();
			sound.style.display = 'none';
		});
		video.addEventListener('volumechange', function () {
			if (!video.muted) sound.style.display = 'none';
		});
	}

	// 確認用の送信できないフォーム
	var forms = document.querySelectorAll('form.form-mock');
	for (var i = 0; i < forms.length; i++) {
		forms[i].addEventListener('submit', function (e) {
			e.preventDefault();
			alert('このフォームは確認用のプロトタイプのため、送信されません。');
		});
	}
})();
