	var visible = true;

	function showDetailed() {
	    if (visible) {
	        document.getElementById('detailedBlock').style.display = 'none';
	        visible = false;
	    } else {
	        document.getElementById('detailedBlock').style.display = 'block';
	        visible = true;
	    }
	}

	function countPay() {
	    // тарифные константы, Москва, район Котловка
	    const T1TARIFF = "6.46";
	    const T2TARIFF = "1.79";
	    const T3TARIFF = "5.38";
	    const HOTTARIFF = "163";
	    const COLDTARIFF = "33";
	    const VODOOTVODTARIFF = "23";

	    // обнуление ячеек
	    var t1old = 0;
	    var t2old = 0;
	    var t3old = 0;
	    var hotold = 0;
	    var coldold = 0;

	    // получение старых данных из формы
	    t1old = document.getElementById("t1old").value;
	    t2old = document.getElementById("t2old").value;
	    t3old = document.getElementById("t3old").value;
	    hotold = document.getElementById("hotold").value;
	    coldold = document.getElementById("coldold").value;

	    // обнуление ячеек
	    var t1new = 0;
	    var t2new = 0;
	    var t3new = 0;
	    var hotnew = 0;
	    var coldnew = 0;

	    // получение новых данных из формы
	    t1new = document.getElementById("t1new").value;
	    t2new = document.getElementById("t2new").value;
	    t3new = document.getElementById("t3new").value;
	    hotnew = document.getElementById("hotnew").value;
	    coldnew = document.getElementById("coldnew").value;

	    // обнуление ячеек
	    var t1data = 0;
	    var t2data = 0;
	    var t3data = 0;
	    var hotdata = 0;
	    var colddata = 0;

	    var vodootvod = 0;

	    // получение дельты между новыми и старыми
	    t1data = t1new - t1old;
	    t2data = t2new - t2old;
	    t3data = t3new - t3old;
	    hotdata = hotnew - hotold;
	    colddata = coldnew - coldold;

	    vodootvod = (coldnew - coldold) + (hotnew - hotold);

	    // обнуление ячеек
	    var t1pay = 0;
	    var t2pay = 0;
	    var t3pay = 0;
	    var hotpay = 0;
	    var coldpay = 0;

	    var vodootvodpay = 0;

	    // рассчет платежей по отдельным направлениям
	    t1pay = T1TARIFF * t1data;
	    t2pay = T2TARIFF * t2data;
	    t3pay = T3TARIFF * t3data;
	    hotpay = HOTTARIFF * hotdata;
	    coldpay = COLDTARIFF * colddata;

	    vodootvodpay = VODOOTVODTARIFF * vodootvod;

	    // общая сумма
	    var total = 0;
	    total = t1pay + t2pay + t3pay + hotpay + coldpay;

	    if (isNaN(parseFloat(total)) == true) {
	        alert("Ошибка ввода данных! Где-то есть запятая или буква, их надо убрать");

	    } else {

	        document.getElementById("T1result").textContent =
	            "Было " + t1old + "  Стало " + t1new + "  Дельта " + t1data + "  Тариф " + T1TARIFF + "  Сумма " + t1pay + " руб";
	        document.getElementById("T2result").textContent =
	            "Было " + t2old + "  Стало " + t2new + "  Дельта " + t2data + "  Тариф " + T2TARIFF + "  Сумма " + t2pay + " руб";
	        document.getElementById("T3result").textContent =
	            "Было " + t3old + "  Стало " + t3new + "  Дельта " + t3data + "  Тариф " + T3TARIFF + "  Сумма " + t3pay + " руб";
	        document.getElementById("HOTresult").textContent =
	            "Было " + hotold + "  Стало " + hotnew + "  Дельта " + hotdata + "  Тариф " + HOTTARIFF + "  Сумма " + hotpay + " руб";
	        document.getElementById("COLDresult").textContent =
	            "Было " + coldold + "  Стало " + coldnew + "  Дельта " + colddata + "  Тариф " + COLDTARIFF + "  Сумма " + coldpay + " руб";
	        document.getElementById("VODOOTVODresult").textContent =
	            "Кубометры " + vodootvod + "  Тариф " + VODOOTVODTARIFF + "  Сумма " + vodootvodpay + " руб";
	        document.getElementById("totalresult").textContent =
	            "Итого: " + total + " руб";
	    }


	}

	function countPayLite() {

	    // тарифные константы, Москва, район Котловка
	    const T1TARIFF = "6.46";
	    const T2TARIFF = "1.79";
	    const T3TARIFF = "5.38";
	    const HOTTARIFF = "163";
	    const COLDTARIFF = "33";
	    const VODOOTVODTARIFF = "23";

	    // обнуление ячеек
	    var t1old = 0;
	    var t2old = 0;
	    var t3old = 0;
	    var hotold = 0;
	    var coldold = 0;

	    // получение старых данных из формы
	    t1old = document.getElementById("t1old").value;
	    t2old = document.getElementById("t2old").value;
	    t3old = document.getElementById("t3old").value;
	    hotold = document.getElementById("hotold").value;
	    coldold = document.getElementById("coldold").value;

	    // обнуление ячеек
	    var t1new = 0;
	    var t2new = 0;
	    var t3new = 0;
	    var hotnew = 0;
	    var coldnew = 0;

	    // получение новых данных из формы
	    t1new = document.getElementById("t1new").value;
	    t2new = document.getElementById("t2new").value;
	    t3new = document.getElementById("t3new").value;
	    hotnew = document.getElementById("hotnew").value;
	    coldnew = document.getElementById("coldnew").value;

	    // обнуление ячеек
	    var t1data = 0;
	    var t2data = 0;
	    var t3data = 0;
	    var hotdata = 0;
	    var colddata = 0;

	    var vodootvod = 0;

	    // получение дельты между новыми и старыми
	    t1data = t1new - t1old;
	    t2data = t2new - t2old;
	    t3data = t3new - t3old;
	    hotdata = hotnew - hotold;
	    colddata = coldnew - coldold;

	    vodootvod = (coldnew - coldold) + (hotnew - hotold);

	    // обнуление ячеек
	    var t1pay = 0;
	    var t2pay = 0;
	    var t3pay = 0;
	    var hotpay = 0;
	    var coldpay = 0;

	    var vodootvodpay = 0;

	    // рассчет платежей по отдельным направлениям
	    t1pay = T1TARIFF * t1data;
	    t2pay = T2TARIFF * t2data;
	    t3pay = T3TARIFF * t3data;
	    hotpay = HOTTARIFF * hotdata;
	    coldpay = COLDTARIFF * colddata;

	    vodootvodpay = VODOOTVODTARIFF * vodootvod;

	    // общая сумма
	    var total = 0;
	    total = t1pay + t2pay + t3pay + hotpay + coldpay;

	    if (isNaN(parseFloat(total)) == true) {
	        alert("Ошибка ввода данных! Где-то есть запятая или буква, их надо убрать");

	    } else {

	        document.getElementById("totalresult").textContent =
	            "Итого: " + total + " руб";

	    }
	}
