var conferenceNamesMCU1 = [];
var participantNamesMCU1 = [];
var conferenceNamesMCU2 = [];
var participantNamesMCU2 = [];

handler_mcu1();
handler_mcu2();

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("mcu1").addEventListener("click", handler_mcu1);
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("mcu2").addEventListener("click", handler_mcu2);
});



document.addEventListener('DOMContentLoaded', function() {
document.getElementById('mcu1_table').addEventListener("click", function(ONTargetMCU1) {
    // e.target is the clicked element!
    // If it was a list item
   if(ONTargetMCU1.target.innerHTML === "ON" ) {
        // List item found!  Output the ID!

        ONFunctionMCU1(ONTargetMCU1.target.parentElement.children[0].innerHTML);
        console.log(ONTargetMCU1.target.parentElement.children[0].innerHTML);

    }
});
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mcu2_table').addEventListener("click", function(ONTargetMCU2) {
        // e.target is the clicked element!
        // If it was a list item
        if(ONTargetMCU2.target.innerHTML === "ON" ) {
            // List item found!  Output the ID!

            ONFunctionMCU2(ONTargetMCU2.target.parentElement.children[0].innerHTML);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mcu1_table').addEventListener("click", function(OFFTargetMCU1) {
        // e.target is the clicked element!
        // If it was a list item
        if(OFFTargetMCU1.target.innerHTML === "OFF" ) {
            // List item found!  Output the ID!

            OFFFunctionMCU1(OFFTargetMCU1.target.parentElement.children[0].innerHTML);

        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mcu2_table').addEventListener("click", function(OFFTargetMCU2) {
        // e.target is the clicked element!
        // If it was a list item
        if(OFFTargetMCU2.target.innerHTML === "OFF" ) {
            // List item found!  Output the ID!

            OFFFunctionMCU2(OFFTargetMCU2.target.parentElement.children[0].innerHTML);
        }
    });
});

var ONFunctionMCU1 = function (e) {
    var conf = (conferenceNamesMCU1[participantNamesMCU1.indexOf(e)]);

    $.post(
        "http://10.10.229.14/RPC2",
        "<?xml version='1.0'?><methodCall> <methodName>participant.modify</methodName> <params> <param> <value> <struct> <member> <name>authenticationUser</name> <value><string>admin</string></value> </member> <member> <name>authenticationPassword</name> <value><string>cisco</string></value> </member> <member> <name>conferenceName</name> <value> <string>" + conf + "</string> </value> </member> <member> <name>participantName</name> <value> <string>" + e + "</string> </value> </member> <member> <name>participantType</name> <value> <string>ad_hoc</string> </value> </member> <member> <name>participantProtocol</name> <value> <string>sip</string> </value> </member> <member> <name>audioRxMuted</name> <value> <boolean>1</boolean> </value> </member>  </struct> </value> </param> </params></methodCall>"
    );
    conferenceNamesMCU1 = [];
    participantNamesMCU1= [];
    handler_mcu1();
    handler_mcu2();
}

var ONFunctionMCU2 = function (e) {
    var conf = (conferenceNamesMCU2[participantNamesMCU2.indexOf(e)]);
    $.post(
        "http://10.10.229.33/RPC2",
        "<?xml version='1.0'?><methodCall> <methodName>participant.modify</methodName> <params> <param> <value> <struct> <member> <name>authenticationUser</name> <value><string>admin</string></value> </member> <member> <name>authenticationPassword</name> <value><string>cisco</string></value> </member> <member> <name>conferenceName</name> <value> <string>" + conf + "</string> </value> </member> <member> <name>participantName</name> <value> <string>" + e + "</string> </value> </member> <member> <name>participantType</name> <value> <string>ad_hoc</string> </value> </member> <member> <name>participantProtocol</name> <value> <string>sip</string> </value> </member> <member> <name>audioRxMuted</name> <value> <boolean>1</boolean> </value> </member>  </struct> </value> </param> </params></methodCall>"

    );
    conferenceNamesMCU2 = [];
    participantNamesMCU2= [];
    handler_mcu1();
    handler_mcu2();

}

function ontest(data) {
    console.log(data);
}

