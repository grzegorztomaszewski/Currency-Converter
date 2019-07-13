//Pobieranie Id
const plnIdTb = document.getElementById("plnIdTb");
const eurIdTb = document.getElementById("eurIdTb");
const usdIdTb = document.getElementById("usdIdTb");
const audIdTb = document.getElementById("audIdTb");
const gbpIdTb = document.getElementById("gbpIdTb");
const cadIdTb = document.getElementById("cadIdTb");
const hkdIdTb = document.getElementById("hkdIdTb");
const jpyIdTb = document.getElementById("jpyIdTb");
const chfIdTb = document.getElementById("chfIdTb");

const dateId = document.getElementById("dateId");

const currencyJsonPln = document.getElementById("currencyJsonPln");
const currencyJsonEur = document.getElementById("currencyJsonEur");
const currencyJsonUsd = document.getElementById("currencyJsonUsd");
const currencyJsonAud = document.getElementById("currencyJsonAud");
const currencyJsonGbp = document.getElementById("currencyJsonGbp");
const currencyJsonCad = document.getElementById("currencyJsonCad");
const currencyJsonHkd = document.getElementById("currencyJsonHkd");
const currencyJsonJpy = document.getElementById("currencyJsonJpy");
const currencyJsonChf = document.getElementById("currencyJsonChf");

const inputId = document.getElementById("inputId");
const btConvert = document.getElementById("btConvert");
const selectId = document.getElementById("selectId");

