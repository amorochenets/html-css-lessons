function mywindow(sSelector) {
	var w = this;
	w.mywindow = $(sSelector);
	w.startCountdownBtn = w.mywindow.find('.b-mywindow__start-countdown');
	w.stopCoundownBtn = w.mywindow.find('.b-mywindow__stop-countdown');
	w.startTickerBtn = w.mywindow.find('.b-mywindow__start-ticker');
	w.stopTickerBtn = w.mywindow.find('.b-mywindow__stop-ticker');
	w.openWindowBtn = w.mywindow.find('.b-mywindow__open-window');
	w.closeWindowBtn = w.mywindow.find('.b-mywindow__close-window');

	w.ticker = null; //периодический таймер
	w.countdown = null; // счетчик обратного отсчета
	w.tickerTime = 0; // время таймера (накопитель)
	w.tickerPeriod = .25; // шаг тамера
	w.newWindow = null; // указатель окна

	//---------------
	w.startCountdown = function() {
		var mayIStart = window.confirm('Можно приступать?');

		if (mayIStart) {
			w.countdown = window.setTimeout(
				w.countdownNotification, 5000
			);
		} else {
			alert('Ну, не хотите, как хотите.');
		}
	}; // обратный отсчет
	w.stopCoundown = function() {
		window.clearTimeout(w.countdown);
		alert('Таймер остановлен.');
	};

	w.startTicker = function() {
		w.ticker = window.setInterval(w.tickerNotification, w.tickerPeriod * 1000);
	}; // таймер 
	w.stopTicker = function() {
		window.clearInterval(w.ticker);
		alert('Таймер остановлен');
	};
	w.openWindow = function() {
		w.newWindow = window.open(
			'new_window.html', '_blank', 'width=300, height=300'
		);
	}; // окно
	w.closeWindow = function() {
		w.newWindow.close();
	};
	w.countdownNotification = function() {
		alert('Время иссякло!');
	};
	w.tickerNotification = function() {
		w.tickerTime += w.tickerPeriod;
		console.log('Прошло ' + w.tickerTime + ' секунд');
	};

	//----------------
	w.startCountdownBtn.bind('click', w.startCountdown);
	w.stopCoundownBtn.bind('click', w.stopCoundown);
	w.startTickerBtn.bind('click', w.startTicker);
	w.stopTickerBtn.bind('click', w.stopTicker);
	w.openWindowBtn.bind('click', w.openWindow);
	w.closeWindowBtn.bind('click', w.closeWindow);

};