var OFFFunctionMCU1 = function (e) {
    var conf = (conferenceNamesMCU1[participantNamesMCU1.indexOf(e)]);
    $.post(
        "http://10.10.229.14/RPC2",
        "<?xml version='1.0'?><methodCall> <methodName>participant.modify</methodName> <params> <param> <value> <struct> <member> <name>authenticationUser</name> <value><string>admin</string></value> </member> <member> <name>authenticationPassword</name> <value><string>cisco</string></value> </member> <member> <name>conferenceName</name> <value> <string>" + conf + "</string> </value> </member> <member> <name>participantName</name> <value> <string>" + e + "</string> </value> </member> <member> <name>participantType</name> <value> <string>ad_hoc</string> </value> </member> <member> <name>participantProtocol</name> <value> <string>sip</string> </value> </member> <member> <name>audioRxMuted</name> <value> <boolean>0</boolean> </value> </member>  </struct> </value> </param> </params></methodCall>"
    );
    conferenceNamesMCU1 = [];
    participantNamesMCU1= [];
    handler_mcu1();
    handler_mcu2();
}

var OFFFunctionMCU2 = function (e) {
    var conf = (conferenceNamesMCU2[participantNamesMCU2.indexOf(e)]);
    $.post(
        "http://10.10.229.33/RPC2",
        "<?xml version='1.0'?><methodCall> <methodName>participant.modify</methodName> <params> <param> <value> <struct> <member> <name>authenticationUser</name> <value><string>admin</string></value> </member> <member> <name>authenticationPassword</name> <value><string>cisco</string></value> </member> <member> <name>conferenceName</name> <value> <string>" + conf + "</string> </value> </member> <member> <name>participantName</name> <value> <string>" + e + "</string> </value> </member> <member> <name>participantType</name> <value> <string>ad_hoc</string> </value> </member> <member> <name>participantProtocol</name> <value> <string>sip</string> </value> </member> <member> <name>audioRxMuted</name> <value> <boolean>0</boolean> </value> </member>  </struct> </value> </param> </params></methodCall>"

    );
    conferenceNamesMCU2 = [];
    participantNamesMCU2= [];
    handler_mcu1();
    handler_mcu2();
}

function handler_mcu1() {


    $('.foo1').remove();
    $.post(
        "http://10.10.229.14/RPC2",
        "<?xml version='1.0'?><methodCall> <methodName>participant.enumerate</methodName> <params> <param> <value> <struct> <member> <name>authenticationUser</name> <value><string>admin</string></value> </member> <member> <name>authenticationPassword</name> <value><string>cisco</string></value> </member> <member> <name>enumerateFilter</name> <value><string>connected</string></value> </member> <member> <name>operationScope</name> <value> <array> <data> <value> <string>currentState</string> </value>  </data> </array> </value> </member> </struct> </value> </param> </params></methodCall>",
        onAjaxSuccessMCU1
    );

    }

    function onAjaxSuccessMCU1(data)
    {


        var answer = $(data).find('name:contains("participantName")');
        var displaynames = $(data).find('name:contains("displayName")').filter(function() { return ($(this).text() === 'displayName') });

    console.log(data);
        for (var i = 0; i < answer.length; i++)
        {
            console.log($(data).find('name:contains("audioRxEnergyMillidB")')[i]);
            if ($(data).find('name:contains("audioRxEnergyMillidB")')[i].nextElementSibling.firstElementChild.innerHTML > -39500) {

                var table = $('<tr id="temptr"></tr>').addClass('foo1');
         

                conferenceNamesMCU1.push($(answer)[i].parentElement.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.firstElementChild.innerHTML);
                participantNamesMCU1.push($(answer)[i].nextElementSibling.children[0].innerHTML);

                var participantname = $(answer)[i].nextElementSibling.children[0].innerHTML;
                var row = $('<td></td>').addClass('pbar').text(participantname);
                table.append(row);
                $('#mcu1_table').append(table);

                var ipaddress = $(data).find('name:contains("ipAddress")')[i].nextElementSibling.firstElementChild.innerHTML;
                var row = $('<td></td>').addClass('bar').text(ipaddress);
                table.append(row);
                $('#mcu1_table').append(table);

                var address = $(data).find('name:contains("address")')[i].nextElementSibling.firstElementChild.innerHTML;
                var row = $('<td></td>').addClass('bar').text(address);
                table.append(row);
                $('#mcu1_table').append(table);

                var displayname = $(displaynames)[i].nextElementSibling.firstElementChild.innerHTML;
                var row = $('<td></td>').addClass('bar').text(displayname);
                table.append(row);
                $('#mcu1_table').append(table);

                var mutedstatus = $(data).find('name:contains("audioRxMuted")')[i].nextElementSibling.firstElementChild.innerHTML;
                if (mutedstatus == false) {
                    mutedstatusname = "ON";
                } else {
                    mutedstatusname = "OFF";
                }

                var button = $('<button id="buttonid">' + mutedstatusname + '</button>').addClass('buttonclass');
                table.append(button);
                $('#mcu1_table').append(table);

                var volume = $(data).find('name:contains("audioRxEnergyMillidB")')[i].nextElementSibling.firstElementChild.innerHTML;
                console.log("Volume: " + volume);
                var row = $('<td></td>').addClass('bar').text(volume);
                table.append(row);
                $('#mcu1_table').append(table);
            }



        }


    }

