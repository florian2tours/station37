function FilterData()
{
	var tf = document.getElementById("filterTF");
	if (!tf.value)
	{

		stations.filter(null);
		return;
	}

	var regExpStr = tf.value;
	
	if (!document.getElementById("containsCB").checked)
		regExpStr = "^" + regExpStr;

	var regExp = new RegExp(regExpStr, "i");
	
	var filterFunc = function(ds, row, rowNumber)
	{
		var str = row["commune"];
		if (str && str.search(regExp) != -1)
			return row;
		return null;
	};

	stations.filter(filterFunc);
}
function StartFilterCommunes()
{
	if (StartFilterCommunes.timerID)
		clearTimeout(StartFilterCommunes.timerID);
	StartFilterCommunes.timerID = setTimeout(function() { StartFilterCommunes.timerID = null; FilterData(); }, 100);
}
function FilterData2()
{
	var tf = document.getElementById("filterTF2");
	if (!tf.value)
	{

		stations.filter(null);
		return;
	}

	var regExpStr = tf.value;
	
	if (!document.getElementById("containsCB2").checked)
		regExpStr = "^" + regExpStr;

	var regExp = new RegExp(regExpStr, "i");
	
	var filterFunc = function(ds, row, rowNumber)
	{
		var str = row["arret"];
		if (str && str.search(regExp) != -1)
			return row;
		return null;
	};

	stations.filter(filterFunc);
}
function StartFilterArrets()
{
	if (StartFilterCommunes.timerID)
		clearTimeout(StartFilterCommunes.timerID);
	StartFilterCommunes.timerID = setTimeout(function() { StartFilterCommunes.timerID = null; FilterData2(); }, 100);
}
function FilterData3()
{
	var tf = document.getElementById("filterTF3");
	if (!tf.value)
	{

		stations.filter(null);
		return;
	}

	var regExpStr = tf.value;
	
	if (!document.getElementById("containsCB3").checked)
		regExpStr = "^" + regExpStr;

	var regExp = new RegExp(regExpStr, "i");
	
	var filterFunc = function(ds, row, rowNumber)
	{
		var str = row["service1"];
		if (str && str.search(regExp) != -1)
			return row;
		return null;
	};

	stations.filter(filterFunc);
}
function StartFilterLigne()
{
	if (StartFilterLigne.timerID)
		clearTimeout(StartFilterLigne.timerID);
	StartFilterLigne.timerID = setTimeout(function() { StartFilterLigne.timerID = null; FilterData3(); }, 100);
}
function ffRemi(ds, row, index){ return (row.logo_service1 == "logo_services/remi.png") ? row : null; };
function ffFilbleu(ds, row, index){ return (row.logo_service1 == "logo_services/filbleu.png") ? row : null; };
function ffBusAmboise(ds, row, index){ return (row.logo_service1 == "logo_services/bus_amboise.png") ? row : null; };
function ffPhilobus(ds, row, index){ return (row.logo_service1 == "logo_services/philobus.png") ? row : null; };
function ffCVLmobi(ds, row, index){ return (row.logo_service1 == "logo_services/cvl_mobilite.png") ? row : null; };
function ffBusChR(ds, row, index){ return (row.logo_service1 == "logo_services/bus_chr.png") ? row : null; };
function ffRemiTAD(ds, row, index){ return (row.logo_service1 == "logo_services/remi_tad.png") ? row : null; };

function ToggleFilter(enable, f)
{
	if (enable)
		stations.addFilter(f, true);
	else
		stations.removeFilter(f, true);
}