//Get currency from API
$.ajax({
    url : "http://api.nbp.pl/api/exchangerates/tables/a/",
    method : "get",
    dataType : "json"
})
.done((res) => {
    dateId.innerText = `Exchange rates as at ${res[0].effectiveDate}`; //Date currency
    plnIdTb.innerText = "PLN";
    eurIdTb.innerText = (res[0].rates[7].code); 
    usdIdTb.innerText = (res[0].rates[1].code); 
    audIdTb.innerText = (res[0].rates[2].code); 
    gbpIdTb.innerText = (res[0].rates[10].code); 
    cadIdTb.innerText = (res[0].rates[4].code); 
    hkdIdTb.innerText = (res[0].rates[3].code); 
    jpyIdTb.innerText = (res[0].rates[12].code); 
    chfIdTb.innerText = (res[0].rates[9].code); 

    const plnCurrencyApi = 1;
    const eurCurrencyApi = res[0].rates[7].mid;
    const usdCurrencyApi = res[0].rates[1].mid;
    const audCurrencyApi = res[0].rates[2].mid;
    const gbpCurrencyApi = res[0].rates[10].mid;
    const cadCurrencyApi = res[0].rates[4].mid;
    const hkdCurrencyApi = res[0].rates[3].mid;
    const jpyCurrencyApi = res[0].rates[12].mid;
    const chfCurrencyApi = res[0].rates[9].mid; 

    currencyJsonPln.innerText = 1;
    currencyJsonEur.innerText = res[0].rates[7].mid;
    currencyJsonUsd.innerText = res[0].rates[1].mid;
    currencyJsonAud.innerText = res[0].rates[2].mid;
    currencyJsonGbp.innerText = res[0].rates[10].mid;
    currencyJsonCad.innerText = res[0].rates[4].mid;
    currencyJsonHkd.innerText = res[0].rates[3].mid;
    currencyJsonJpy.innerText = res[0].rates[12].mid;
    currencyJsonChf.innerText = res[0].rates[9].mid;;

    //Converting
    //PLN
    $(btConvert).click(function(){
        if(selectId.value === "PLN"){
            currencyJsonPln.innerText = `${inputId.value}`;
            currencyJsonEur.innerText = ((plnCurrencyApi/eurCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonUsd.innerText = ((plnCurrencyApi/usdCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonAud.innerText = ((plnCurrencyApi/audCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonGbp.innerText = ((plnCurrencyApi/gbpCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonCad.innerText = ((plnCurrencyApi/cadCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonHkd.innerText = ((plnCurrencyApi/hkdCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonJpy.innerText = ((plnCurrencyApi/jpyCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonChf.innerText = ((plnCurrencyApi/chfCurrencyApi)*inputId.value).toFixed(2);
        }
    });
    //EUR
    $(btConvert).click(function(){
        if(selectId.value === "EUR"){
            currencyJsonEur.innerText = `${inputId.value}`;
            currencyJsonPln.innerText = ((eurCurrencyApi/plnCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonUsd.innerText = ((eurCurrencyApi/usdCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonAud.innerText = ((eurCurrencyApi/audCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonGbp.innerText = ((eurCurrencyApi/gbpCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonCad.innerText = ((eurCurrencyApi/cadCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonHkd.innerText = ((eurCurrencyApi/hkdCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonJpy.innerText = ((eurCurrencyApi/jpyCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonChf.innerText = ((eurCurrencyApi/chfCurrencyApi)*inputId.value).toFixed(2);
        }
    });
    //USD
    $(btConvert).click(function(){
        if(selectId.value === "USD"){
            currencyJsonUsd.innerText = `${inputId.value}`;
            currencyJsonPln.innerText = ((usdCurrencyApi/plnCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonEur.innerText = ((usdCurrencyApi/eurCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonAud.innerText = ((usdCurrencyApi/audCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonGbp.innerText = ((usdCurrencyApi/gbpCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonCad.innerText = ((usdCurrencyApi/cadCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonHkd.innerText = ((usdCurrencyApi/hkdCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonJpy.innerText = ((usdCurrencyApi/jpyCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonChf.innerText = ((usdCurrencyApi/chfCurrencyApi)*inputId.value).toFixed(2);
        }
    });
    //AUD
    $(btConvert).click(function(){
        if(selectId.value === "AUD"){
            currencyJsonAud.innerText = `${inputId.value}`;
            currencyJsonPln.innerText = ((audCurrencyApi/plnCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonUsd.innerText = ((audCurrencyApi/usdCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonEur.innerText = ((audCurrencyApi/eurCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonGbp.innerText = ((audCurrencyApi/gbpCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonCad.innerText = ((audCurrencyApi/cadCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonHkd.innerText = ((audCurrencyApi/hkdCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonJpy.innerText = ((audCurrencyApi/jpyCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonChf.innerText = ((audCurrencyApi/chfCurrencyApi)*inputId.value).toFixed(2);
        }
    });
    //GBP
    $(btConvert).click(function(){
        if(selectId.value === "GBP"){
            currencyJsonGbp.innerText = `${inputId.value}`;
            currencyJsonPln.innerText = ((gbpCurrencyApi/plnCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonUsd.innerText = ((gbpCurrencyApi/usdCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonEur.innerText = ((gbpCurrencyApi/eurCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonAud.innerText = ((gbpCurrencyApi/audCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonCad.innerText = ((gbpCurrencyApi/cadCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonHkd.innerText = ((gbpCurrencyApi/hkdCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonJpy.innerText = ((gbpCurrencyApi/jpyCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonChf.innerText = ((gbpCurrencyApi/chfCurrencyApi)*inputId.value).toFixed(2);
        }
    });
    //CAD
    $(btConvert).click(function(){
        if(selectId.value === "CAD"){
            currencyJsonCad.innerText = `${inputId.value}`;
            currencyJsonPln.innerText = ((cadCurrencyApi/plnCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonUsd.innerText = ((cadCurrencyApi/usdCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonEur.innerText = ((cadCurrencyApi/eurCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonGbp.innerText = ((cadCurrencyApi/gbpCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonAud.innerText = ((cadCurrencyApi/audCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonHkd.innerText = ((cadCurrencyApi/hkdCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonJpy.innerText = ((cadCurrencyApi/jpyCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonChf.innerText = ((cadCurrencyApi/chfCurrencyApi)*inputId.value).toFixed(2);
        }
    });
    //HKD
    $(btConvert).click(function(){
        if(selectId.value === "HKD"){
            currencyJsonHkd.innerText = `${inputId.value}`;
            currencyJsonPln.innerText = ((hkdCurrencyApi/plnCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonUsd.innerText = ((hkdCurrencyApi/usdCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonEur.innerText = ((hkdCurrencyApi/eurCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonGbp.innerText = ((hkdCurrencyApi/gbpCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonCad.innerText = ((hkdCurrencyApi/cadCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonAud.innerText = ((hkdCurrencyApi/audCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonJpy.innerText = ((hkdCurrencyApi/jpyCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonChf.innerText = ((hkdCurrencyApi/chfCurrencyApi)*inputId.value).toFixed(2);
        }
    });
    //JPY
    $(btConvert).click(function(){
        if(selectId.value === "JPY"){
            currencyJsonJpy.innerText = `${inputId.value}`;
            currencyJsonPln.innerText = ((jpyCurrencyApi/plnCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonUsd.innerText = ((jpyCurrencyApi/usdCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonEur.innerText = ((jpyCurrencyApi/eurCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonGbp.innerText = ((jpyCurrencyApi/gbpCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonCad.innerText = ((jpyCurrencyApi/cadCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonHkd.innerText = ((jpyCurrencyApi/hkdCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonAud.innerText = ((jpyCurrencyApi/audCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonChf.innerText = ((jpyCurrencyApi/chfCurrencyApi)*inputId.value).toFixed(2);
        }
    });
    //CHF
    $(btConvert).click(function(){
        if(selectId.value === "CHF"){
            currencyJsonChf.innerText = `${inputId.value}`;
            currencyJsonPln.innerText = ((chfCurrencyApi/plnCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonUsd.innerText = ((chfCurrencyApi/usdCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonEur.innerText = ((chfCurrencyApi/eurCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonGbp.innerText = ((chfCurrencyApi/gbpCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonCad.innerText = ((chfCurrencyApi/cadCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonHkd.innerText = ((chfCurrencyApi/hkdCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonJpy.innerText = ((chfCurrencyApi/jpyCurrencyApi)*inputId.value).toFixed(2);
            currencyJsonAud.innerText = ((chfCurrencyApi/audCurrencyApi)*inputId.value).toFixed(2);
        }
    });
});