function handler_mcu2() {
    $('.foo2').remove();
    $.post(
        "http://10.10.229.33/RPC2",
        "<?xml version='1.0'?><methodCall> <methodName>participant.enumerate</methodName> <params> <param> <value> <struct> <member> <name>authenticationUser</name> <value><string>admin</string></value> </member> <member> <name>authenticationPassword</name> <value><string>cisco</string></value> </member> <member> <name>enumerateFilter</name> <value><string>connected</string></value> </member> <member> <name>operationScope</name> <value> <array> <data> <value> <string>currentState</string> </value>  </data> </array> </value> </member> </struct> </value> </param> </params></methodCall>",
        onAjaxSuccessMCU2
    );

}

function onAjaxSuccessMCU2(data)
{

    var answer = $(data).find('name:contains("participantName")');
    var displaynames = $(data).find('name:contains("displayName")').filter(function() { return ($(this).text() === 'displayName') });

    for (var m = 0; m < answer.length; m++)
    {
        if ($(data).find('name:contains("audioRxEnergyMillidB")')[m].nextElementSibling.firstElementChild.innerHTML > -39500) {

            var table = $('<tr id="temptr"></tr>').addClass('foo2');

            conferenceNamesMCU2.push($(answer)[m].parentElement.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.firstElementChild.innerHTML);
            participantNamesMCU2.push($(answer)[m].nextElementSibling.children[0].innerHTML);

            var participantname = $(answer)[m].nextElementSibling.children[0].innerHTML;
            var row = $('<td></td>').addClass('bar').text(participantname);
            table.append(row);
            $('#mcu2_table').append(table);

            var ipaddress = $(data).find('name:contains("ipAddress")')[m].nextElementSibling.firstElementChild.innerHTML;
            var row = $('<td></td>').addClass('bar').text(ipaddress);
            table.append(row);
            $('#mcu2_table').append(table);

            var address = $(data).find('name:contains("address")')[m].nextElementSibling.firstElementChild.innerHTML;
            var row = $('<td></td>').addClass('bar').text(address);
            table.append(row);
            $('#mcu2_table').append(table);

            var displayname = $(displaynames)[m].nextElementSibling.firstElementChild.innerHTML;
            var row = $('<td></td>').addClass('bar').text(displayname);
            table.append(row);
            $('#mcu2_table').append(table);

            var mutedstatus = $(data).find('name:contains("audioRxMuted")')[m].nextElementSibling.firstElementChild.innerHTML;
            if (mutedstatus == false) {
                mutedstatusname = "ON";
            } else {
                mutedstatusname = "OFF";
            }
            var button = $('<button id="buttonid">' + mutedstatusname + '</button>').addClass('buttonclass');
            table.append(button);
            $('#mcu1_table').append(table);

            var volume = $(data).find('name:contains("audioRxEnergyMillidB")')[m].nextElementSibling.firstElementChild.innerHTML;
            console.log("Volume: " + volume);
            var row = $('<td></td>').addClass('bar').text(volume);
            table.append(row);
            $('#mcu2_table').append(table);
        }


    }

}







